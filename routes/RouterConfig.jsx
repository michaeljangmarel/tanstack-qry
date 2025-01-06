import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Detail from '../src/web/Detail'
import AddProduct from '../src/web/AddProduct'

const RouterConfig = () => {
  return (
    <>
    <Routes> 
      <Route path='/detail/:id' element={<Detail/>}/>
      <Route path='/add'  element={<AddProduct/>} />
    </Routes>
    </>
  )
}

export default RouterConfig