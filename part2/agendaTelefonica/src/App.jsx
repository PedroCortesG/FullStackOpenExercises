import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newNameSearch, setNewNameSearch] = useState('')

  const addNewPerson = (event) => {
    event.preventDefault()
    const personObject = {
        name: newName,
        number: newNumber
    }
    let invalid = false
    persons.forEach(person => {
        invalid = person.name === personObject.name
    });
    if (invalid) {
        alert(`${newName} is already added to phonebook`)
        return
    } else {
        setPersons(persons.concat(personObject))
        setNewName('')
    }
  }


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameSearchChange = (event) => {
    setNewNameSearch(event.target.value)
  }

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  })

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newNameSearch = {newNameSearch} handleNameSearchChange= {handleNameSearchChange}/>
      <h2>add a new</h2>
      <PersonForm addNewPerson={addNewPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons persons={persons} newNameSearch={newNameSearch}/>
    </div>
  )
}

export default App