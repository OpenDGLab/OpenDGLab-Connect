import React from 'react';
import { Overlay, Card, Button } from '@alifd/next';
import { OpenDGLab } from '../services/DGLab'
import { fireChange } from '../Utils'

class Connect extends React.Component {
    state = {
        availability: false,
        connected: false,
        wait: false,
        message: '',
        power: 0
    }
    componentDidMount = () => {
        if ('bluetooth' in navigator) {
            this.setState({ availability: true })
            if (window.dgble) {
                this.setState({ connected: true, power: window.dglab.electric })
            }
        }
    }
    onClickStartRemote = () => {
        let { setRemoteMode } = this.props
        if (setRemoteMode(true)) {

        } else {

        }
    }
    onConnectClick = () => {
        navigator.bluetooth.requestDevice({filters:[{name: OpenDGLab.Device.Companion.getName()}], optionalServices: OpenDGLab.Device.Companion.services()}).then((device) => {
            if (device.gatt) {
                window.dgble = {}
                window.dgble.device = device
                window.dgble.device.gatt.connect().then(async (server) => {
                    window.dgble.server = server
                    this.setState({ message: '', connected: true, wait: true })
                    window.dgble.deviceStatusService = await server.getPrimaryService(OpenDGLab.DeviceStatus.Companion.getUUID())
                    window.dgble.eStimStatusService = await server.getPrimaryService(OpenDGLab.EStimStatus.Companion.getUUID())
                    window.dgble.deviceStatus = {}
                    window.dgble.deviceStatus.electric = await window.dgble.deviceStatusService.getCharacteristic(OpenDGLab.DeviceStatus.Electric.Companion.getUUID())
                    window.dgble.eStimStatus = {}
                    window.dgble.eStimStatus.abpower = await window.dgble.eStimStatusService.getCharacteristic(OpenDGLab.EStimStatus.ABPower.Companion.getUUID())
                    window.dgble.eStimStatus.waveA = await window.dgble.eStimStatusService.getCharacteristic(OpenDGLab.EStimStatus.Wave.Companion.getUUIDA())
                    window.dgble.eStimStatus.waveB = await window.dgble.eStimStatusService.getCharacteristic(OpenDGLab.EStimStatus.Wave.Companion.getUUIDB())
                    return window.dgble.deviceStatus.electric.readValue()
                }).then(async (value) => {
                    window.dglab.electric = window.dglab.deviceStatus.electric.read(Array.from(new Uint8Array(value.buffer)))
                    this.setState({ power: window.dglab.electric })
                    window.dglab.handler.abpower = (event) => {
                        let data = Array.from(new Uint8Array(event.target.value.buffer))
                        window.dglab.eStimStatus.abPower.onChange(data)
                        fireChange('strengthchanged')
                    }
                    window.dglab.handler.electric = (event) => {
                        let data = Array.from(new Uint8Array(event.target.value.buffer))
                        let electric = window.dglab.deviceStatus.electric.onChange(data)
                        window.dglab.electric = electric
                    }
                    window.dgble.eStimStatus.abpower.startNotifications().then(_ => {
                        window.dgble.eStimStatus.abpower.addEventListener('characteristicvaluechanged', window.dglab.handler.abpower)
                    })
                    window.dgble.deviceStatus.electric.startNotifications().then(_ => {
                        window.dgble.deviceStatus.electric.addEventListener('characteristicvaluechanged', window.dglab.handler.electric)
                    })
                    fireChange('waveAchanged')
                    fireChange('waveBchanged')
                    let power = window.dglab.eStimStatus.abPower.setABPower(0, 0)
                    window.dgble.eStimStatus.abpower.writeValueWithoutResponse(Uint8Array.from(power.data))
                    this.props.connCallback(true)
                    this.setState({ wait: false })
                }).catch((error) => {
                    console.error(error)
                    this.setState({ message: '连接错误', connected: false, wait: false })
                    this.props.connCallback(false)
                })
            }
        }).catch((error) => {
            if (error.code !== 8) {
                this.setState({ message: '发生错误', connected: false, wait: false })
                this.props.connCallback(false)
            }
        })
    }
    render() {
        let { setClose } = this.props
        let connect = null
        if (this.state.connected) {
            if (this.state.wait) {
                connect = (
                    <center>
                        <p>请稍后...</p>
                    </center>
                )
            } else {
                connect = (
                    <center>
                        <p>电量： {this.state.power}%</p>
                        <Button type="normal" style={{ margin: '4px' }} warning onClick={this.onClickStartRemote}>启动远程模式</Button>
                    </center>
                )
            }
        } else {
            connect = (
                <center>
                {
                    this.state.message === '' ? (this.state.availability ? <Button type="primary" onClick={this.onConnectClick}>连接设备</Button> : <p>您的浏览器或设备不支持蓝牙</p>) : <><p>{this.state.message}</p><Button type="primary" onClick={this.onConnectClick}>连接设备</Button></>
                }
                </center>
            )
        }
        return (
            <Overlay
                visible={true}
                align="cc cc"
                hasMask
                disableScroll
                onRequestClose={setClose}>
                <Card free style={{maxWidth: 600, width: 300}}>
                    <Card.Header title="连接设备"/>
                    <Card.Content>
                        {connect}
                    </Card.Content>
                </Card>
            </Overlay>
        )
    }
}

export default Connect;