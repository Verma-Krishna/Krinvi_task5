import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"

import Cards from './Component/Cards'
import Invoice from './Component/Invoice'
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Cards/>}/>
      <Route path='/invoice' element={<Invoice/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}
