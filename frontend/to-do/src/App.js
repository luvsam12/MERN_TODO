import './App.css';
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './Components/AppNavbar'
import ShoppingList from './Components/shoppingList'
import { Provider } from 'react-redux'
import store from './store'
import ItemModal from './Components/itemModel'
import { Container } from 'reactstrap'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal></ItemModal>
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    )
  }
}

export default App;
