import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';

// 引入页面
import Home from './pages/home/root/Index';
import Category from './pages/category/root/Index';
import Shoppingcar from './pages/shoppingcar/root/Index';
import Mine from './pages/mine/root/Index';

// 引入tabs
import Tab from './common/tabs/Tab';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* 重定向 */}
          <Route path='/' exact render={()=>{
            return <Redirect to='/home'/>
          }}></Route>
          {/* 页面切换 */}
          <Route path='/home' component={Home}></Route>
          <Route path='/category' component={Category}></Route>
          <Route path='/shoppingcar' component={Shoppingcar}></Route>
          <Route path='/mine' component={Mine}></Route>
          <Route path='/' component={Tab}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
