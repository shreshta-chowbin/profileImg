import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
        <div className='pageNotFoundDiv'>
        <Link to='/dashboard' style={{fontSize:'1.5vi'}}>HOME</Link>
    <div className='pageNotFoundSpanDiv'>
        <div>
      <span>Error:404</span>  <span style={{
        // fontSize:"4rem",
        fontSize:"8vi",
        }}>Page Not Found</span>
        </div>
    </div>
        </div>
  )
}

export default PageNotFound
