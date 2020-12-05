import Radium from 'radium';
import * as React from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import './App';
import Main from './components/shared/Main';

/**
 * App function component
 */
const App: React.FC = () => {
    return (
        <BrowserRouter>
       <div className='App'>
        <Main></Main>
       </div>
      </BrowserRouter>
   );
};

export default Radium(App);
