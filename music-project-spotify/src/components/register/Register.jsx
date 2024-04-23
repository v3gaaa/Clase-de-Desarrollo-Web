import { useState } from 'react';
import { fetchSpotifyApi } from '../../api/spotifyAPIDemo';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();


  const handleOnChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    const newValues = {
      ...form,
      [e.target.name]: e.target.value,
    };
    console.log(newValues);
    setForm(newValues);
  };


  const handleLogin = async () => {

    const client_id = 'your_client_id';
    const client_secret = 'yout_client_secret';
    const url = 'https://accounts.spotify.com/api/token';
    const body = 'grant_type=client_credentials';
    const token = 'Basic ' + btoa(client_id + ':' + client_secret);

    const response = await fetchSpotifyApi(
      url,
      'POST',
      body,
      'application/x-www-form-urlencoded',
      token
    );

    navigate('/dashboard');
    console.log(response);
    
  };

  return (
    <div className="bg-gradient-to-t from-[#030303] to-[#282828] h-dvh w-screen flex items-center justify-center">
      <div className="flex justify-center items-center flex-col h-[350px] w-[250px] bg-[#121212] rounded-sm space-y-4">
        <div className="text-[14px] text-white">COMPONENTE REGISTER PERO DEBE SER LOGIN in Music</div>

        <div className="flex flex-col text-white text-[10px] justify-center items-center ">
          <div className="flex  flex-col justify-center  space-y-1">
            <p className="text-left text-[8px]">Email or username</p>
            <input
              className="rounded-[2px] h-5 text-white bg-[#121212] border-[#727272] border-solid border-[1px] hover:ring-1 focus:ring-1  ring-white"
              placeholder="email"
              type="text"
              name="email"
              value={form.email}
              onChange={handleOnChange}
            />
            <p className="text-left text-[8px]">Password</p>
            <input
              className="rounded-[2px] h-5 text-white bg-[#121212] border-[#727272] border-solid border-[1px] hover:ring-1 focus:ring-1  ring-white"
              placeholder="Password"
              type="password"
              name="password"
              value={form.password}
              onChange={handleOnChange}
            />
          </div>
        </div>

        <div>
          <button
            onClick={handleLogin}
            className="bg-[#1BD760] w-[100px] rounded-[5px] text-[8px] p-1 font-bold "
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;