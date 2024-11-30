import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Users from './Users'
import CreatUser from './CreatUser'
import Update from './Update'
const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users/>}></Route>
        <Route path='/create' element={<CreatUser/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
      </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
