// CSS
import styles from './Navbar.module.css'

// React Router
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex shadow-sm shadow-black justify-between items-center py-5 px-8'>
      <Link to={ "/" }>
        <h1 className='text-3xl'>Mini<span className='text-red-400 font-semibold'>Blog</span></h1>
      </Link>

      <ul className='flex'>
        <li className='mr-4 rounded'>
          <NavLink to={"/"} className='py-2 px-3 rounded'>Home</NavLink>
        </li>
        <li className='mr-8 rounded'>
          <NavLink to={"/about"} className='py-2 px-3 rounded'>Sobre</NavLink>
        </li>
        <li className='mr-4 rounded'>
          <NavLink to={"/login"} className='py-2 px-3 rounded'>Login</NavLink>
        </li>
        <li className='rounded'>
          <NavLink to={"/register"} className='py-2 px-3 rounded'>Cadastrar</NavLink>
        </li>
      </ul>


    </nav>
  )

}


export default Navbar