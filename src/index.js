import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import ContactPage from './components/ContactPage';
import CategoriesPage from "./components/CategoriesPage";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/contact" component={ContactPage} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
