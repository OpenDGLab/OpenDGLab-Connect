import React from 'react'
import { Overlay, Card, Button, Notification } from '@alifd/next';
import QrReader from 'react-qr-reader'
import { fireChange } from '../Utils'

class QrScanner extends React.Component {
    state = {
        support: true,
        selectMode: false
    }
    qrRef = React.createRef()
    componentDidMount() {
        fireChange('resize')
    }
    onScan = (content) => {
        let { connectToRemote } = this.props
        if (content) {
            if (content.startsWith('http://dungeon-lab.cn/appdownload.html#')) {
                connectToRemote(content)
            } else {
                Notification.open({
                    title: '注意',
                    content: '无效的二维码',
                    duration: 2000,
                    type: 'notice'
                });
            }
        }
    }
    onError = (error) => {
        this.setState({ support: false })
        fireChange('resize')
    }
    openImageDialog = () => {
        this.setState({ selectMode: true }, () => {
            this.qrRef.current.openImageDialog()
        })
    }
    render() {
        let { setClose } = this.props
        return (
            <Overlay
                visible={true}
                align="cc cc"
                hasMask
                disableScroll
                canCloseByOutSideClick={false}
                onRequestClose={setClose}>
                <Card free style={{maxWidth: 600, width: 300}}>
                    <Card.Header title="二维码扫描" extra={<Button type="normal" warning onClick={setClose}>返回</Button>}/>
                    <Card.Content>
                        <QrReader
                            ref={this.qrRef}
                            delay={300}
                            onError={this.onError}
                            onScan={this.onScan}
                            style={{ width: '100%' }}
                            legacyMode={this.state.selectMode || !this.state.support}
                        />
                        <Button style={{ margin: '2px' }} type="primary" onClick={this.openImageDialog}>打开二维码图片</Button>
                        {this.state.support ? null : <p>此设备不支持二维码扫描</p>}
                    </Card.Content>
                </Card>
            </Overlay>
        )
    }
}

export default QrScanner