import React from 'react';
import Layout from '../containers/layout';
import '../styles/global.scss';
import Login from '../containers/login';

const App = () => {
    return (
            <Layout>
                <Login />
            </Layout>
    );
}

export default App;