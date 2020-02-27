export class Storage {
    constructor(storageName = 'gameScoreboard', initialValue = '[]') {
        this.storageName = storageName
        // if localStorage contains any data from previous games? 
        if (!localStorage.getItem(storageName)) {
        // if theres none, create new item for game
          localStorage.setItem(storageName, initialValue)
        }
    }
    
    // load data from prev games from localStorage (localStorage.getItem)
      getData() {
        return JSON.parse(localStorage.getItem(this.storageName))
      }
    
    // update data in localStorage (localStorage.setItem)
      update(data) {
        localStorage.setItem(this.storageName, JSON.stringify(data))
      }
}