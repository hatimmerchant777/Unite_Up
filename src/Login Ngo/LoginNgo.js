import "./LoginNgo.css";

function LoginNgo() {
  return (
    <>
      <div className="fullbody1">
        <div class="login-container">
          <h2>NGO Login</h2>
          <form >
            <input type="text" name="username" placeholder="Username" required />
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <br />
            <input type="submit" value="Login" />
          </form>
        </div>
      </div>
    </>
  );
}
export default LoginNgo;
