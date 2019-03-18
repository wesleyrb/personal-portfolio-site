import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../resources/My Logo.png'
import { Menu, Icon } from 'semantic-ui-react'
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {active: "home"};
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }){
    this.setState({
      active: name
    });
  }

  render() {

    return (
      <header>
        <div>
          <Menu secondary inverted large>
            <Menu.Item 
              name='home' 
              active={this.state.active === 'home'?'true':''}
              onClick={this.handleItemClick}>
                <Link to="" class="nav-link"><Icon fitted name='home' /> HOME</Link>
            </Menu.Item>
            <Menu.Item 
              name='resume' 
              active={this.state.active === 'resume' ? 'true':''}
              onClick={this.handleItemClick}>
                <Link to="resume" class="nav-link"><Icon fitted name='paperclip' /> RESUME</Link>
            </Menu.Item>
            <Menu.Item 
              name='projects' 
              active={this.state.active === 'projects'?'true':''} 
              onClick={this.handleItemClick}>
                <Link to="projects" class="nav-link"><Icon fitted name='code' /> PROJECTS</Link>
            </Menu.Item>
            <Menu.Item 
              name='blog' 
              active={this.state.active === 'blog'?'true':''} 
              onClick={this.handleItemClick}>
                <Link to="blog" class="nav-link"><Icon fitted name='quote right' /> BLOG</Link>
            </Menu.Item>
          </Menu>
        </div>
      </header>
    )
  }
}
export default NavBar;