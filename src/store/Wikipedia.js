import { makeAutoObservable } from 'mobx'
export class Wikipedia {
  searchResult = []

  constructor() {
    makeAutoObservable(this)
  }

  
  async searchWikipedia(query){
    this.searchResult = []

    try {
      const response = await fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&gsrlimit=10&generator=search&origin=*&gsrsearch=${query}`)
      const data = await response.json()
      for(let key in data.query.pages){
        this.searchResult.push(data.query.pages[key])
      }
    } catch (error) {
      console.log(error)
    }
  }
}

// export default new Wikipedia()