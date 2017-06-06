import React, {Component} from 'react';
import './../styles/App.css';

class Header extends Component {
    render() {
        var pages = ['home', 'contact', 'about', 'work'];
        var navLinks = pages.map(function(page) {
            if (page === 'home') {
                var listLink = <a href='/'>tracey lum</a>;
            } else {
                var listLink = <a href={'/' + page}>{page}</a>;
            }
            return (
                <li key={page} id={page}>{listLink}</li>
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
