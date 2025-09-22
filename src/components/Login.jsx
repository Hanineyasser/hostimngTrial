import React, { useRef } from 'react'

const Login = () => {
    const userref=useRef(null)
    const passref=useRef(null)
    const handlelogin=(e)=>{
        e.preventDefault()
        console.log(userref.current.value);
        console.log(passref.current.value);
    }
  return (
    <>
    <form action="" onSubmit={handlelogin}>
        <input type="text" placeholder='username' ref={userref} />
        <input type="password" placeholder='password' ref={passref} />
        <button>Login</button>
    </form>
    </>
  )
}

export default Login