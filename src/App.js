import React from 'react';
import {CardList} from './Components/CardList/CardList.Component'
import {SearchBox} from './Components/SearchBox/SearchBox.component'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchfield : ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => this.setState({monsters : data}))
  }

  searchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render () {
    
      const filteredMonsters = this.state.monsters.filter(monster => {
        return monster.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      })

    return (
      <div className="App">
        <h1>Robofriends</h1>
        <SearchBox onchange={this.searchChange}/>
        <CardList monsters={filteredMonsters}/> 
      </div>
    );
  }
}

export default App;
