import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../public/vendor/bootstrap/css/bootstrap.min.css';
import '../public/css/shop-item.css';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">React Board</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" href="#" style={{color:"white"}} to="/">게시판</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#" style={{color:"white"}} to="/about">소개</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#" style={{color:"white"}} to="/Images">사진</Link>
                        </li>
                        {/*
                        <li className="nav-item">
                            <Link className="nav-link" href="#" style={{color:"white"}} to="/login">로그인</Link>
                        </li>
                        */}
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default Header;