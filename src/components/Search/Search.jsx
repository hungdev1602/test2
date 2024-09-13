/* eslint-disable react/prop-types */
import { observer } from "mobx-react-lite";
const Search = ({ handleSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.searchValue.value
    handleSearch(searchValue)
  }

  return (
    <>
      <form className='main-form' onSubmit={handleSubmit}>
        <input name="searchValue" type="text" className='form-input' placeholder='Search Wiki'/>
        <button className="form-button">Search</button>
      </form>
    </>
  )
}

export default observer(Search)