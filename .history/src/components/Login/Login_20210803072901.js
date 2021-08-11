import React from 'react';
//COMPONENTS
//REDUX
//FIREBASE
//MATERIAL UI
//CSS
import './Login.css';
//FILES

const Login = (props) => {
  return (
    <section className="login">
      <img
        src="http://pngimg.com/uploads/linkedIn/linkedIn_PNG30.png"
        alt="Logo" />
      <form>
        <input
          placeholder="Full name (required if reqisttering)"
          type="text" />
        <input
          placeholder="Email"
          type="text" />
      </form>
    </section>
  )
}

export default Login
