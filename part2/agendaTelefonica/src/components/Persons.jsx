const Persons = ({persons, newNameSearch}) => {
    return (
        <div>
            {persons.filter((person) => person.name.toLowerCase().includes(newNameSearch.toLowerCase())).map((person) => <p key={person.name}>{person.name} {person.number}</p>)}
        </div>
    )
}

export default Persons