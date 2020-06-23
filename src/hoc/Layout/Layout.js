import React, { Component } from 'react';
import Auxiliary from '../Auxiliary/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';

class Layout extends Component {
    state = {
        showSidebar: true
    }

    sidebarClosedHandler = () => {
        this.setState({ showSidebar: false });
    }

    sidebarToggleHandler = () => {
        this.setState((prevState) => {
            return { showSidebar: !prevState.showSidebar };
        });
    }

    render() {
        return (
            <Auxiliary>
                <Toolbar sidebarToggleClicked={this.sidebarToggleHandler} />
                <Sidebar open={this.state.showSidebar} closed={this.sidebarClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}

export default Layout;