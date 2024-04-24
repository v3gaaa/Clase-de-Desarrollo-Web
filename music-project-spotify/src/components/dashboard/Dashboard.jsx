import React, { useState } from 'react'
import { fetchSpotifyApi } from '../../api/spotifyAPIDemo'
import { map } from 'next.js'


const Dashboard = () => {

  
  const getToken = async () => {
    
  }

  const handleChange = (e) => {
    setSongs([])
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
    const url = `https://api.spotify.com/v1/search`
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
    setSongs(response[`${option}s`].items.map((song) => ({
      name: song.name,
      artist: song.artists[0].name,
      album: song.album.name,
      image: song.album.images[0].url
    })))
  }

  const [form, setForm] = useState({
    search: '',
    artist: '',
  })

  const getDeviceId = async () => {
    const url = 'https://api.spotify.com/v1/me/player/devices'
    const token = `Bearer ${localStorage.getItem('token')}`
    const response = await fetchSpotifyApi(
      url,
      'GET',
      null,
      'application/json',
      token
    )
    console.log(response)
    return response.devices[0].id
  }

  const [songs, setSongs] = useState([]);

  const [option, setOption] = useState('');

  const types = [
    "album", "artist", "playlist", "track", "show", "episode", "audiobook"
  ]

  return (
    <div className='flex justify-center flex-row h-full w-full mt-4'>

      <div className='flex justify-center flex-col w-1/5' id='left'>

      </div>
      
      <div className='flex justify-center flex-col w-3/5' id='middle'>
        <div className='flex justify-around flex-row h-10 pr-3'>
          <input 
          type="text" 
          placeholder="Search"
          name='search'
          value={form.search}
          onChange={handleChange}
          className=' border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          />

          <select name='types' onChange={handleSelectChange} className='border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent '>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>

          <input 
          type="text" 
          placeholder="Artist"
          name='artist'
          value={form.artist}
          onChange={handleChange}
          className='  border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
          />

          <button
          onClick={handleSearch}
          className=' hover:bg-green-500 h-full bg-green-400 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline'
          >
          Search</button>
        </div>

        <div className='flex  items-start flex-col w-200 justify-start overflow-auto mt-3 h-96' id='songs'>
          {songs.map((song) => (
            <div key={song.name} className='flex flex-row justify-start items-center pb-2 w-full text-white hover: opacity-70 hover:bg-gray-100 hover:text-black rounded'>
              <img src={song.image} alt={song.name} className='h-12 w-12 rounded' />
              <div className='flex flex-col justify-start items-start w-200 h-12 text-xs ml-2'>
                <div className='overflow-hidden'>{song.name}</div>
                <div className=''>{song.artist}</div>
                <div className=''>{song.album}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-center flex-col h-full w-1/5' id='right'>

      </div>

    </div>
  )
}

export default Dashboard