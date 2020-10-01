import React from 'react';
import Connect from './Connect'
import { Bar } from 'react-chartjs-2';
import { Button, Shell, Card, Grid, Icon, Divider, Range, Switch, Select } from '@alifd/next';
import Logo from '../logo.svg'
import { withRouter } from "react-router";
import { OpenDGLab, WaveCenter } from '../services/DGLab'

const { Row, Col } = Grid;

class Local extends React.Component {
    state = {
        showConnect: false,
        isConnect: false,
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
        waveLagA: 0,
        waveLagB: 0
    }
    lastDataA = Date.now()
    lastDataB = Date.now()
    labels = new Array(100).fill('')
    timerA = null
    timerB = null
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
    waveSource = WaveCenter.Companion.getBasicWaveList().map((v) => { return { label: v, value: v } })
    onClickConnect = () => {
        this.setState({showConnect: true})
    }
    onClickBack = () => {
        this.props.history.push("/")
    }
    onChangeChannelAutoA = (v) => { 
        this.setState({channelAAuto: v}) 
    }
    onChangeChannelAutoB = (v) => { 
        this.setState({channelBAuto: v}) 
    }
    onChannelAIncrease = () => {
        let strength = 274
        if (this.state.strengthA + this.state.strengthStepA <= 274){
            strength = this.state.strengthA + this.state.strengthStepA
        }
        if (window.dgble) {
            let power = window.dglab.eStimStatus.abPower.setABPower(strength ,window.dglab.eStimStatus.abPower.getBPower())
            window.dgble.eStimStatus.abpower.writeValueWithoutResponse(Uint8Array.from(power.data))
        }
    }
    onChannelADecrease = () => {
        let strength = 0
        if (this.state.strengthA - this.state.strengthStepA >= 0){
            strength = this.state.strengthA - this.state.strengthStepA
        }
        if (window.dgble) {
            let power = window.dglab.eStimStatus.abPower.setABPower(strength ,window.dglab.eStimStatus.abPower.getBPower())
            window.dgble.eStimStatus.abpower.writeValueWithoutResponse(Uint8Array.from(power.data))
        }
    }
    onChannelAStop = () => {
        if (window.dgble) {
            let power = window.dglab.eStimStatus.abPower.setABPower(0 ,window.dglab.eStimStatus.abPower.getBPower())
            window.dgble.eStimStatus.abpower.writeValueWithoutResponse(Uint8Array.from(power.data))
        }
        this.setState({
            strengthStepA: 1
        })
    }
    onChannelBIncrease = () => {
        let strength = 274
        if (this.state.strengthB + this.state.strengthStepB <= 274){
            strength = this.state.strengthB + this.state.strengthStepB
        }
        if (window.dgble) {
            let power = window.dglab.eStimStatus.abPower.setABPower(window.dglab.eStimStatus.abPower.getAPower(), strength)
            window.dgble.eStimStatus.abpower.writeValueWithoutResponse(Uint8Array.from(power.data))
        }
    }
    onChannelBDecrease = () => {
        let strength = 0
        if (this.state.strengthB - this.state.strengthStepB >= 0){
            strength = this.state.strengthB - this.state.strengthStepB
        }
        if (window.dgble) {
            let power = window.dglab.eStimStatus.abPower.setABPower(window.dglab.eStimStatus.abPower.getAPower(), strength)
            window.dgble.eStimStatus.abpower.writeValueWithoutResponse(Uint8Array.from(power.data))
        }
    }
    onChannelBStop = () => {
        if (window.dgble) {
            let power = window.dglab.eStimStatus.abPower.setABPower(window.dglab.eStimStatus.abPower.getAPower(), 0)
            window.dgble.eStimStatus.abpower.writeValueWithoutResponse(Uint8Array.from(power.data))
        }
        this.setState({
            strengthStepB: 1
        })
    }
    handleStrengthAB = () => {
        this.setState({
            strengthA: window.dglab.eStimStatus.abPower.getAPower(),
            strengthB: window.dglab.eStimStatus.abPower.getBPower()
        })
    }
    handleWaveChangeA = (value) => {
        if (typeof value !== 'string') value = this.state.waveA
        let wave = WaveCenter.Companion.getBasicWave(value)
        this.setState({ waveA: value })
        window.dglab.eStimStatus.wave.getWaveCenterA().selectWave(wave)
    }
    handleWaveChangeB = (value) => {
        if (typeof value !== 'string') value = this.state.waveB
        let wave = WaveCenter.Companion.getBasicWave(value)
        this.setState({ waveB: value })
        window.dglab.eStimStatus.wave.getWaveCenterB().selectWave(wave)
    }
    componentDidMount() {
        window.dglab = new OpenDGLab()
        window.dglab.electric = 0
        window.dglab.handler = {}
        window.addEventListener('strengthchanged', this.handleStrengthAB)
        window.addEventListener('waveAchanged', this.handleWaveChangeA)
        window.addEventListener('waveBchanged', this.handleWaveChangeB)
        this.timerA = setInterval(()=> {
            if (window.dgble && this.state.isConnect) {
                let lag = Date.now() - this.lastDataA
                let wlag = 0
                if (lag > 100) {
                    wlag = Math.ceil((lag - 100)/100.0)
                }
                this.setState({ waveLagA: wlag })
                this.lastDataA = Date.now()
                let waveA = window.dglab.eStimStatus.wave.getWaveCenterA().waveTick()
                let plot = Array.from(window.dglab.eStimStatus.wave.getWaveCenterA().getWavePlot())
                let plotData = this.state.dataA.concat(plot)
                if (plotData.length > 100) {
                    plotData = plotData.slice(plotData.length - 100)
                }
                this.setState({
                    dataA: plotData
                })
                if (waveA !== null)
                  window.dgble.eStimStatus.waveB.writeValueWithoutResponse(Uint8Array.from(waveA))
            }
        }, 100)
        this.timerB = setInterval(() => {
            if (window.dgble && this.state.isConnect) {
                let lag = Date.now() - this.lastDataB
                let wlag = 0
                if (lag > 100) {
                    wlag = Math.ceil((lag - 100)/100.0)
                }
                this.setState({ waveLagB: wlag })
                this.lastDataB = Date.now()
                let waveB = window.dglab.eStimStatus.wave.getWaveCenterB().waveTick()
                let plot = Array.from(window.dglab.eStimStatus.wave.getWaveCenterB().getWavePlot())
                let plotData = this.state.dataB.concat(plot)
                if (plotData.length > 100) {
                    plotData = plotData.slice(plotData.length - 100)
                }
                this.setState({
                    dataB: plotData
                })
                if (waveB !== null)
                  window.dgble.eStimStatus.waveA.writeValueWithoutResponse(Uint8Array.from(waveB))
            }
        }, 100)
    }
    componentWillUnmount() {
        if (window.dgble) {
            window.removeEventListener('strengthchanged', this.handleStrengthAB)
            window.removeEventListener('waveAchanged', this.handleWaveChangeA)
            window.removeEventListener('waveBchanged', this.handleWaveChangeB)
            if (this.timerA) {
                clearInterval(this.timerA)
            }
            if (this.timerB) {
                clearInterval(this.timerB)
            }
            window.dgble.eStimStatus.abpower.stopNotifications().then(_ => {
                window.dgble.eStimStatus.abpower.removeEventListener('characteristicvaluechanged', window.dglab.handler.abpower)
            }).catch(error => {})
            window.dgble.deviceStatus.electric.stopNotifications().then(_ => {
                window.dgble.deviceStatus.electric.removeEventListener('characteristicvaluechanged', window.dglab.handler.electric)
            }).catch(error => {})
            window.dgble.device.gatt.disconnect()
            delete window.dgble
            delete window.dglab
        }
    }
    render() {
        let connect = null
        if (this.state.showConnect) {
            connect = <Connect setClose={()=>{this.setState({showConnect: false})}} connCallback={ (isConn) => { this.setState({isConnect: isConn}) } } />
        }
        return (
            <>
            <Shell className="odgl-full-height" type="dark" device="desktop">
                <Shell.Branding>
                    <img src={Logo} style={{ width: '24px' }} alt=""></img>
                    <Button type="normal" text style={{marginLeft: 10}} onClick={this.onClickBack}>OpenDGLab Connect</Button>
                </Shell.Branding>
                <Shell.Action>
                    <Button type="normal" warning onClick={this.onClickConnect}>{ this.state.isConnect ? '已连接' : '连接到设备' }</Button>
                </Shell.Action>
                <Shell.Content>
                    <div role="grid">
                    <Row gutter={8} justify="center">
                        <Col xs={12} m={12} s={8}>
                            <Card free>
                                <Card.Header title="A 通道" subTitle={`发送延迟 ${this.state.waveLagA} 个数据包`}/>
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
                                <Card.Header title="B 通道" subTitle={`发送延迟 ${this.state.waveLagB} 个数据包`}/>
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
                                    <Switch disabled style={{width: '70px'}} checkedChildren="自动" unCheckedChildren="手动" value={this.state.channelAAuto} onChange={this.onChangeChannelAutoA} />
                                    <p></p>
                                    <Select onChange={this.handleWaveChangeA} style={{display: 'block'}} defaultValue={WaveCenter.Companion.getBasicWaveList()[0]} dataSource={this.waveSource} disabled={this.state.channelAAuto} />
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
                                    <Switch disabled style={{width: '70px'}} checkedChildren="自动" unCheckedChildren="手动" value={this.state.channelBAuto} onChange={this.onChangeChannelAutoB} />
                                    <p></p>
                                    <Select onChange={this.handleWaveChangeB} style={{display: 'block'}} defaultValue={WaveCenter.Companion.getBasicWaveList()[0]} dataSource={this.waveSource} disabled={this.state.channelBAuto} />
                                </Card.Content>
                            </Card>
                        </Col>
                    </Row>
                    </div>
                </Shell.Content>
            </Shell>
            {connect}
            </>
        )
    }
}
const LocalWithRouter = withRouter(Local);
export default LocalWithRouter;