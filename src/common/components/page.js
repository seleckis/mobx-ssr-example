import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Root extends Component {

    constructor(props) {
        super(props);
        console.log(typeof window === 'object' ? 'client-side' : 'server-side');
    }

    render() {

        return (
            <div>
                <h1>Another page</h1>
				<p><Link to="/">Back to Home</Link></p>
            </div>
        );
    }
}
