import React from 'react'
import { Card, Overlay, Button, Input, Notification } from '@alifd/next'

class RemoteLink extends React.Component {
    state = {
        link: ''
    }
    componentDidMount() {
        let { value } = this.props
        this.setState({ link: value })
    }
    startRemote = () => {
        let { connectToRemote } = this.props
        if (this.state.link.startsWith('http://dungeon-lab.cn/appdownload.html#')) {
            connectToRemote(this.state.link)
        } else {
            Notification.open({
                key: 'scanerror',
                title: '错误',
                content: '无效的连接串',
                duration: 2000,
                type: 'error'
            })
        }
    }
    render() {
        let { setClose } = this.props
        return (
            <Overlay
                visible={true}
                align="cc cc"
                hasMask
                disableScroll
                onRequestClose={setClose}>
                <Card free style={{maxWidth: 600, width: 300}}>
                    <Card.Header title="连接" extra={<Button onClick={setClose} type="normal" warning>关闭</Button>} />
                    <Card.Content>
                    <p>DG-Lab 连接地址</p>
                    <Input style={{ width: '100%' }} value={this.state.link} onChange={(v) => { this.setState({ link: v }) }} />
                    </Card.Content>
                    <Card.Actions>
                        <Button onClick={this.startRemote} type="normal" warning>确定</Button>
                    </Card.Actions>
                </Card>
            </Overlay>
        )
    }
}

export default RemoteLink