import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class Image extends Component {
    render() {
        return (
            <div>
                <p>title: {this.props.match.params.title}</p>
                <p>id: {new URLSearchParams(this.props.location.search).get('id')}</p>
            </div>
        );
    }
}

class Images extends Component {
    render() {
        return (
            <div>
                <p>사진</p>
                <Link to="/images/first?id=1">First</Link>
                <Link to="/images/second?id=2">Second</Link>
                <Link to="/images/third?id=3">Third</Link>
                <Route 
                    path="/images/:title"
                    component={Image} />
            </div>
        );
    }
}

export default Images;