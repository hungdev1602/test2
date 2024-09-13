import { useState } from 'react'
import './App.css'
import { observer } from "mobx-react-lite";
import Result from './components/Result/Result'
import Search from './components/Search/Search'
import { Wikipedia } from './store/Wikipedia'

function App() {

  const [store] = useState(() => new Wikipedia())

  const handleSearch = (query) => {
    store.searchWikipedia(query)
  }
  
  return (
    <>
      <div className="container">
        <div className="main">
          <h1 className="main-title">Wikipedia Searcher test 2</h1>
          <Search handleSearch={handleSearch}/>
        </div>
        <a className="random" target='_blank' href='https://en.wikipedia.org/wiki/Special:Random'>Click to get something Random</a>
      </div>
      <div className="result-cards">
        {store.searchResult.map((item, index) => (
          <Result title={item.title} key={index}/>
        ))}
      </div>
    </>
  )
}

export default observer(App)
