// Write your code here
import {Component} from 'react'
import './index.css'
import Login from './Login'
import Logout from './Logout'
import Message from './Message'

class Home extends Component {
    state = {login:true}

    islogin = () => {
    this.setState(prevState => ({login: !prevState.login}))
  }

    loginMessage = () =>{
        
            <h1 className='heading'> Please Login</h1>
            <button className="button" type="button" onClick={this.islogin}>Login </button>
    }

    logoutMessage = () =>{
            <h1 className='heading'>Welcome User</h1>
            <button className = 'button' type= 'button' onClick = {this.islogin}>Logout </button>
    }

    render(){
        const {login} = this.state
        return(
            <div className = 'container'>
                <div className = 'container1'>
                    {login : {this.loginMessage()} : {this.logoutMessage()}}
                </div>
            </div>
        )
    }

}
