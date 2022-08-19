import React from 'react'
import "../style/home.css";

const Home = () =>  {
return (
<div className='homePage'>
    <div className='searchContainer'>
    <input className='searchBox' placeholder='Atlanta, GA'></input>
    <div className='searchIcon'></div>
    </div>
    <div className='trending'>
    <div className='travelBuds'></div>
    <div className='popular'>Popular</div>
    </div>
    <div className='categories'>
    <div className='art'>Art</div>
    <div className='np'>National Parks</div>
    <div className='lakes'>Lakes</div>
    <div className='rest'>Restaurants</div>
    <div className='cafe'>Cafes</div>
    </div>

</div>
)}

export default Home