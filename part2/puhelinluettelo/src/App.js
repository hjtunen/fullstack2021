import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from "./services/persons"
import Notification from './components/Notification'


const App = () => {
  //const [persons, setPersons] = useState([
  //  { name: 'Arto Hellas', number: '040-123456' },
  //  { name: 'Ada Lovelace', number: '39-44-5323523' },
  //  { name: 'Dan Abramov', number: '12-43-234345' },
  //  { name: 'Mary Poppendieck', number: '39-23-6423122' }
  //])
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')
  const [message, setMessage] = useState(null)
  const [success, setSuccess] = useState(true)

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        console.log('promise fulfilled')
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.find(x => x.name === newName)) {
      const person = persons.find(x => x.name === newName)
      const choice = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)

      if (choice) {
        personService
          .update(person.id, personObject)
          .then(data => {
            personService
              .getAll()
              .then(initialPersons => {
                setPersons(initialPersons)
                setMessage(`Number of ${newName} updated to ${newNumber}`)
                setSuccess(true)
                setNewName("")
                setNewNumber("")

                setTimeout(() => {
                  setMessage(null)
                }, 5000)
              })
          })
          .catch(error => {
            setMessage(`Informatioon of ${newName} not found`)
            setSuccess(false)
            setPersons(persons.filter(p => p.name !== newName))

            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
      }

    }else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setMessage(`Added ${newName}`)
          setSuccess(true)
          setNewName("")
          setNewNumber("")

          setTimeout(() => {
            setMessage(null)
          }, 5000)
        })
    }
  }

  const deletPerson = (id) => {
    console.log(`delet id ${id}`)
    const person = persons.find(x => x.id === id)
    const choice = window.confirm(`Delete ${person.name}?`)

    if (choice) {
      personService
      .delet(id)
      .then(data => {
        personService
          .getAll()
          .then(initialPersons => {
            setPersons(initialPersons)
            setMessage(`Deleted ${person.name}`)
            setSuccess(true)

            setTimeout(() => {
              setMessage(null)
            }, 5000)
          })
      })
    }

  }

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    //console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const filtered = persons.filter(person => 
    person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
        <Notification message={message} success={success} />
        filter shown with
        <Filter value={newFilter} onChange={handleFilterChange}/>
      <h2>add a new</h2>
      <PersonForm 
        onSubmit={addPerson}
        nameValue={newName}
        numberValue={newNumber}
        nameChange={handleNameChange}
        numberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={filtered} onClick={deletPerson}/>
      

    </div>
  )

}

export default App