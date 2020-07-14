import React from 'react';

import classes from './NavigationItems.module.css';

import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    {/* We are passing the 'active' attribute like this because 
        boolean props can be passed on like this */}
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
  </ul>
);

export default navigationItems;
