import React from 'react';
import { Overlay, Card, Button, Form, Input, Notification } from '@alifd/next';
import { Auth } from '../services/OpenDGLab-Remote'
import axios from 'axios'
const FormItem = Form.Item;
class AuthDialog extends React.Component {
    state = {
        code: '',
        email: '',
        authed: false
    }
    componentDidMount() {
        if (window.dgremote.auth.isReady()) {
            this.setState({authed: true})
        } else {
            this.setState({authed: false})
        }
    }
    
    sendCode = () => {
        Notification.open({
            title: '通知',
            content: '正在请求...',
            duration: 1000,
            type: 'notice'
        });
        let authToken = window.dgremote.auth.loginWithEmail(this.state.email)
        axios({
            method: 'post',
            url: 'https://corsanywhere.herokuapp.com/' + authToken.url + '',
            headers: Object.assign({
                'Content-Type': authToken.contentType,
                'X-Requested-With': ''
            }, Object.assign(...authToken.headers.map((v)=>{ 
                let hed = {}
                hed[v.key] = v.value
                return hed
            }))),
            data: authToken.body
        }).then((result) => {
            window.dgremote.auth.process(JSON.stringify(result.data), authToken.requestCode)
            Notification.open({
                title: '通知',
                content: '已发送邮件',
                duration: 2000,
                type: 'notice'
            });
        }).catch(() => {
            Notification.open({
                title: '错误',
                content: '无法完成登录',
                duration: 2000,
                type: 'error'
            });
        })
    }
    setEmail = (v) => {
        this.setState({ email: v })
    }
    setCode = (v) => {
        this.setState({ code: v })
    }
    handleSubmit = () => {
        let {setLogined} = this.props
        Notification.open({
            title: '通知',
            content: '正在请求...',
            duration: 1000,
            type: 'notice'
        });
        let authToken = window.dgremote.auth.loginCode(this.state.code)
        axios({
            method: 'post',
            url: 'https://corsanywhere.herokuapp.com/' + authToken.url + '',
            headers: Object.assign({
                'Content-Type': authToken.contentType,
                'X-Requested-With': ''
            }, Object.assign(...authToken.headers.map((v)=>{ 
                let hed = {}
                hed[v.key] = v.value
                return hed
            }))),
            data: authToken.body
        }).then((result) => {
            window.dgremote.auth.process(JSON.stringify(result.data), authToken.requestCode)
            if (window.dgremote.auth.isReady()) {
                this.setState({ authed: true })
                setLogined(true)
                window.localStorage.setItem('uuid', window.dgremote.auth.getUUID())
                window.localStorage.setItem('token', window.dgremote.auth.getToken())
            } else {
                this.setState({ authed: false })
                setLogined(false)
            }
            Notification.open({
                title: '通知',
                content: '已登录',
                duration: 2000,
                type: 'success'
            });
        }).catch(() => {
            Notification.open({
                title: '错误',
                content: '无法完成登录',
                duration: 2000,
                type: 'error'
            });
            setLogined(false)
        })
    }
    onLogoutClick = () => {
        let {setLogined} = this.props
        setLogined(false)
        this.setState({ authed: false })
        window.localStorage.clear('uuid')
        window.localStorage.clear('token')
        window.dgremote.auth = new Auth()
    }
    render() {
        let { setClose } = this.props
        let content = null
        if (this.state.authed) {
            content = (
                <>
                    <p>当前用户 UUID：<span>{window.dgremote.auth.getUUID()}</span></p>
                    <p>当前用户 Token：<span>{window.dgremote.auth.getToken()}</span></p>
                </>
            )
        } else {
            content = (
                <>
                    <Form responsive={false} fullWidth labelTextAlign="left" size="large" labelAlign="inset" >
                        <FormItem fullWidth label="邮箱" format="email" required asterisk={false}>
                            <Input name="email" className="odgl-fullwidth" trim value={this.state.email} onChange={this.setEmail} innerAfter={
                                <Form.Submit
                                    text
                                    type="primary"
                                    validate={['email']}
                                    onClick={this.sendCode}
                                    style={{ marginRight: 10 }}
                                >
                                    发送验证码
                                </Form.Submit>
                            } />
                        </FormItem>
                        <FormItem fullWidth label="验证码" required asterisk={false}>
                            <Input name="code" className="odgl-fullwidth" value={this.state.code} onChange={this.setCode} trim defaultValue={this.state.code} />
                        </FormItem>
                        <FormItem fullWidth label=" ">
                            <Form.Submit className="odgl-fullwidth" type="normal" warning validate onClick={this.handleSubmit}>登录</Form.Submit>
                        </FormItem>
                    </Form>
                </>
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
                <Card.Header title="DG-Lab 认证服务"/>
                <Card.Content>
                    {content}
                </Card.Content>
                { 
                    this.state.authed ? <Card.Actions>
                        <Button type="normal" key="action1" warning onClick={this.onLogoutClick}>登出</Button>
                    </Card.Actions> : null
                }
            </Card>
        </Overlay>
    )
    }
    
}

export default AuthDialog;