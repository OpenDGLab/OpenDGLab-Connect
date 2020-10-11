import React from 'react';
import { withRouter } from "react-router";
import QrScanner from './QrScanner'
import RemoteLink from './RemoteLink'
import RemoteDevice from './RemoteDevice'
import { Button, Card, Grid, Notification } from '@alifd/next';
import { fireChange } from '../Utils';

const { Row, Col } = Grid;
class Remote extends React.Component {
    state = {
        remote: '',
        waitLogin: true,
        scanner: false,
        remoteLink: false
    }
    loginListener = () => {
        let { auth } = this.props
        this.setState({ waitLogin: false })
        if (!window.dgremote.auth.isReady()) {
            auth()
        }
        window.removeEventListener('logined', this.loginListener)
    }
    componentDidMount() {
        let { remote } = this.props
        if (!window.dgremote.auth.isReady()) {
            window.addEventListener('logined', this.loginListener)
            if (!(window.localStorage.token && window.localStorage.uuid)) fireChange('logined')
        } else {
            this.setState({ waitLogin: false })
        }
        if (remote) {
            this.setState({ remote: remote })
        }
        Notification.open({
            title: '注意',
            content: '由于浏览器单线程限制，此功能体验不佳。',
            duration: 5000,
            type: 'warning'
        })
    }
    connectRemote = (v) => {
        this.setState({ remote: v, remoteLink: false, scanner: false })
    }
    render() {
        let connect = null
        let scanner = null
        let remotelink = null
        if (this.state.scanner) {
            scanner = (
                <QrScanner setClose={ ()=> { this.setState({ scanner: false }) }} connectToRemote={this.connectRemote} />
            )
        }
        if (this.state.remoteLink) {
            remotelink = (
                <RemoteLink setClose={ () => { this.setState({ remoteLink: false }) } } connectToRemote={this.connectRemote} value={this.state.remote} />
            )
        }
        if (this.state.remote === '') {
            connect = (
                <>
                <div role="grid" style={{padding: '4px'}}>
                    <Row gutter={8} justify="center">
                        <Col xs={24} m={12} s={8}>
                        <Card free style={{ marginTop: '8px' }}>
                            <Card.Header title="远程连接" extra={<Button warning type="normal" onClick={() => { this.props.history.push("/") }}>返回主页</Button>}/>
                            <Card.Content>
                                { 
                                    this.state.waitLogin ? (
                                        <p>请稍后...</p>
                                    ) : (
                                        <>
                                        <p>
                                            <Button style={{width: '100%'}} warning type="primary" onClick={() => { this.setState({ remoteLink: false, scanner: true }) }}>扫描二维码</Button>
                                        </p>
                                        <p>
                                            <Button style={{width: '100%'}} warning type="primary" onClick={() => { this.setState({ remoteLink: true, scanner: false }) }}>输入连接地址</Button>
                                        </p>
                                        </>
                                    )
                                }
                            </Card.Content>
                        </Card>
                        </Col>
                    </Row>
                </div>
                {scanner}
                {remotelink}
                </>
            )
        } else {
            connect = (
                <>
                <RemoteDevice remote={this.state.remote} onExit={this.props.history} />
                </>
            )
        }
        return (
            <>
            {connect}
            </>
        )
    }
}
const RemoteWithRouter = withRouter(Remote);
export default RemoteWithRouter;