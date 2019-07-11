import React, { Component } from 'react';

class About extends Component {    
    render() {
        let userName = this.props.match.params.username || 'default'
        return (
            <div>
                {userName} 의 소개
            </div>
        );
    }
}

export default About;

