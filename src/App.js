import Router from './Config/router'
import Store from './Store'
import {Provider} from 'react-redux'
import './App.css';

function App() {

  return(
    <>
    <Provider store={Store}>
    <Router />
    </Provider>
    </>
  )
}

export default App;
