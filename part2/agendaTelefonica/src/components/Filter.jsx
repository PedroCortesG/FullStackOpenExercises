const Filter = (props) => {
    const newNameSearch = props.newNameSearch
    const handleNameSearchChange = props.handleNameSearchChange
    return (
    <div>filter shown with
        <input
        value = {newNameSearch}
        onChange = {handleNameSearchChange}></input>
      </div>
    )
}

export default Filter