import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './../styles/App.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sticky: false
    }
     this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 50) {
      console.log("sticky");
      this.setState({
        sticky: true
      });
    } else if (window.scrollY < 50) {
      console.log("not sticky");
      this.setState({
        sticky: false
      });
    }
  }

  render() {
    var pages = ['home', 'contact', 'about', 'work'];
    var navLinks = pages.map(function(page) {
      if (page === 'home') {
        var listLink = <Link to='/'>tracey lum</Link>;
        } else {
          var listLink = <Link to={'/' + page}>{page}</Link>;
          }
          return (
            <li key={page} id={page}>{listLink}</li>
          );
        });

        return (
          <nav style={{position: this.state.sticky ? "" : "relative"}}>
            <ul>
              {navLinks}
            </ul>
          </nav>
        );
      }
    }

    module.exports = Header;
