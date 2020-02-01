import React, { Component } from 'react';


class CourseList extends Component {
    state = {
        isEdit:false
    }
    renderCourse = () => {
        return (
            <li>
                <span>{this.props.info.name}</span>
                <button onClick={() => {this.toggleState()}}>Edit Course</button>
                <button onClick={() =>{ this.props.deleteCourse(this.props.index)}} >Delete Course</button>
            </li>
        )
    }

    // State 
    toggleState = () => {
        let {isEdit}=this.state;
        this.setState({
            isEdit:!isEdit
        })
    }
    updateForm=(e) =>{
        e.preventDefault();
        this.props.editCourse(this.input.value,this.props.index)
        this.toggleState();
    }

    //Render UpdateForm

    renderUpdateForm = () => {
        return(
            <form onSubmit={this.updateForm}> 
                <input type="text" ref={(v) =>{this.input=v}} defaultValue={this.props.info.name}/>
                <button>Update Course</button>
            </form>
        )
    }
    //edit Course

    render() {
        let {isEdit}=this.state;
        return (

            <React.Fragment>
                { isEdit ? this.renderUpdateForm() : this.renderCourse() }
            </React.Fragment>



        )
    }
}
export default CourseList