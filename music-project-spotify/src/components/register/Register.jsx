import React from 'react'
import logo from '../../assets/logo.png'

function Register() {
  return (
    <div className="flex h-screen bg-zinc-900">

      <div className="w-1/2 items-center justify-center flex flex-row h-full">
        <img src={logo} alt="Background" className="h-1/3 w-auto"/>
      </div>

      <div className="w-1/2 p-8 h-full flex justify-center items-center">
        <form className="shadow-md px-8 pt-6 pb-8 mb-4 bg-zinc-800 rounded-xl">
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
          </div>

          
          <div className="flex items-center justify-center">
            <button className=" hover:bg-white text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-green-500 hover:text-green-500" type="button">
              Register
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Register