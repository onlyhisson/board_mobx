import React, { Component } from 'react';
import { Route, Link, browserHistory } from 'react-router-dom';
import { decorate, observable, action } from 'mobx'
import { observer } from 'mobx-react'
import Config from '../config/common.json'

import '../public/vendor/bootstrap/css/bootstrap.min.css';
import '../public/css/shop-item.css';

import MainImage from '../components/MainImage';
import PostList from '../components/PostList';

/* 게시판 리스트 + 게시글 리스트 영역 */
class Board extends Component {

    constructor(props) {
        super(props)
        this.state = {
            boardList: [],          // 게시판 리스트
            showCheckbox : {        
                display: "none"     // 체크 박스 노출 여부
            }
        }
    }

    componentDidMount() {
        let url = Config.serverRootUrl + '/board/boardList'
        fetch(url, {
            method: 'GET',
            headers: {'Content-Type':'application/json'}
        })
        .then((response) => response.json())
        .then((result) => this.setState({boardList: result.boardList}))
        .catch((error) => console.log("API Call error" + error))
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <h1 className="my-4">게시판</h1>
                        <div className="list-group">
                            {this.state.boardList.map((v,i) => {
                                return (
                                    <Link to={`/board/${v.board_name}?id=${v.board_seq}`} key={i} className="list-group-item">
                                        {v.board_name}
                                    </Link>
                                ) 
                            })}
                        </div>
                    </div>    
                    <div className="col-lg-9">
                        <Route exact path="/" component={MainImage}/>
                        <Route path="/board/:title" component={PostList}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Board;