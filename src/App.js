import logo from './logo.svg';
import React, {useState} from 'react';
import {Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap'
import './App.css';
import goodsData from './data.js';
import Detail from './Detail';
import {Link, Route, Switch} from 'react-router-dom';
import axios from 'axios';
function App() {
  let [goods, goodsChange] = useState(goodsData);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/">
          <div className="Jumbotron">
            <h1>20% Season Off</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button bsStyle="primary">Learn more</Button>
            </p>
          </div>
          <div className="container">
            <div className="row">
              {
                goods.map(function(ele, idx){
                  return( <Good good={ele}/> )
                })
              }
            </div>
            <button className="btn btn-primary" onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then(()=>{
                console.log("SUCCESS")
              })
              .catch(()=>{
                console.log("FAIL")
              } );
            }}>더보기</button>
          </div>
        </Route>
        <Route path="/detail/:id">
          <Detail goods={goods}/>
        </Route>

        <Route path="/:id">
          <div>아무거나</div>
        </Route>
      </Switch>
    </div>
  );
}


function Good(props){
  return (
    <div className="col-md-4">
      <img src={props.good.src} width="100%"></img>
      <h4>{props.good.title}</h4>
      <p>{props.good.content} & {props.good.price}</p>
    </div>
  );
}


export default App;
