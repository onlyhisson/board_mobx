import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    isLogin = false;

    render() {
        return (
            <div>
                {
                    !this.isLogin && <Redirect to="/"/>
                }
                {/* 로그인 상태시 코드.. */}
            </div>
        );
    }
}

export default Login;