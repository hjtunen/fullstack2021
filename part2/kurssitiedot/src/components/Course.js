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

const Total = ({parts}) => {

  return (
    <b>
        total of {parts.reduce((sum, x) => sum + x.exercises, 0)} exercises
    </b>
  )
}

const Course = ({course}) => {


    return (
        <div>
          <Header name={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
      )


}

export default Course