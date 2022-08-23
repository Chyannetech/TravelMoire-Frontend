import React from 'react'
import "../style/home.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from "react"
import { useNavigate } from 'react-router';

function Home (){
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate()

return (
<div className='homePage'>
<div className="titleHome">travel | moire</div>
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

{/* User Post */}
    <div className='userPost'>
    <div className='userBox'>
    <div className='userPic'></div>
    <div className='name'>Daisy</div>
    </div>

   
    <div className='postBox'>
    <div className='city'>Atlanta, GA</div>
    <div className='tb'>Chika, Steve, Tom</div>
    </div>
    
    <div className='postBox2'>
    <div className='view'>View Media</div>
    <div className='location'>Piedmont Park</div><div className='reviews'>63.6k posts</div>
    </div>
    </div>
    <div className='viewPost'>View Post</div>
{/* End of User Post */}


{/* User Post */}
<div className='userPost'>
    <div className='userBox'>
    <div className='userPic'></div>
    <div className='name'>Chika</div>
    </div>

    <div className='postBox'>
    <div className='city'>Atlanta, GA</div>
    <div className='tb'>Chika, Steve, Tom</div>
    </div>
    
    <div className='postBox2'>
    <div className='view'>View Media</div>
    <div className='location'>Grant Park</div><div className='reviews'>Fewer than 100 posts</div>
    </div>
    </div>
    <div className='viewPost'>View Post</div>
{/* End of User Post */}

{/* User Post */}
<div className='userPost'>
    <div className='userBox'>
    <div className='userPic'></div>
    <div className='name'>Kenny</div>
    </div>

    <div className='postBox'>
    <div className='city'>Atlanta, GA</div>
    <div className='tb'>Chika, Steve, Tom</div>
    </div>
    
    <div className='postBox2'>
    <div className='view'>View Media</div>
    <div className='location'>Win Park</div><div className='reviews'>45.9k posts</div>
    </div>
    </div>
    <div className='viewPost'>View Post</div>
{/* End of User Post */}

{/* User Post */}
<div className='userPost'>
    <div className='userBox'>
    <div className='userPic'></div>
    <div className='name'>Steve</div>
    </div>

    <div className='postBox'>
    <div className='city'>Atlanta, GA</div>
    <div className='tb'>Chika, Steve, Tom</div>
    </div>
    
    <div className='postBox2'>
    <div className='view'>View Media</div>
    <div className='location'>Freedom Park</div><div className='reviews'>5000 + posts</div>
    </div>
    </div>
    <div className='viewPost'>View Post </div>
{/* End of User Post */}
<div className="createNew" onClick={()=>navigate('/create')}>Create New Post</div>
</div>
)}

export default Home