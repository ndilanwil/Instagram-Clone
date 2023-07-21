import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import logo from "../../images/logo-insta.png"
import { db } from "../../functions/firebase"
import { collection, addDoc } from "firebase/firestore";
import { getAllUsers } from "../../functions/getAllUsers"
import Alert from '@mui/material/Alert';

export const SignUp = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [alert, setAlert] = useState(false)
    const onSubmit = async (e) => {
        e.preventDefault()
        let ale
        for(let i=0;i<users.length;i++){
            if (users[i].email === email || users[i].username === username){
                ale = true
            }
        }
        if(ale===true){
            setAlert(true)
        }
        else{
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
    }
    useEffect(() => {
        localStorage.setItem("user", null);
        async function getData(){
            const result = await getAllUsers();
            setUsers(result)
        }
        getData()
    }, []);
    return(
        <div className="login">
            <div className="login-container">
            {alert &&
                <Alert variant="filled" severity="error" onClose={() => {setAlert(false)}}>
                    Sorry username or email is already used
                </Alert>
            }
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