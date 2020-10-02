import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { defaults } from 'react-chartjs-2';
import ModeSelection from './components/ModeSelection';
import LocalWithRouter from './components/Local';
import Remote from './components/Remote';
import AuthDialog from './components/AuthDialog';
import { Auth } from './services/OpenDGLab-Remote'
import axios from 'axios'
defaults.global.animation = false;
class App extends React.Component {
  state = {
    logined: '请稍后 DG-Lab Server 响应',
    authOverlay: false
  }
  setAuthDialogClose = () => {
    this.setState({ authOverlay: false })
  }
  setAuthDialogOpen = () => {
    this.setState({ authOverlay: true })
  }
  setLogined = (v) => {
    if (v) {
      this.setState({ logined: '已登录 DG-Lab Server' })
    } else {
      this.setState({ logined: '登录到 DG-Lab Server' })
    }
  }
  componentDidMount() {
    window.dgremote = {
      auth: new Auth()
    }
    if (window.localStorage.token && window.localStorage.uuid) {
      let authToken = window.dgremote.auth.loginWithToken(window.localStorage.token)
      axios({
        method: 'post',
        url: 'https://corsanywhere.herokuapp.com/' + authToken.url + '',
        headers: Object.assign({
            'Content-Type': authToken.contentType,
            'X-Requested-With': '',
            'Origin': ''
        }, Object.assign(...authToken.headers.map((v)=>{ 
          let hed = {}
          hed[v.key] = v.value
          return hed
        }))),
        data: authToken.body
      }).then((result) => {
        window.dgremote.auth.process(JSON.stringify(result.data), authToken.requestCode)
        if (window.dgremote.auth.isReady()) {
          this.setLogined(true)
        } else {
          this.setLogined(false)
        }
      }).catch((error) => {
        console.error(error)
      })
      this.setLogined(true)
    } else {
      this.setLogined(false)
    }
  }
  componentWillUnmount() {

  }
  render() {
    let auth = null
    if (this.state.authOverlay) auth = <AuthDialog setClose={this.setAuthDialogClose} setLogined={this.setLogined} />
    return (
      <div className="App">
          {auth}
            <Router>{ /*basename="/OpenDGLab-Connect"*/ }
              <Switch>
                <Route exact path="/">
                  <ModeSelection auth={this.state.logined} showAuth={this.setAuthDialogOpen} />
                </Route>
                <Route exact path="/local">
                  <LocalWithRouter />
                </Route>
                <Route exact path="/remote">
                  <Remote remote={window.location.hash.substring(1)}/>
                </Route>
              </Switch>
            </Router>
      </div>
    );
  }
}

export default App;
