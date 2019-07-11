import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import '../public/vendor/bootstrap/css/bootstrap.min.css';
import '../public/css/shop-item.css';

/* 화면 우측 Post  */
class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false,
            showCheckbox : this.props.showCheckbox,
            postDetail: {}
        }
    }

    toggleHover(event) {
        this.setState({
            hover: !this.state.hover
        })
    }

    render() {
        let linkStyle;
        if (this.state.hover) {
            linkStyle = {backgroundColor: 'lightblue'}
        } else {
            linkStyle = {backgroundColor: 'white'}
        }
        return (
            <div>
                <div className="col-sm-12"
                    style={linkStyle} 
                    onMouseEnter={() => this.toggleHover()} 
                    onMouseLeave={() => this.toggleHover()}>
                    <div className="row">
                        <div className="col-sm-2 text-center" style={this.props.showCheckbox}>
                            <label htmlFor={"boardCheckBox" + this.props.postId} style={{width:"100%", height:"100%"}}>
                                    {/*<a href="#" className="btn btn-info">button</a>*/}
                                    <div className="">
                                        <input id={"boardCheckBox" + this.props.postId} 
                                            name={"boardCheckBox" + this.props.postId}
                                            type="checkbox" 
                                            checked={this.props.checkedPost["boardCheckBox" + this.props.postId] || false}
                                            onChange={this.props.handleCheckedCheckBox}/>
                                    </div>
                            </label>
                        </div>
                        <div className="col-sm-10">
                            <div>
                                <p>
                                    <Link to={`/board/post?id=${this.props.postId}`} style={{color:"green"}}>
                                        {this.props.title}
                                    </Link> 
                                </p>
                                <small className="text-muted">등록일: {this.props.regDate} / </small> 
                                <small className="text-muted">IP: {this.props.regIp} </small>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>    
            </div>
        )
    }
}

export default Post;