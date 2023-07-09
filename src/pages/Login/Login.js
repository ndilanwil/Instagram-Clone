import './Login.css'
import logo from "../../images/logo-insta.png"

export const Login = () => {
    return(
        <div class="container">
            <div class="login-container">
                <img src={logo} alt="instagram logo" />
                <form>
                    <input type='email' name='email' placeholder='Enter your email' />
                    <input type='password' name='password' placeholder='Password' />
                    <button type='submit'>Log In</button>
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