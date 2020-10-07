import React from 'react';
import { WaveCenter, KDataUtils } from '../services/DGLab'
import { DGRemote, DGRemoteV1, DGRemoteV2 } from '../services/OpenDGLab-Remote'
import QrCodeWithLogo from 'qrcode-with-logos'
import { Overlay, Card, Button, Range, Divider } from '@alifd/next';
import axios from 'axios'
import NIM from '../services/NIM_Web_NIM_v8.0.0'
import { fireChange } from '../Utils';

class RemoteServer extends React.Component {
    state = {
        limitA: 0,
        limitB: 0,
        runRemote: false,
        pending: false,
        qrImage: '',
        showQr: false,
        error: '',
        version: '',
        strengthA: 0,
        strengthB: 0
    }
    imageQrV1 = React.createRef()
    imageQrV2 = React.createRef()
    canvasQr = React.createRef()
    nim = null
    componentWillUnmount() {
        let { postRemoteData } = this.props
        postRemoteData([{channel: 1, strength: 0, bytes: KDataUtils.byteArrayToString(WaveCenter.Companion.stop()) }, {channel: 2, strength: 0, bytes: KDataUtils.byteArrayToString(WaveCenter.Companion.stop()) }])
        window.removeEventListener('strengthchanged', this.handleStrengthAB)
        if (this.heartbeatTimer) {
            clearInterval(this.heartbeatTimer)
        }
        //Disconnect NIM
        if (this.nim) {
            this.nim.disconnect()
        }
        if (this.remoteV1) {
            let logout = this.remoteV1.logoutControl()
            axios({
                method: 'post',
                url: 'https://corsanywhere.herokuapp.com/' + logout.url + '',
                headers: Object.assign({
                    'Content-Type': logout.contentType,
                    'X-Requested-With': ''
                }, Object.assign(...logout.headers.map((v)=>{ 
                  let hed = {}
                  hed[v.key] = v.value
                  return hed
                }))),
                data: logout.body
            }).then((result) => { this.remoteV1.process(JSON.stringify(result.data), logout.requestCode) })
        }
    }
    heartbeatTimer = null
    componentDidMount() {
        window.addEventListener('strengthchanged', this.handleStrengthAB)
        this.heartbeatTimer = setInterval(() => {
            if (this.state.version === 'V1') {
                let hb = this.remoteV1.getHeartbeatPassed() / 1000
                if(hb > 6 && hb < 12) {
                    this.remoteV1.forceDropCurrent()
                    this.setState({ version: '', showQr: true })
                }
            }
        }, 2000)
    }
    handleStrengthAB = () => {
        this.setState({
            strengthA: window.dglab.eStimStatus.abPower.getAPower(),
            strengthB: window.dglab.eStimStatus.abPower.getBPower()
        })
    }
    shutdownRemote = () => {
        let { setClose } = this.props
        setClose()
    }
    loadImage = (imagePath) => {
        return new Promise((resolve, reject) => {
            let image = new Image();
            image.addEventListener("load", () => {
                resolve(image);
            });
            image.addEventListener("error", (err) => {
                reject(err);
            });
            image.src = imagePath;
        })
    }
    startRemote = () => {
        let { getStrengthA, getStrengthB } = this.props
        this.setState({ pending: true })
        this.remoteV1 = new DGRemoteV1.Controlled(window.dgremote.auth, getStrengthA(), getStrengthB(), this.state.limitA, this.state.limitB)
        this.remoteV2 = new DGRemoteV2.Controlled(window.dgremote.auth, getStrengthA(), getStrengthB(), this.state.limitA, this.state.limitB)
        let remoteV1Req = this.remoteV1.requestControl()
        axios({
            method: 'post',
            url: 'https://corsanywhere.herokuapp.com/' + remoteV1Req.url + '',
            headers: Object.assign({
                'Content-Type': remoteV1Req.contentType,
                'X-Requested-With': ''
            }, Object.assign(...remoteV1Req.headers.map((v)=>{ 
              let hed = {}
              hed[v.key] = v.value
              return hed
            }))),
            data: remoteV1Req.body
          }).then((result) => {
            this.remoteV1.process(JSON.stringify(result.data), remoteV1Req.requestCode)
            let qr = {
                "v1": this.remoteV1.getQrUrl(),
                "v2": this.remoteV2.getQrUrl()
            }
            return qr
          }).then((result) => {
            new QrCodeWithLogo({
                content: result["v1"],
                width: 500,
                image: this.imageQrV1.current,
                logo: {
                  src: "/OpenDGLab-Connect/OpenDGLab-QrLogo.png"
                }
            }).toImage().then(() => {
                new QrCodeWithLogo({
                    content: result["v2"],
                    width: 500,
                    image: this.imageQrV2.current,
                    logo: {
                      src: "/OpenDGLab-Connect/OpenDGLab-QrLogo.png"
                    }
                }).toImage().then(() => {
                    return this.loadImage('/OpenDGLab-Connect/OpenDGLab-Remote-QrPage-AllinOne.png')
                }).then((image) => {
                    let ctx = this.canvasQr.current.getContext('2d')
                    ctx.drawImage(image, 0, 0)
                    ctx.drawImage(this.imageQrV1.current, 150, 310)
                    ctx.drawImage(this.imageQrV2.current, 950, 310)
                    return this.canvasQr.current
                }).then((canvas) => {
                    if (this.state.qrImage !== '') {
                        URL.revokeObjectURL(this.state.qrImage)
                    }
                    canvas.toBlob((blob) => {
                        let nimConfig = this.remoteV1.getNIMConnect()
                        this.nim = NIM.getInstance({
                            appKey: nimConfig.appKey,
                            account: nimConfig.account,
                            token: nimConfig.token,
                            db:false,
                            onconnect: () => { 
                                this.setState({ qrImage: URL.createObjectURL(blob), runRemote: true, pending: false, showQr: true})
                            },
                            onwillreconnect: () => { console.log('即将重连') },
                            ondisconnect: (error) => {
                                if (error) {
                                    switch (error.code) {
                                        case 302:
                                            this.setState({ error: '账号或密码错误' })
                                            break
                                        case 417:
                                            this.setState({ error: '重复登录' })
                                            break
                                        case 'kicked':
                                            this.setState({ error: '被踢出' })
                                            break
                                        default:
                                            break
                                    }
                                }
                            },
                            onerror: (error) => { console.error(error) },
                            onmsg: (msg) => {
                                let { postRemoteData } = this.props
                                let strMsg = JSON.stringify(msg)
                                let version = this.state.version + ''
                                if (version === '') {
                                    console.log('Version Identify')
                                    version = DGRemote.Companion.identifyProtocolVersion(strMsg)
                                    let data = null
                                    if (version === 'V1') {
                                        this.remoteV1.processNIM(strMsg)
                                        data = this.remoteV1.isOnline()
                                    } else if (version === 'V2') {
                                        this.remoteV2.processNIM(strMsg)
                                        data = this.removeV2.canConnect()
                                        let ack = this.removeV2.needAck()
                                        if (ack) this.nim.sendText({
                                            scene: 'p2p',
                                            to: ack.toID,
                                            text: ack.msg
                                        })
                                    }
                                    if (data){
                                        this.setState({ version: version, showQr: false })
                                        postRemoteData([{channel: 1, strength: 0, bytes: KDataUtils.byteArrayToString(WaveCenter.Companion.stop()) }, {channel: 2, strength: 0, bytes: KDataUtils.byteArrayToString(WaveCenter.Companion.stop()) }])
                                    } else {
                                        this.setState({ version: '', showQr: true })
                                    }
                                } else {
                                    let data = null
                                    if (version === 'V1') {
                                        data = this.remoteV1.processNIM(strMsg)
                                    } else if (version === 'V2') {
                                        data = this.remoteV2.processNIM(strMsg)
                                        let ack = this.removeV2.needAck()
                                        if (ack) this.nim.sendText({
                                            scene: 'p2p',
                                            to: ack.toID,
                                            text: ack.msg
                                        })
                                    }
                                    if (data !== null) postRemoteData(data)
                                }
                            }
                        })
                    })
                })
              })
          })
    }
    remoteV1 = null
    remoteV2 = null
    remoteNIM = null
    feelChannel = (channel, index) => {
        let feedling = null
        if (this.state.version === 'V1') {
            feedling = this.remoteV1.sendFeeling(channel, index)
        } else if (this.state.version === 'V2') {
            feedling = this.remoteV2.sendFeeling(channel, index)
        }
        if (feedling !== null) {
            this.nim.sendText({
                scene: 'p2p',
                to: feedling.toID,
                text: feedling.msg
            })
        }
    }
    render() {
        let remote = null
        if (this.state.error !== '') {
            remote = (
                <center><p>发生错误： {this.state.error}</p></center>
            )
        } else {
            if (this.state.pending) {
                remote = (
                    <center><p>正在配置远程连接，请稍后...</p></center>
                )
            } else {
                if (this.state.runRemote) {
                    if (this.state.showQr) {
                        remote = (
                            <>
                            <p>正在等待连接...</p>
                            <center><img alt="" src={this.state.qrImage} style={{ border: '1px solid', width: '50%', height: '50%' }} onLoad={ () => { fireChange('resize') } }></img></center>
                            </>
                        )
                    } else {
                        remote = (
                            <>
                            <p>协议版本：{this.state.version}</p>
                            <Divider/>
                            <p>A 通道状态：{ this.state.strengthA === 0 ? '未发送' : this.state.strengthA }</p>
                            <p>B 通道状态：{ this.state.strengthB === 0 ? '未发送' : this.state.strengthB }</p>
                            <Divider/>
                            <p>
                                <p>A 通道</p>
                                <p>基础值：{ this.state.version === 'V1' ? this.remoteV1.strengthA : this.remoteV2.strengthA }</p>
                                <Button style={{margin: '4px'}} type="primary" onClick={ () => { this.feelChannel(1, 1) } }>再强点</Button>
                                <Button style={{margin: '4px'}} type="primary" onClick={ () => { this.feelChannel(1, 2) } }>轻一点</Button>
                                <Button style={{margin: '4px'}} type="primary" onClick={ () => { this.feelChannel(1, 3) } }>好舒服</Button>
                                <Button style={{margin: '4px'}} type="primary" onClick={ () => { this.feelChannel(1, 4) } }>换一个</Button>
                            </p>
                            <Divider/>
                            <p>
                                <p>B 通道</p>
                                <p>基础值：{ this.state.version === 'V1' ? this.remoteV1.strengthB : this.remoteV2.strengthB }</p>
                                <Button style={{margin: '4px'}} type="primary" onClick={ () => { this.feelChannel(2, 1) } }>再强点</Button>
                                <Button style={{margin: '4px'}} type="primary" onClick={ () => { this.feelChannel(2, 2) } }>轻一点</Button>
                                <Button style={{margin: '4px'}} type="primary" onClick={ () => { this.feelChannel(2, 3) } }>好舒服</Button>
                                <Button style={{margin: '4px'}} type="primary" onClick={ () => { this.feelChannel(2, 4) } }>换一个</Button>
                            </p>
                            </>
                        )
                    }
                } else {
                    remote = (
                        <>
                        <p>设置强度调节限制</p>
                        <p>A 通道: {this.state.limitA}</p>
                        <Range defaultValue={0} style={{ width: '100%' }} min={0} max={247} hasTip={false} value={this.state.limitA} onChange={ (v) => { this.setState({ limitA: v }) } } />
                        <p>B 通道: {this.state.limitB}</p>
                        <Range defaultValue={0} style={{ width: '100%' }} min={0} max={247} hasTip={false} value={this.state.limitB} onChange={ (v) => { this.setState({ limitB: v }) } } />
                        <p><Button type="primary" onClick={this.startRemote}>启动远程</Button></p>
                        </>
                    )
                }
            }
        }
        return(
            <Overlay
                visible={true}
                align="cc cc"
                hasMask
                disableScroll
                canCloseByEsc={false}
                canCloseByOutSideClick={false}
                canCloseByMask={false}
                >
                <Card free style={{maxWidth: '90%', width: '90%'}}>
                    <Card.Header title="远程模式" extra={<Button style={{ margin: '8px' }} type="normal" warning onClick={this.shutdownRemote}>退出远程</Button>} />
                    <Card.Content>
                        {remote}
                    </Card.Content>
                    <img alt="" style={{display: 'none'}} ref={this.imageQrV1}></img>
                    <img alt="" style={{display: 'none'}} ref={this.imageQrV2}></img>
                    <canvas style={{display: 'none'}} ref={this.canvasQr} width={1600} height={1280}></canvas>
                </Card>
            </Overlay>
        )
    }
}

export default RemoteServer;