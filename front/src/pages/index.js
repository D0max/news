import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Card, CardBody, CardImg, CardTitle, Container, Navbar, NavbarBrand} from "reactstrap";
import axios from '../axios-news';
import './styles/index.css'

class Index extends Component {
  state ={
    news: []
  };
  componentDidMount(){
    axios.get('/news').then(response => {
      this.setState({
        news: response.data
      })
    })
  }
  render() {
    return (
      <Fragment>
        <Navbar color='dark' light expand='md'>
          <Container>
            <NavbarBrand style={{color: 'white'}} href="/">News Portal</NavbarBrand>
          </Container>

        </Navbar>
        <Container>
          <h2 className='title-news'>News</h2>
          <hr/>
          {this.state.news.map(news=>(
            <Card key={news.id}>
              <CardImg src={news.image} alt=""/>
              <CardTitle>{news.title}</CardTitle>
              <CardBody>{news.description}</CardBody>
            </Card>
          ))}
        </Container>
      </Fragment>
    );
  }
}

export default Index;