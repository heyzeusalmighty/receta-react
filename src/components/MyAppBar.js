import React from 'react';
import { Link } from 'react-router';
import { checkbox as mdcCheckbox } from 'material-components-web';

// import AppBar from 'react-toolbox/lib/app_bar';
// import Navigation from 'react-toolbox/lib/navigation';
// import Link from 'react-toolbox/lib/link';

//
// const MyAppBar = () => (
//     <AppBar title="Recipes" leftIcon='menu' rightIcon="menu">
//         <Navigation type='horizontal'>
//             <Link href="/" label="Home" icon="inbox" />
//             <Link href="/" label="Profile" icon="person" />
//         </Navigation>
//     </AppBar>
// );

const MyAppBar = () => (
    <div>
        <h5>my app bar</h5>
        <mdcCheckbox />
    </div>
)

export default MyAppBar;
