import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authServices from './appWrite/auth.service.js'
import {Login, Logout} from './store/auth.slice.js'
import {Header, Footer} from './components/index.js'
import './App.css'

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authServices.getCurrentUser()
    .then(
      (userData) => {
        if (userData) {
          dispatch(Login(userData));
        } else {
          dispatch(Logout());
        }

      })
      .finally(() => {
        setLoading(false);
      })
  }, [])

  return  !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outle />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;

  return (
    <>
      <h1>Hi There....!!!</h1>
    </>
  )
}

export default App
