import Footer from '../Footer/Footer';
import './Register.css';


const Register = ({onRouteChange}) =>{
    return(
        <div>
            <form action=".">
            <div className="container">
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr/>

                <label htmlFor="email"><b>Email</b></label>
                <input type="text" placeholder="Enter Email" name="email" id="email" required/>

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

                <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
                <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
                <hr/>
                <p>By creating an account you agree to our <a href="https://www.google.com/">Terms & Privacy</a>.</p>

                <button type="submit" className="registerbtn">Register</button>
            </div>
            <div className="container signin">
                <p>Already have an account? <button className="f6  br-pill ba ph4 pv2 mb2 dib black pointer" onClick={()=>onRouteChange('/login')}>Sign in</button></p>
            </div>
            </form>
            <Footer/>

        </div>
    );
}

export default Register;