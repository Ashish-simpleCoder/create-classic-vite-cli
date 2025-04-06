import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home.page'
import Header from './components/layout/header'

export default function App() {
   return (
      <BrowserRouter>
         <Header />

         <Routes>
            <Route path='/' element={<HomePage />}></Route>
         </Routes>
      </BrowserRouter>
   )
}
