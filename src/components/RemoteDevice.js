import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Button, Shell, Card, Grid, Icon, Divider, Range, Switch, Select, Input, Notification, Typography } from '@alifd/next';
import { WaveCenter, KDataUtils } from '../services/DGLab'
import Logo from '../logo.svg'
import axios from 'axios'
import NIM from '../services/NIM_Web_NIM_v8.0.0'
import { DGRemoteV1, DGRemoteV2 } from '../services/OpenDGLab-Remote'

const { Row, Col } = Grid;
class RemoteDevice extends React.Component {
    state = {
        version: '',
        connect: '正在准备...',
        startA: '0',
        startB: '0',
        limitA: 0,
        limitB: 0,
        strengthA: 0,
        strengthB: 0,
        strengthStepA: 1,
        strengthStepB: 1,
        channelAAuto: false,
        channelBAuto: false,
        waveA: WaveCenter.Companion.getBasicWaveList()[0],
        waveB: WaveCenter.Companion.getBasicWaveList()[0],
        dataA: [],
        dataB: [],
        customWave: '',
        customWaveUnsaved: '',
        customWaveSaved: true,
        autoChangeA: 200,
        autoChangeB: 200
    }
    options = { 
        maintainAspectRatio: false, 
        tooltips: { 
          enabled: false
        }, 
        legend: { 
          display: false 
        }, 
        title: { 
          display: false
        },
        scales: {
          xAxes: [{
              display: false
          }],
          yAxes: [{
              display: false,
              ticks: {
                min: 0,
                max: 20
              }
          }]
        }
      }
    nim = null
    remote = null
    version = null
    labels = new Array(100).fill('')
    waveA = new WaveCenter()
    waveB = new WaveCenter()
    waveSource = WaveCenter.Companion.getBasicWaveList().concat('Custom').map((v) => { return { label: v, value: v } })
    
    get dataA() {
        return {
            labels: this.labels,
            datasets: [{
              label: '强度',
              categoryPercentage: 1,
              barPercentage: 1,
              backgroundColor: '#FFE99D',
              color: '#FFE99D',
              maxBarThickness: 2,
              data: this.state.dataA
            }]
        }
    }
    get dataB() {
        return {
            labels: this.labels,
            datasets: [{
              label: '强度',
              categoryPercentage: 1,
              barPercentage: 1,
              backgroundColor: '#FFE99D',
              color: '#FFE99D',
              maxBarThickness: 2,
              data: this.state.dataB
            }]
        }
    }
    timer = null
    componentDidMount() {
        let { remote } = this.props
        if (remote.split('#')[1].length > 10) {
            this.version = 'V2'
            this.remote = new DGRemoteV2.Controller(window.dgremote.auth, remote)
            this.setState({version: 'V2'})
            this.afterConnect()
        } else {
            this.version = 'V1'
            this.remote = new DGRemoteV1.Controller(window.dgremote.auth, remote)
            this.setState({version: 'V1'})
            let reqConnect = this.remote.joinControl()
            axios({
                method: 'post',
                url: 'https://corsanywhere.herokuapp.com/' + reqConnect.url + '',
                headers: Object.assign({
                    'Content-Type': reqConnect.contentType,
                    'X-Requested-With': ''
                }, Object.assign(...reqConnect.headers.map((v)=>{ 
                    let hed = {}
                    hed[v.key] = v.value
                    return hed
                }))),
                data: reqConnect.body
            }).then((v) => {
                this.remote.process(JSON.stringify(v.data), reqConnect.requestCode)
                this.afterConnect()
                let limit = this.remote.getLimit()
                this.setState({ startA: '协议不支持', startB: '协议不支持', limitA: limit.first, limitB: limit.second })
            })
        }
    }
    afterConnect = () => {
        this.waveA.selectWave(WaveCenter.Companion.getBasicWave(WaveCenter.Companion.getBasicWaveList()[0]))
        this.waveB.selectWave(WaveCenter.Companion.getBasicWave(WaveCenter.Companion.getBasicWaveList()[0]))
        if ((this.version === 'V1' && this.remote.canOnline()) || this.version === 'V2') {
            this.setState({ connect: '正在创建连接...' })
            let nimConfig = this.remote.getNIMConnect()
            this.nim = NIM.getInstance({
                appKey: nimConfig.appKey,
                account: nimConfig.account,
                token: nimConfig.token,
                db: false,
                onconnect: () => {
                    let conn = this.remote.connect()
                    this.nim.sendText({
                        scene: 'p2p',
                        to: conn.toID,
                        text: conn.msg
                    })
                },
                onwillreconnect: () => {},
                ondisconnect: (error) => {
                    if (error) {
                        switch (error.code) {
                            case 302:
                                this.setState({ connect: '账号或密码错误' })
                                break
                            case 417:
                                this.setState({ connect: '重复登录' })
                                break
                            case 'kicked':
                                this.setState({ connect: '被踢出' })
                                break
                            default:
                                break
                        }
                    }
                },
                onerror: () => {},
                onmsg: (msg) => {
                    let mg = this.remote.processNIM(JSON.stringify(msg))
                    if (mg != null) {
                        Notification.open({
                            title: `${ mg.channel === 1 ? 'A' : 'B'} 通道信息`,
                            content: mg.msg ,
                            duration: 2000,
                            type: 'notice'
                        });
                    } else {
                        if (this.version === 'V2') {
                            if (this.remote.isConnect()) {
                                if (this.remote.shouldConfig()) {
                                    this.setAllTimer()
                                    let limit = this.remote.getLimit()
                                    this.setState({ connect: '' ,limitA: limit.first, limitB: limit.second})
                                } else {
                                    this.setState({ startA: this.remote.startA + '', startB: this.remote.startB + '' })
                                }
                            }
                        } else if (this.version === 'V1') {
                            if (this.remote.canOnline()) {
                                this.setAllTimer()
                                this.setState({connect: ''})
                            }
                        }
                    }
                }
            })
        } else {
            this.setState({ connect: '无法连接' })
        }
    }
    setAllTimer = () => {
        this.timer = setInterval(()=>{
            if (this.version === 'V1') {
                let heartbeat = this.remote.heartbeat()
                this.nim.sendText({
                    scene: 'p2p',
                    to: heartbeat.toID,
                    text: heartbeat.msg
                })
            }
            if (this.state.strengthA > 0) {
                let wave = this.waveA.waveTick()
                if (wave) {
                    let plot = Array.from(this.waveA.getWavePlot())
                    let plotData = this.state.dataA.concat(plot)
                    if (plotData.length > 100) {
                        plotData = plotData.slice(plotData.length - 100)
                    }
                    this.setState({
                        dataA: plotData
                    })
                    let waveStr = KDataUtils.byteArrayToString(Array.from(wave))
                    this.remote.prepareSend(1, this.state.strengthA, waveStr)
                }
            }
            if (this.state.strengthB > 0) {
                let wave = this.waveB.waveTick()
                if (wave) {
                    let plot = Array.from(this.waveB.getWavePlot())
                    let plotData = this.state.dataB.concat(plot)
                    if (plotData.length > 100) {
                        plotData = plotData.slice(plotData.length - 100)
                    }
                    this.setState({
                        dataB: plotData
                    })
                    let waveStr = KDataUtils.byteArrayToString(Array.from(wave))
                    this.remote.prepareSend(2, this.state.strengthB, waveStr)
                }
            }
            let send = this.remote.getSend()
            if (send) {
                this.nim.sendText({
                    scene: 'p2p',
                    to: send.toID,
                    text: send.msg
                })
            }
        }, 200)
    }
    componentWillUnmount() {
        if (this.timer) clearInterval(this.timer)
        let dconn = this.remote.disconnect()
        this.nim.sendText({
            scene: 'p2p',
            to: dconn.toID,
            text: dconn.msg
        })
        this.nim.disconnect()
    }
    onClickBack = () => {
        let { onExit } = this.props
        onExit.push("/")
    }
    onChangeChannelAutoA = (v) => { 
        this.setState({ channelAAuto: v, autoChangeA: 200 }) 
    }
    onChangeChannelAutoB = (v) => { 
        this.setState({ channelBAuto: v, autoChangeB: 200 }) 
    }
    onChannelAIncrease = () => {
        let strength = this.state.limitA
        if (this.state.strengthA + this.state.strengthStepA <= this.state.limitA){
            strength = this.state.strengthA + this.state.strengthStepA
        }
        this.setState({ strengthA: strength })
    }
    onChannelADecrease = () => {
        let strength = 0
        if (this.state.strengthA - this.state.strengthStepA >= 0){
            strength = this.state.strengthA - this.state.strengthStepA
        }
        this.setState({ strengthA: strength })
    }
    onChannelAStop = () => {
        this.setState({
            strengthA: 0,
            strengthStepA: 1
        })
    }
    onChannelBIncrease = () => {
        let strength = this.state.limitB
        if (this.state.strengthB + this.state.strengthStepB <= this.state.limitB){
            strength = this.state.strengthB + this.state.strengthStepB
        }
        this.setState({ strengthB: strength })
    }
    onChannelBDecrease = () => {
        let strength = 0
        if (this.state.strengthB - this.state.strengthStepB >= 0){
            strength = this.state.strengthB - this.state.strengthStepB
        }
        this.setState({ strengthB: strength })
    }
    onChannelBStop = () => {
        this.setState({
            strengthB: 0,
            strengthStepB: 1
        })
    }
    handleWaveChangeA = (value) => {
        if (typeof value !== 'string') value = this.state.waveA
        let wave = null
        if (value === 'Custom') {
            if (this.state.customWave === '') return
            wave = WaveCenter.Companion.fromOpenDGWaveGen(this.state.customWave)
        } else {
            wave = WaveCenter.Companion.getBasicWave(value)
        }
        this.setState({ waveA: value })
        this.waveA.selectWave(wave)
    }
    handleWaveChangeB = (value) => {
        if (typeof value !== 'string') value = this.state.waveB
        let wave = null
        if (value === 'Custom') {
            if (this.state.customWave === '') return
            wave = WaveCenter.Companion.fromOpenDGWaveGen(this.state.customWave)
        } else {
            wave = WaveCenter.Companion.getBasicWave(value)
        }
        this.setState({ waveB: value })
        this.waveB.selectWave(wave)
    }
    render() {
        return (
            <Shell className="odgl-full-height" type="dark" device="desktop">
                <Shell.Branding>
                    <img src={Logo} style={{ width: '24px' }} alt=""></img>
                    <Button type="normal" text style={{marginLeft: 10}} onClick={this.onClickBack}>OpenDGLab Connect</Button>
                </Shell.Branding>
                <Shell.Action>
                    <p>协议版本： {this.state.version}</p>
                </Shell.Action>
                <Shell.Content>
                    {
                        this.state.connect ? <Typography.H2>{this.state.connect}</Typography.H2> :(
                            <>
                    <div role="grid">
                    <Row gutter={8} justify="center">
                        <Col xs={12} m={12} s={8}>
                            <Card free>
                                <Card.Header title="A 通道" subTitle={`初始值： ${this.state.startA}`}/>
                                <Card.Content>
                                    <p>强度 <span>{this.state.strengthA}</span></p>
                                    <Divider />
                                    <p>增强减弱步进 {this.state.strengthStepA} <Range min={1} max={20} defaultValue={1} value={this.state.strengthStepA} onChange={(v)=>{ this.setState({ strengthStepA: v }) }} hasTip={false} /></p>
                                </Card.Content>
                                <Card.Actions>
                                    <center>
                                    <Button.Group>
                                        <Button type="normal" key="strengthAMinus" warning onClick={this.onChannelADecrease}><Icon type="minus" /></Button>
                                        <Button type="normal" key="strengthAStop" warning onClick={this.onChannelAStop}><Icon type="error" /></Button>
                                        <Button type="normal" key="strengthAAdd" warning onClick={this.onChannelAIncrease}><Icon type="add" /></Button>
                                    </Button.Group>
                                    </center>
                                </Card.Actions>
                            </Card>
                        </Col>
                        <Col xs={12} m={12} s={8}>
                            <Card free>
                                <Card.Header title="B 通道" subTitle={`初始值： ${this.state.startB}`}/>
                                <Card.Content>
                                    <p>强度 <span>{this.state.strengthB}</span></p>
                                    <Divider />
                                    <p>增强减弱步进 {this.state.strengthStepB} <Range min={1} max={20} defaultValue={1} value={this.state.strengthStepB} onChange={(v)=>{ this.setState({ strengthStepB: v }) }} hasTip={false} /></p>
                                </Card.Content>
                                <Card.Actions>
                                    <center>
                                    <Button.Group>
                                        <Button type="normal" key="strengthBMinus" warning onClick={this.onChannelBDecrease}><Icon type="minus" /></Button>
                                        <Button type="normal" key="strengthBStop" warning onClick={this.onChannelBStop}><Icon type="error" /></Button>
                                        <Button type="normal" key="strengthBAdd" warning onClick={this.onChannelBIncrease}><Icon type="add" /></Button>
                                    </Button.Group>
                                    </center>
                                </Card.Actions>
                            </Card>
                        </Col>
                    </Row>
                    </div>
                    <Divider />
                    <div role="grid">
                    <Row gutter={8} justify="center" wrap>
                        <Col span={12}>
                            <Card free style={{ margin: '2px' }}>
                                <Card.Header title="A 通道波形"/>
                                <Card.Content>
                                    <div>
                                    <Bar
                                        data={this.dataA}
                                        height={250}
                                        options={this.options}
                                    />
                                    </div>
                                    <Divider />
                                    <Switch style={{width: '70px'}} checkedChildren="自动" unCheckedChildren="手动" value={this.state.channelAAuto} onChange={this.onChangeChannelAutoA} />
                                    <p></p>
                                    <Select onChange={this.handleWaveChangeA} style={{display: 'block'}} defaultValue={WaveCenter.Companion.getBasicWaveList()[0]} value={this.state.waveA} dataSource={this.waveSource} disabled={this.state.channelAAuto} />
                                </Card.Content>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card free style={{ margin: '2px' }}>
                                <Card.Header title="B 通道波形"/>
                                <Card.Content>
                                    <div>
                                    <Bar
                                        data={this.dataB}
                                        height={250}
                                        options={this.options}
                                    />
                                    </div>
                                    <Divider />
                                    <Switch style={{width: '70px'}} checkedChildren="自动" unCheckedChildren="手动" value={this.state.channelBAuto} onChange={this.onChangeChannelAutoB} />
                                    <p></p>
                                    <Select onChange={this.handleWaveChangeB} style={{display: 'block'}} defaultValue={WaveCenter.Companion.getBasicWaveList()[0]} value={this.state.waveB} dataSource={this.waveSource} disabled={this.state.channelBAuto} />
                                </Card.Content>
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col span={24}>
                            <Card free style={{ margin: '2px' }}>
                                <Card.Header title="自定义波形"/>
                                <Card.Content>
                                <Input.Group style={{ width: '100%' }} addonAfter={<Button warning type={this.state.customWaveSaved ? "normal" : "primary"} onClick={this.onClickSaveCustomWave}>确定设置</Button>}>
                                    <Input style={{ width: '100%' }} placeholder="自定义波形" value={this.state.customWaveUnsaved} onChange={ (v) => { this.setState({ customWaveSaved: false, customWaveUnsaved: v }) } }/>
                                </Input.Group>
                                </Card.Content>
                            </Card>
                        </Col>
                    </Row>
                    </div>
                            </>
                        )
                    }
                </Shell.Content>
            </Shell>
        )
    }
}

export default RemoteDevice