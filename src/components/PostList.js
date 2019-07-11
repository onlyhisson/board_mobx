import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Config from '../config/common.json'

import '../public/vendor/bootstrap/css/bootstrap.min.css';
import '../public/css/shop-item.css';
import { PostDetail, Post }  from './';

/* 화면우측 게시글 리스트 */
class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            postList: [],
            postDetail: {},
            showCheckbox : {
                display: "none"
            },
        }
        this.getPostList()
    }

    componentDidUpdate(prevProps) {
        if (this.props.location.key !== prevProps.location.key) 
            this.getPostList()
    }

    getPostList() {
        let id = new URLSearchParams(this.props.location.search).get('id')
        let url = Config.serverRootUrl + '/board/postList/' + id;
        fetch(url, {
            method: 'GET',
            headers: {'Content-Type':'application/json'}
        })
        .then((response) => response.json())
        .then((result) => {
            this.setState({
                postList: result.postList,
            })
        })
    }

    handleCheckBoxShow() {
        this.setState({
            showCheckbox : {
                display: ""
            },
        })
    }

    handleCheckedCheckBox(event) { 
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;  
        
        this.setState({
            [name]: value
        })
    } 

    render() {
        if(this.props.location.pathname.indexOf('post')>-1){
            return (
                <PostDetail location={this.props.location} />
            )
        } else {
            return (
                <div className="card card-outline-secondary my-4">
                    <div className="card-header">
                        {this.props.match.params.title} LIST
                    </div>
                    <div className="card-body">
                        {this.state.postList.map((v,i) => {
                        return <Post
                                key={i} 
                                postId={v.writing_seq} 
                                title={v.writing_title} 
                                regDate={v.writing_reg_date} 
                                regIp={v.writing_reg_ip}
                                showCheckbox={this.state.showCheckbox}
                                handleCheckedCheckBox={(e)=>this.handleCheckedCheckBox(e)}
                                checkedPost={this.state}/>
                        })}
                        <div className="text-right">
                            <a href="#" className="btn btn-success" style={{margin:"0px 5px 0px 5px"}}>글쓰기</a>
                            <a href="#" className="btn btn-danger" style={{margin:"0px 5px 0px 5px"}} onClick={(e)=>this.handleCheckBoxShow(e)}>삭제</a>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default PostList;
