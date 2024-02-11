import axios from 'axios'
import {useState} from "react";

export default function RegisterForm() {
  const [input, setInput] = useState({
    username : '', 
    password : '',
    confirmPassword : '',
    email : ''
  })

  const hdlChange = e => {
    setInput( prv => ( { ...prv, [e.target.name] : e.target.value } ) )
  }

  const hdlSubmit = async e => {
    try {
      e.preventDefault()
      // validation
      if(input.password !== input.confirmPassword) {
        return alert('Please check confirm password')
      }
      const rs = await axios.post('http://localhost:8889/auth/register', input)
      console.log(rs)
      if(rs.status === 200) {
        alert('Register Successful')
      }
    }catch(err) {
      console.log( err.message)
    }

  }

  return (
  <div className="p-5 border w-4/6 min-w-[500px] mx-auto rounded mt-5">
    <div className="text-3xl mb-5">Register Form</div>
    <form className="flex flex-col gap-2" onSubmit={hdlSubmit}>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Username</span>
        </div>
        <input
          type="text"
          className="input input-bordered"
          name="username"
          value={input.username}
          onChange={hdlChange}
        />
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">E-mail</span>
        </div>
        <input
          type="email"
          className="input input-bordered"
          name="email"
          value={input.email}
          onChange={hdlChange}
        />
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Password</span>
        </div>
        <input
          type="password"
          className="input input-bordered"
          name="password"
          value={input.password}
          onChange={hdlChange}
        />
      </label>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Confirm Password</span>
        </div>
        <input
          type="password"
          className="input input-bordered"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={hdlChange}
        />
      </label>
      <div className="flex gap-5 mt-7">
        <button type="submit" className="btn btn-outline btn-info">Submit</button>
        <button type="reset" className="btn btn-outline btn-warning">Reset</button>
      </div>
    </form>
  </div>
);
  }
