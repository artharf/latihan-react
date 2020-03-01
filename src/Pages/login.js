import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Login, isLogin } from '../Redux/Action';


class LoginPage extends Component {
    state = {
        login: null,
        userData : [
            {
                username : 'Arthur',
                password : '123',
            },
            {
                username : 'admin',
                password : 'admin',
            }
        ],
        inputLogin: {
            username:'',
            password:''
        }

    }


    onBtnLogin = () => {
        let username = this.refs.username.value
        let password = this.refs.password.value

        let user = this.state.userData.find(val => {
            return val.username === username && val.password === password
        })

        if(user){
            this.setState({
                login: true
            })
            this.props.Login(this.state.inputLogin.username)
            this.props.isLogin()
        }else{
            this.setState({
                login: false
            })
        }
    }

    
    inputBaru = (e) => {
        this.setState({
            inputLogin: {
                ...this.state.inputLogin,
                [e.target.id] : e.target.value

            }
        })
        // console.log(this.state.inputLogin)
    }

    render(){
        // console.log(this.props.userGlobal)
        if(this.state.login){
            return (
                <Redirect to='/'></Redirect>
            )
        }
        else if (this.state.login === false){
            return (
                // <Redirect to='/failed'></Redirect>
                <Redirect to={{
                    pathname: '/failed', 
                    state : {
                        errorMessage :'Error Login', 
                        errorCode:'404'
                    }}}>

                </Redirect>

            )
        }
        return(
            <div>
                <h1>Ini Halaman Login</h1>
                <input
                    type='text' 
                    ref='username' 
                    onChange={this.inputBaru} 
                    value={this.state.inputLogin.username} 
                    id='username'/>
                <input
                    type='text' 
                    ref='password' 
                    onChange={this.inputBaru} 
                    value={this.state.inputLogin.password} 
                    id='password'/>
                <Button onClick={this.onBtnLogin}> Login </Button>
                {/* <Button color='success' onClick={this.loginSuccess}>
                    Login Success
                </Button>
                <Button color='danger' onClick={this.loginFailed}> 
                    Login Failed
                </Button> */}
            </div>
        )
    }

}

const mapStatetoProps = (state) => {
    return {
        userGlobal : state.contoh.username
    }
}

export default connect(mapStatetoProps,{ Login , isLogin})(LoginPage)