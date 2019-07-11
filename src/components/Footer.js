import React, { Component } from 'react';

import '../public/vendor/bootstrap/css/bootstrap.min.css';
import '../public/css/shop-item.css';

/* 하단의 footer 영역 */
class Footer extends Component {
    render() {
        return (
            <footer className="footer py-3 ">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright &copy; Your Website 2019</p>
                </div>
            </footer>
        )
    }
}

export default Footer;