import React from 'react';
import css from './Nav.module.css';

const Nav = ({ handleMenuClick }) => {
    return (
        <div className="container" id={css.divtitle}>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#featured" onClick={handleMenuClick}>
                                <i className="fa fa-star" aria-hidden="true">All Categories</i> 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#apartment" onClick={handleMenuClick}>
                                <i className="fa fa-building" aria-hidden="true"> Apartment </i> 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#camping" onClick={handleMenuClick}>
                                <i className="fa fa-tree" aria-hidden="true"> Camping </i> 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#swimming-pool" onClick={handleMenuClick}>
                                <i className="fa fa-desktop" aria-hidden="true"> Design </i> 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#amazing-views" onClick={handleMenuClick}>
                                <i className="fa fa-binoculars" aria-hidden="true"> Amazing Views </i> 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#mansions" onClick={handleMenuClick}>
                                <i className="fa fa-home" aria-hidden="true">Mansions</i> 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#rooms" onClick={handleMenuClick}>
                                <i className="fa fa-bed" aria-hidden="true"> Luxe</i> 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#bed-and-breakfast" onClick={handleMenuClick}>
                                <i className="fa fa-coffee" aria-hidden="true"> Bed and Breakfast</i> 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#castles" onClick={handleMenuClick}>
                                <i className="fa fa-home" aria-hidden="true"> Castles</i> 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#vineyards" onClick={handleMenuClick}>
                                <i className="fa fa-cc-diners-club" aria-hidden="true"> Vineyards</i> 
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Nav;
