import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Sidebar.module.css';

import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';

const sidebar = (props) => {
    let attachedClasses = [classes.Sidebar, classes.Close];
    if (props.open) {
        attachedClasses = [classes.Sidebar, classes.Open];
    }
    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}><Logo /></div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>
    )
}

export default sidebar;