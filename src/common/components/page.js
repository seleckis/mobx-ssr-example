import React, { Component } from 'react';
import { Link } from 'react-router';
import 'whatwg-fetch';

export default class Root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
        console.log(typeof window === 'object' ? 'client-side' : 'server-side');
    }
    componentDidMount() {
        console.log("componentDidMount");
        fetch('/ajax')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    title: json.title
                });
            }).catch(ex => {
                console.log('parsing failed', ex)
            });
    }

    render() {

        return (
            <div>
                <h1>{this.state.title}</h1>
				<p><Link to="/">Back to Home</Link></p>
            </div>
        );
    }
}
