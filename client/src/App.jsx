import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './styles/Header/header.css'
import './styles/Footer/footer.css'
function App() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
