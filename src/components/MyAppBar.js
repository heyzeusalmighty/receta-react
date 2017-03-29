import React from 'react';
import { Link } from 'react-router';
// import { checkbox as mdcCheckbox } from 'material-components-web';

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

    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">RECETA</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li><Link to="/" activeClassName="active">Home</Link></li>
                </ul>
            </div>
        </div>
    </nav>


)

export default MyAppBar;
