import React, { Component } from 'react';
import Config from '../config/common.json'

import '../public/vendor/bootstrap/css/bootstrap.min.css';
import '../public/css/shop-item.css';

class PostDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            postDetail: {}
        }
    }

    /* 게시물 선택시 해당 게시물 상세 데이터 get */
    componentDidMount() {
        let id = new URLSearchParams(this.props.location.search).get('id')
        let url = Config.serverRootUrl + '/board/post/' + id;
        fetch(url, {
            method: 'GET',
            headers: {'Content-Type':'application/json'}
        })
        .then((response) => response.json())
        .then((result) => {
            this.setState({
                postDetail: result.postDetail
            })
        })
    }

    render() {
        if(!this.state.postDetail){
            return <div>해당 데이터가 없습니다.</div>
        } else {
            return (
                <div>
                    <h2 className="mt-4">{this.state.postDetail.writing_title}</h2>
                    <p className="lead">
                        by
                        <a href="#"> {this.state.postDetail.writing_user_name}</a>
                    </p>
                    <hr />
                    <p>Posted on <span style={{color:"gray"}}>{this.state.postDetail.writing_reg_date}</span></p>

                    <hr/>

                    <p className="lead">{this.state.postDetail.writing_content}</p>
                    <p style={{color:"gray"}}>[ IP : {this.state.postDetail.writing_reg_ip} ]</p>

                    {/*
                    <blockquote className="blockquote">
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer className="blockquote-footer">Someone famous in
                            <cite title="Source Title">Source Title</cite>
                        </footer>
                    </blockquote>

                    <hr />
                    <div className="card my-4">
                        <h5 className="card-header">Leave a Comment:</h5>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <textarea className="form-control" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>

                    <div className="media mb-4">
                        <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                        <div className="media-body">
                            <h5 className="mt-0">Commenter Name</h5>
                            Comment Content
                        </div>
                    </div>

                    <div className="media mb-4">
                        <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                        <div className="media-body">
                            <h5 className="mt-0">Commenter Name</h5>
                            Comment Content

                            <div className="media mt-4">
                                <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                                <div className="media-body">
                                    <h5 className="mt-0">Commenter Name</h5>
                                    Comment Content
                                </div>
                            </div>

                            <div className="media mt-4">
                                <img className="d-flex mr-3 rounded-circle" src="http://placehold.it/50x50" alt="" />
                                <div className="media-body">
                                    <h5 className="mt-0">Commenter Name</h5>
                                    Comment Content
                                </div>
                            </div>

                        </div>
                    </div>
                    */}
                </div>
            )
        }
    }
}

export default PostDetail;