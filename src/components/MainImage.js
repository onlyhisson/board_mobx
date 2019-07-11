import React, { Component } from 'react';

import '../public/vendor/bootstrap/css/bootstrap.min.css';
import '../public/css/shop-item.css';

/* 우측 이미지 영역 */
class MainImage extends Component {
    render() {
        return (
            <div className="card mt-4">
                <img className="card-img-top img-fluid" src="/images/architecture.jpg" alt="" />
            {/*}
                <div className="card-body">
                    <h3 className="card-title">Product Name</h3>
                    <h4>$24.99</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
                    <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
                    4.0 stars
                </div>
            */}
            </div>
        )
    }
}

export default MainImage;