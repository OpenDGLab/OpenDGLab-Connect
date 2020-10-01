import React from 'react';
import { Button, Typography } from '@alifd/next';
import {
    useHistory
} from "react-router-dom";


function ModeSelection({auth, showAuth}) {
    const history = useHistory();
    function onClickLocal() {
        history.push("/local");
    }
    function onClickRemote() {
        history.push("/remote");
    }
    function onClickShowAuth() {
        showAuth(true)
    }
    return (
        <div>
            <div style={{ width: '100%', padding: '16px' }}>
                <center><img src="OpenDGLab-Remote.svg" style={{ width: '256px' }} alt=""></img></center>
                <center><Typography.H1>OpenDGLab Connect</Typography.H1></center>
                <p></p>
                <center><Button type="normal" warning size="large" className="odgl-p-a-1 odgl-flexable-fullwidth" onClick={onClickShowAuth}>{auth}</Button></center>
                <p></p>
                <center><Button type="normal" warning size="large" className="odgl-p-a-1 odgl-flexable-fullwidth" onClick={onClickLocal}>本地模式</Button></center>
                <p></p>
                <center><Button type="normal" warning size="large" className="odgl-p-a-1 odgl-flexable-fullwidth" disabled onClick={onClickRemote}>远程模式</Button></center>
            </div>
        </div>
    )
}

export default ModeSelection;