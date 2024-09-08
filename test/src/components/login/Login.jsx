import React from 'react'
import "./Login.css"
const Login = () => {
   return (
     <>
    <div class="container">
    <form>
     <div class="us">
        <label for="username" ></label> <input type="text"name="username" placeholder="Username"/>
     </div>
     <div class="ps">
        <label for="passwaord"></label> <input type="password"name="passwaord" placeholder="Password"/>
     </div>
     <br/><br/>
     <br/><br/>
     <div class="last">
        <input type="submit" value="LOGIN"></input>
     </div>
     <div class="lastinfo">
        <p>Not register? <span>Create an account</span></p>
     </div>
    </form>
 </div>
</>
  )
}

export default Login
