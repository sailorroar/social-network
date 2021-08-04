import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import News from './components/News/News'
import Setting from './components/Setting/Setting'
import Music from './components/Music/Music'
import { Route } from 'react-router-dom'

const App = () => {

  return (
    <div className='app-wrapper' >
      <Navbar />
      <Header />
      <div className="app-wrapper-content">
        <Route exact path='/profile' render={() =>
          <Profile />} />
        <Route exact path='/dialogs' render={() =>
          <DialogsContainer />} />
        <Route exact path='/news' render={() => <News />} />
        <Route exact path='/setting' render={() => <Setting />} />
        <Route exact path='/music' render={() => <Music />} />
      </div>
    </div>
  )
}

export default App;
