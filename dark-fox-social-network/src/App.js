import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Setting from './components/Setting/Setting'
import Music from './components/Music/Music'
import { BrowserRouter, Route } from 'react-router-dom'

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper' >
        <Navbar />
        <Header />
        <div className="app-wrapper-content">
          <Route exact path='/profile' render={() =>
            <Profile
              state={props.state.profilePage} />} />
          <Route exact path='/dialogs' render={() =>
            <Dialogs
              state={props.state.dialogsPage} />} />
          <Route exact path='/news' render={() => <News />} />
          <Route exact path='/setting' render={() => <Setting />} />
          <Route exact path='/music' render={() => <Music />} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
