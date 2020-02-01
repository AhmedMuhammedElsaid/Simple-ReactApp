import React, { Component } from 'react';
import CourseForm from './Components/CourseForm';
import CourseList from './Components/CourseList'

class App extends Component {
  state = {
    courses: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
    ],
    current:""
  }

  //UpdateCurrentState 
  updateState = (e) =>
  {
this.setState({current:e.target.value})
  }
//
deleteCourse=(index) => {
  console.log(index)
let {courses}=this.state;
const length=courses.length;

courses.splice(index,1)
this.setState({courses});
}

  addCourse=(e)=>{
    e.preventDefault();
let {current}=this.state;
let {courses}=this.state;
if(current!==""){
courses.push({name:current});
this.setState({
  courses,current:"" 
})}
  }
editCourse=(value,index) => {
  let {courses}=this.state;
  let course=courses[index];
  course["name"]=value;
  this.setState({
    courses
  })
}
  render() {

    const { courses } = this.state;

    let list = courses.map((course, index) => {
      return <CourseList info={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
    })

    return (
   
      <section className="App">

       <h2> Course List</h2>
        <CourseForm current={this.state.current} updateCourse={this.updateState} addCourse={this.addCourse} />
       <ul>{list}</ul>

      </section>
      
    );
  }
}

export default App;
