import Navbar from '../NavigationBar/NavigationBar';
import SearchItem from '../SearchItem/SearchItem';
import useFetch from '../../../hooks/useFetch';
import React from 'react';
import './AllHotels.css'

const AllHotels = () => {
  const { data, loading, error, reFetch } = useFetch(`/hotels`)

  const handleClick = () => {
    reFetch()
  }


  return (
    <><div>
      <Navbar />
    </div><div className="ListResultAllHotels">
        {loading ? "Se incarca" : <>
          {data.map(item => (
            <SearchItem item={item} key={item._id} />
          ))}
        </>}
      </div>
      </>
  )
}


export default AllHotels;
