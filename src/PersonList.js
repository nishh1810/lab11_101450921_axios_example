import React, { Component } from 'react';
import axios from 'axios';
import './PersonList.css'
import { Card, Button, Row, Col } from 'react-bootstrap';

class PersonList extends Component {
  // Define state default values
  state = {
    persons: [],
  };

  // Component lifecycle callback
  componentDidMount() {
    axios
      .get(`https://randomuser.me/api/?results=10`)
      .then((res) => {
        console.log(res.data);
        const persons = res.data.results;
        this.setState({ persons });
      })
      .catch((error) => console.error('Error fetching data:', error));
  }

  render() {
    return (
      <div>
        <h1 style={{backgroundColor:'#32de84'}}>User List</h1>
        
          {this.state.persons.map((person, index) => (
            <Row>
            <Col key={index}>
              <Card className="w-100" style={{ backgroundColor: '#f0f8ff'}}>
              <Card.Body className="d-flex align-items-center">
                  {/* Left side: Avatar and Button */}
                  <div className="d-flex flex-column align-items-center mr-10">
                    <img
                      src={person.picture.medium}
                      alt="Avatar"
                      className="avatar mb-3"
                    />
                    <Button className="custom-button">Details</Button>
                  </div>

                  {/* Right side: Person Data */}
                  <div>
                    <Card.Title>{`${person.name.first} ${person.name.last}`}</Card.Title>
                    <Card.Text>{person.email}</Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            </Row>
          ))}
        
      </div>
    );
  }
}

export default PersonList;
