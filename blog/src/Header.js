import {Link} from "react-router-dom";
import { useContext, useEffect, useState} from "react";
import { UserContext } from "./UserContext";


export default function Header() {
 const{setUserInfo,userInfo} = useContext(UserContext);

  useEffect(() => {
    fetch('https://codapi.onrender.com/profile', {
    
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('https://codapi.onrender.com/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">

      <h3 class="animate-charcter"> MyBlog</h3></Link>
      <nav>
        {username && (
          <>
            <Link to="/create"> <h3 class="animate-charcterc">Create new post</h3></Link>
            <a onClick={logout}> <h3 class="animate-charcter">Logout</h3> </a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login"> <h3 class="animate-charcter">Login</h3></Link>
            <Link to="/register"> <h3 class="animate-charcter">Register</h3></Link>
          </>
        )}
      </nav>
    </header>
  );
}