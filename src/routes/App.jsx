import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Layout from '../containers/layout.jsx';
import '../styles/global.scss';
import Login from '../containers/login.jsx';
import RecoveryPassword from '../containers/RecoveryPassword.jsx';
import Home from '../pages/Home.jsx';
import NotFound from '../pages/NotFound.jsx';
import '../styles/global.scss';

const App = () => {
    return ( 
    
        <BrowserRouter>
                <Layout>
                    <Routes>
                    <Route index path="/" element={<Home/>} />
					<Route path="/login" element={<Login/>} />
					<Route path="/recovery-password" element={<RecoveryPassword/>} />
					<Route path="*" element={<NotFound/>} /> 
                   </Routes> 
                </Layout>       
        </BrowserRouter>
            
    );
}

export default App;

