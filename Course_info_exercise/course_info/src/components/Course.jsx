const Course = ({course}) => {

    return (
      <>
        <Header course={course}/>
        <Content course={course}/>
        <Total course={course}/>
      </>
    )
  }
  const Header = ({course}) =>{
    return <h1>{course.name}</h1>
  }
  
  const Content = ({course}) => {
    return (
      <>
        {course.parts.map(part => <Part part={part} key={part.id}/>)}
      </>
    )
  }
  
  const Part = ({part}) => {
    return <p>{part.name} {part.exercises}</p>
  }
  
  const getSum = (total, part) => {
    return total + part.exercises
  }
  
  const Total = ({course}) => {
    return (
      <p><strong>total exercises - {course.parts.reduce(getSum, 0)}</strong></p>
    )
  }

  
export default Course