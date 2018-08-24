import React, { Component } from 'react';
import './Tab.css';
import { NavLink } from 'react-router-dom'



export default class Tabs extends Component{
    render(){
        return(
            <nav className='tabs'>
                <NavLink to='/home' className='tab'><i className='iconfont'>&#xe7d6;</i>首页</NavLink>
                <NavLink to='/category' className='tab'>分类</NavLink>
                <NavLink to='/shoppingcar' className='tab'>购物车</NavLink>
                <NavLink to='/mine' className='tab'>我的</NavLink>
            </nav>
        )
    }

}
