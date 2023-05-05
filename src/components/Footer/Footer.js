// CSS
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className="flex items-center justify-center border-t-2 border-slate-800 h-40 flex-col bg-gray-300 bg-gradient-to-r from-gray-300 to-gray-500">
      <h3 className='border-b-2 border-gray-600 py-2 px-4 text-2xl'>O foco é você !</h3>
      <p className='py-2 px-4 border-b-2 border-slate-800'>Desenvolvido por Caio Henrique &copy; Mini<span className='text-red-400 font-semibold'>Blog</span></p>
    </footer>
  )
}

export default Footer