import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      person: {},
      students: [],
    };
  }
  reciveMessage = (message) => {
    this.setState({ message });
  };
  recivePerson = (person) => {
    this.setState({ person });
  };
  reciveStudents = (students) => {
    this.setState({ students });
  };
  render() {
    const { reciveMessage, recivePerson, reciveStudents } = this;
    const { message, person, students } = this.state;
    return (
      <div>
        <Child
          reciveMessage={reciveMessage}
          recivePerson={recivePerson}
          reciveStudents={reciveStudents}
        />
        <hr />
        {message && <p>Message From Child Component : {message}</p>}
        {Object.keys(person).length > 0 && (
          <p>
            Person Recived From Child : {person.fname} - {person.lname}
          </p>
        )}
        <ul>
          {students.map((user, i) => {
            return <li key={i}>{user.fname}</li>;
          })}
        </ul>
      </div>
    );
  }
}
