import logo from "../../images/logo-insta.png"

export const SignUp = () => {
    return(
        <div class="container">
            <div class="login-container">
                <img src={logo} alt="instagram logo" />
                <form>
                    <input type='text' name='fullname' placeholder='Enter your full name' />
                    <input type='text' name='username' placeholder='Entera username' />
                    <input type='email' name='email' placeholder='Enter your email' />
                    <input type='password' name='password' placeholder='Password' />
                    <button type='submit'>Sign Up</button>
                </form>
                <div className='No-Account'>
                    Already have an account? <a href='/login'>Log In</a>
                </div>
            </div>
        </div>
    )
}