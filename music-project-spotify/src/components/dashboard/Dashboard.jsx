import React, { useState } from 'react'
import { fetchSpotifyApi } from '../../api/spotifyAPIDemo'


const Dashboard = () => {

  
  const getToken = async () => {
    
  }

  const handleChange = (e) => {
    
    const newValues = {
      ...form,
      [e.target.name]: e.target.value
    }

    console.log(newValues)
    setForm(newValues)
  }

  const handleSelectChange = (e) => {
    console.log(e.target.value)
    setOption(e.target.value)
  }

  const handleSearch = async () => {

    const params = new URLSearchParams();
    params.append('q', encodeURIComponent(`remaster track:${form.search} artist:${form.artist}`));
    params.append('type', option);
    const queryString = params.toString();
    url = `https://api.spotify.com/v1/search`
    const updatedUrl = `${url}?${queryString}`


    const token = `Bearer ${localStorage.getItem('token')}`


    const response = await fetchSpotifyApi(
      updatedUrl,
      'GET',
      null,
      'application/json',
      token
    );
    console.log(response)
  }

  const [form, setForm] = useState({
    search: '',
    artist: '',
  })

  const [option, setOption] = useState('');

  const types = [
    "album", "artist", "playlist", "track", "show", "episode", "audiobook"
  ]

  return (

    <div>
      <input 
      type="text" 
      placeholder="Search" 
      value={form.search}
      onChange={handleChange}
      />

      <select name='types' onChange={handleSelectChange}>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>

      <input 
      type="text" 
      placeholder="Artist" 
      value={form.artist}
      onChange={handleChange}
      />

      <button
      onClick={handleSearch}
      >
      Search</button>

    </div>
  )
}

export default Dashboard