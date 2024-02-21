import Router from './Config/router'
import { store, persistor } from './Store'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import './App.css';

function App() {

  return(
    <>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <Router />
    </PersistGate>
    </Provider>
    </>
  )
}

export default App;
