import React from 'react';
import { Route } from 'react-router';
import Root from './components/root';
import Page from './components/page';


export default (
    <Route path='/' component={ Root }>
        <Route path='page' component={ Page } />
        <Route path='ajax' />
    </Route>
);
