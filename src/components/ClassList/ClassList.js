import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super()

    this.state = {
      students: []
    }
    
  }

  componentDidMount(props) {
    let id = this.props.match.params.class
    axios.get(`http://localhost:3005/students?class=${id}`).then(res => {
      console.log(res.data)
      this.setState( { students: res.data } )
    })
  }

  render() {

    var students = this.state.students.map((student, i) => {
      return <Link to={`/student/${student.id}`} key={i}><h3 key={i}>{student.first_name} {student.last_name}</h3></Link>
  })

    return (

      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
          { students }
      </div>
    )
  }
    
}