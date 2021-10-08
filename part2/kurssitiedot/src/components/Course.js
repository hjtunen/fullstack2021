import React from 'react'

const Header = ({name}) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

const Part = ({part}) => {
  return (
    <li>
        {part.name} {part.exercises}
    </li>
  )
}

const Content = ({parts}) => {
  return (
    <ul>
      {parts.map(part => <Part key={part.id} part={part} />)}
    </ul>
  )
}

const Total = (props) => {

  return (
    <>
      <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
    </>

  )
}

const Course = ({course}) => {


    return (
        <div>
          <Header name={course.name} />
          <Content parts={course.parts} />
          <Total course={course} />
        </div>
      )


}

export default Course