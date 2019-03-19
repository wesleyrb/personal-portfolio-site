import React, { Component } from 'react';
import { Segment, Header, Divider, Container, Menu, Button } from 'semantic-ui-react'
class HomePage extends Component {
  render() {
    return (
      <div class='p-4'>
          <Segment padded inverted className='banner shadow'><Header as='h1' textAlign='center'>Welcome To My Portfolio</Header>
            <Container>
              <Divider />
              <Header inverted as='h2' textAlign='center'>About Me:</Header>
              <Header inverted as='h3' textAlign='center'>I'm Wes, a computer engineer with a passion for full stack development,
            machine learning, automation, and robotics. <br/>On my site you'll my interactive resume, all of the exciting projects I've worked on, and a blog of things I find interesting. <br/>Stay a while and enjoy yourself!</Header>
            </Container>
          </Segment>
          
          <Segment padded className='shadow'>
          <Header as='h2' textAlign='center'>Find me on these forms of social media:</Header>
          <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4 d-flex justify-content-center">
              <div class="px-2"><Button circular color='facebook' icon='facebook' href='https://www.facebook.com/WesleyBickelIsTheCoolestPersonInTheUniverse' target="_blank" /></div>
              <div class="px-2"><Button circular color='linkedin' icon='linkedin' href='https://www.linkedin.com/in/wesley-bickel' target="_blank" /></div>
              <div class="px-2"><Button circular color='black' icon='github' href='https://github.com/wesleyrb' target="_blank" /></div>
            </div>
            <div class="col-sm-4"></div>
          </div>
          </Segment>
      </div>
    )
  }
}
export default HomePage;