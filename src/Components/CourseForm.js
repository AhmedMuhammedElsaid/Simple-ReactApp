import React from 'react';

const CourseForm = (props) =>{
    return(
        <div>
            <form className="formAdd" onSubmit={props.addCourse}>
                <input type="text"  onChange={props.updateCourse} value={props.current} placeholder="Add Course" />
               <button type="submit"  className="add">Add</button>
            </form>
        </div>

    )
}
export default CourseForm