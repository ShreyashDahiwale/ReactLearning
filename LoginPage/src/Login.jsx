import './Login.css'

function Login() {
    return(
        <>
        <div classname="background">
          <div classname="shape" />
          <div classname="shape" />
        </div>
        <form>
          <h3>Login Here</h3>
          <label htmlfor="username">Username</label>
          <input type="text" placeholder="Email or Phone" id="username" />
          <label htmlfor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />
          <button type="button" id="btn">
            Log In
          </button>
          <div classname="social">
            <div classname="go">
              <i classname="fab fab-google" />
              Google
            </div>
            <div classname="fb">
              <i classname="fab fab-facebook" />
              Facebook
            </div>
          </div>
        </form>
      </>
    )
}

export default Login