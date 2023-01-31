import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css'
import UserRandom from './Components/UserRandom'

function App() {
  const [users, setUsers] = useState()
  const [quantity, setQuantity] = useState(10)

  useEffect(() => {

    const url = `https://randomuser.me/api/?results=${quantity}`

    axios.get(url)
      .then(res => setUsers(res.data.results))
      .catch(err => console.log(err))
  }, [quantity])

  const handleSumit = e => {
    e.preventDefault()
    setQuantity(e.target.userQuantity.value)
  }


  return (
    <div className="App">
      <h1>User Random</h1>

      <form className='form' onSubmit={handleSumit}>
        <label htmlFor="">Quantity</label>
        <input id='userQuantity' type="number" />
        <button id='button'>Submit</button>
      </form>

      <div className='App__img'>
        {
          users?.map(user => (
            <UserRandom
              key={user.login.uuid}
              user={user}
            />
          ))
        }
      </div>
      <div className="footer">
        <div className='hr__code'>
          <a href="https://https://github.com/HeriEspinosa/repo_react_userRandom"><p>Hecha un Vistazo a mi Codigo <span>Aqui</span></p></a>
        </div>
      </div>
    </div>
  )
}

export default App
