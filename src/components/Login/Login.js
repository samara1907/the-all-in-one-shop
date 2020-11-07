import Footer from '../Footer/Footer';
import './Login.css';
import {
    Link
  } from "react-router-dom";


const Login = () =>{
    return(
            <div>
            <div className="container">
            <form action="/action_page.php">
            <h2 style={{textAlign:'center'}}>Login</h2>
                <div className="row">
                <div className="vl">
                    <span className="vl-innertext">or</span>
                </div>

                <div className="col">
                    <a href="https://www.facebook.com/" className="fb btn">
                    <i className="fa fa-facebook fa-fw"></i> Login with Facebook
                    </a>
                    <a href="https://twitter.com/home?lang=ar" className="twitter btn">
                    <i className="fa fa-twitter fa-fw"></i> Login with Twitter
                    </a>
                    <a href="https://myaccount.google.com/" className="google btn"><i className="fa fa-google fa-fw">
                    </i> Login with Google+
                    </a>
                </div>

                <div className="col">
                    <div className="hide-md-lg">
                    <p>Or sign in manually:</p>
                    </div>

                    <input type="text" name="username" placeholder="Username" required/>
                    <input type="password" name="password" placeholder="Password" required/>
                    <input type="submit" value="Login"/>
                </div>
                
                </div>
            </form>
            </div>

            <div className="bottom-container">
            <div className="row">
                <div className="col">
                <Link to={"register"} style={{color:'white'}} className="btn">Sign up</Link>
                </div>
                <div className="col">
                <a href="#" style={{color:'white'}} className="btn">Forgot password?</a>
                </div>
            </div>
            </div>
            <Footer/>
            </div>
    );
}

export default Login;