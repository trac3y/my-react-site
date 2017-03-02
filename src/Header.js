import React, {Component} from 'react';
import logo from './logo.svg';
import './styles/App.css';

class Header extends Component {
    render() {
        var pages = ['home', 'contact', 'about', 'work'];
        var navLinks = pages.map(function(page) {
            return (
                <li><a id={page} href={'/' + page}>
                    {page}
                </a></li>
            );
        });

        return (
            <nav>
                <ul>
                    {navLinks}
                </ul>
            </nav>
        );
    }
}

module.exports = Header;
