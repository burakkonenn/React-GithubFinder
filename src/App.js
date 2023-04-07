import Alert from "./components/Alert";
import Header from "./components/Header";
import Search from "./components/Search";
import UserList from "./components/UserList";
import React, { Component } from 'react'


export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      users: [],
      spinner: false,
      error: null
    }
  }


  // componentDidMount() {
  //   //loading-spinner
  //   this.setState({ spinner: true });

  //   setTimeout(() => {
  //     fetch("https://api.github.com/users")
  //       .then(response => response.json())
  //       .then(data => this.setState({ users: data, spinner: false }));
  //   }, 2000);
  // }


  searchUsers = (keyword) => {
     //loading-spinner
     this.setState({ spinner: true });
  
     setTimeout(() => {
       fetch("https://api.github.com/search/users?q=" + keyword)
         .then(response => response.json())
         .then(data => this.setState({ users: data.items, spinner: false }));
     }, 1000);
  };

  clearResults = () => {
    this.setState({users:[]});
  }
  displayAlert = (msg, type) => {
    this.setState(
      {
        error: {msg:msg, type:type}
      }
    )

    setTimeout(() => {
      this.setState({
        error:null
      })
    }, 3000);
  }
 

  render() {
    return (
      <div>
        <Header />
        <Search 
          searchUsers={this.searchUsers} 
          clearResults={this.clearResults}
          displayAlert={this.displayAlert} 
          showClearButton={ this.state.users.length > 0 ? true:false}
        />
        
        <Alert error={this.state.error}/>
        <div className="container mt-3">
          <UserList users={this.state.users} spinner={this.state.spinner} />
        </div>
      </div>
    )
  }
}

export default App

