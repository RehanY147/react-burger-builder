import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Sidebar from '../Navigation/Sidebar/Sidebar';

const layout = (props) => {
    return (
        <Auxiliary>
            <Toolbar />
            <Sidebar />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxiliary>
    );
}

export default layout;