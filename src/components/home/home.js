import React from 'react'
import './home.css'
import { Link } from 'react-router-dom' // importing Link from RRD

export default function Home() {
  return (
    <div className='home'>
        <h1>Welcome to </h1><span className='chatscrum'>ChatScrum</span>
        <div className="links">
            <h2><Link to='/sign-up' className="link">Join ChatScrum</Link></h2> {/** <Link> is redirecting to other parts */}
            <h2><Link to='/sign-in' className="link">Sign In</Link></h2>
            <h2><Link to='/scrumboard' className="link">Scrumboard</Link></h2>
        </div>
    </div>
  )
}
