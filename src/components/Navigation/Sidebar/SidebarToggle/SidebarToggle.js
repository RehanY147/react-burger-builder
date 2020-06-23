import React from 'react';
import classes from './SidebarToggle.module.css';

const sidebarToggle = (props) => {
    return <div onClick={props.clicked} className={classes.DrawerToggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>;
}

export default sidebarToggle;