import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './pages/Login'
// import Dashboard from './pages/Dashboard'
import Dashboard from "./pages/Dashboard"
import Transactions from './pages/Transactions'
import Users from './pages/Users'
import Settings from './pages/Settings'
import Schedules from './pages/Schedules'
import PageNotFound from './pages/PageNotFound'
import BasicForm from "./components/BasicForm"
import ContactForm from './components/ContactForm'
import ProfileForm from './components/ProfileForm'

function App() {

  return (
    <>  
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login/>}/>
        <Route index element={<Dashboard/>}/>
        <Route path="transactions" element={<Transactions/>}/>
        <Route path="users" element={<Users/>}/>
        <Route path="settings" element={<Settings/>}/>
        <Route path="schedules" element={<Schedules/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="addProfile" element={<ProfileForm/>}>
            <Route index path="basicForm" element={<BasicForm/>}></Route>
          <Route path="contactForm" element={<ContactForm/>}></Route> 
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
