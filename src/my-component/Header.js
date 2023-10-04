import React from 'react'
import './header.css';
export default function Header() {
  const hamburger_header=()=>{
      document.getElementById("navul").classList.toggle("cmpheigh")
  }
  return (
    
    <header>
    <div className="header-container">
        <div className="header-heading">
            <h2>Living the simple life</h2>
            <p className="subtitle">A Blog Exploring minimalisn in Life</p>
        </div>
        <div id="hamburger" onClick={hamburger_header}><i className="fa-solid fa-2x fa-bars"></i></div>
        <nav>
            <ul id="navul">
                <li className="nav-list-items"><a href="/about-me.html" >HOME</a></li>
                <li className="nav-list-items"><a href="/about-me.html">ABOUT ME</a></li>
                <li className="nav-list-items"><a href="/recent-post.html">RECENT POSTS</a></li>
            </ul>
        </nav>
    </div>

    </header>
    
  )
}
