import { useState } from "react";
import Course from "./components/Course";

const App = ({courses}) => {

  return (
    <>
      {courses.map(course => <Course course={course} key={course.id}/>)}
    </>
  )
}


export default App 