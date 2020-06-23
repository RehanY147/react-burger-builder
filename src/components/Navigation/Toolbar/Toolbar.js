import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SidebarToggle from '../Sidebar/SidebarToggle/SidebarToggle';

import classes from './Toolbar.module.css';
const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <SidebarToggle clicked={props.sidebarToggleClicked} />
        <div className={classes.Logo}><Logo /></div>
        <nav className={classes.DesktopOnly}><NavigationItems /></nav>
    </header>
);

export default toolbar;