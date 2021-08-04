import store from './redux/redux-store';
import reportWebVitals from './reportWebVitals'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from './StoreContex'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  )
}

rerenderEntireTree()

store.subscribe(() => {
  rerenderEntireTree()
})

reportWebVitals();