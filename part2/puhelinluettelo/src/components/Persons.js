import React from "react"

const Person = ({person, onClick}) => {
    return (
      <div>
        {person.name} {person.number}
        <button onClick={() => onClick(person.id)}>delete</button>
      </div>
    )
  }
  
const Persons = ({persons, onClick}) => {
    return persons.map(person => 
      <Person key={person.name} person={person} onClick={onClick}/>
    )
  }

export default Persons
