import './Login.css'
import logo from "../../images/logo-insta.png"
import { getAllUsers } from "../../functions/getAllUsers"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    useEffect(() => {
        async function getData(){
            const result = await getAllUsers();
            setUsers(result)
        }
        getData()
    }, []);
    const onSubmit = async (e) => {
        e.preventDefault()
        users.map(user => {
            console.log(user)
            if (user.email === email && user.password === password){
                navigate("/")
            }
            else {
                navigate("/signup")
            }
        })
        
    }

    return(
        <div class="login">
            <div class="login-container">
                <img src={logo} alt="instagram logo" />
                <form>
                    <input type='email' name='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={onSubmit} type='submit'>Log In</button>
                </form>
                <div className='forgot-password'>
                    <a href='/'>Forgot Password?</a>
                </div>
                <div className='No-Account'>
                    Don't have an account? <a href='/signup'>Sign Up</a>
                </div>
            </div>
        </div>
    )
}