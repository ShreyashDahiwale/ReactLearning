import './Login.css'
import LoggedInPage from './LoggedInPage.jsx';

const myFun = function user() {
  console.log('Clicked');

  return (
    <>
      <LoggedInPage />
    </>
  )
}

function Login() {
  return (
    <>
      <div className="background">
        <div className="shape" />
        <div className="shape" />
      </div>
      <form>
        <h3>Login Here</h3>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <button type="button" id="btn" onClick={myFun}>
          Log In
        </button>
        <div className="social">
          <div className="go">
            <i className="fab fab-google" />
            Google
          </div>
          <div className="fb">
            <i className="fab fab-facebook" />
            Facebook
          </div>
        </div>
      </form>
    </>
  )
}

export default Login