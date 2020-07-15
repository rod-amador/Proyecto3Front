import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom"

import App from './App';
import UIkit from "uikit"
import "uikit/dist/css/uikit.min.css"
import Icons from "uikit/dist/js/uikit-icons"

import 'bootstrap/dist/css/bootstrap.min.css';

UIkit.use(Icons)

const WithRouter = ()=>(  
    
    <BrowserRouter> 
        <App/> 
    </BrowserRouter>  )


ReactDOM.render(  <WithRouter />, document.getElementById('root')     );

