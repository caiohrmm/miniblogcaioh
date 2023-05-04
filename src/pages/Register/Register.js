// CSS
import styles from './Register.module.css'

// Hooks
import { useState, useEffect } from 'react'

const Register = () => {

    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassWord] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit =  (e) => {
        e.preventDefault()
        setError("")

        // Criando meu usuário
        const user = {
            displayName,
            email,
            password,
        }

        // Primeira validação, ver se a senha é igual a senha de confirmação
        if (password !== confirmPassword) {
            setError("As senhas não são iguais!")
            return
        }
        

        



    }


  return (
    <div>
        <h1 className="text-center">
            Cadastre-se
        </h1>
        <form className="max-h-10 mx-auto my-0" onSubmit={handleSubmit}>
            <label className="flex flex-col mb-1 ">
                <span className="text-left font-bold mb-1.5">Nome: </span>
                <input type="text" required placeholder='Insira seu nome...' name='displayName' value={displayName} 
                onChange={(e) => setDisplayName(e.target.value)}/>
            </label>
            <label className="flex flex-col mb-1">
                <span>E-mail: </span>
                <input type="email" required placeholder='Insira seu e-mail...' name='email' value={email} 
                onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label className="flex flex-col mb-1">
                <span>Senha: </span>
                <input type="password" required placeholder='Insira sua senha...' name='password' value={password} 
                onChange={(e) => setPassWord(e.target.value)} />
            </label>
            <label className="flex flex-col mb-1">
                <span>Confirmar senha: </span>
                <input type="text" required placeholder='Confirme sua senha...' name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(confirmPassword)} />
            </label>
            <button className='btn'>Cadastrar</button>
        </form>
    </div>
  )
}

export default Register