import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import logo from "../../images/logo-insta.png"
import { db } from "../../functions/firebase"
import { collection, addDoc } from "firebase/firestore";

export const SignUp = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db,"users"), {
                avatar: "",
                username: username,
                email: email,
                password: password,
                description: "",
                followers: 0,
                follows: 0,
            })
            console.log("Document written with ID: ", docRef.id)
        } catch(e){
            console.log("noob : ", e)
        }

        navigate("/login")
    }
    
    return(
        <div className="login">
            <div className="login-container">
                <img src={logo} alt="instagram logo" />
                <form>
                    <input type='text' name='username' placeholder='Enter a username' onChange={(e)=> setUsername(e.target.value)}/>
                    <input type='email' name='email' placeholder='Enter your email' onChange={(e)=> setEmail(e.target.value)} />
                    <input type='password' name='password' placeholder='Password' onChange={(e)=> setPassword(e.target.value)} />
                    <button onClick={onSubmit} type='submit'>Sign Up</button>
                </form>
                <div className='No-Account'>
                    Already have an account? <a href='/login'>Log In</a>
                </div>
            </div>
        </div>
    )
}