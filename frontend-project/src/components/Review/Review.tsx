import React from 'react'
import './Review.scss'

const Review = () => {
  return (
    <div className='card' id='card'>
      <div className='review-card' id='review-card'>
      <div className='user-review' id='user-review'>
      <img className='user-img' id='user-img' src="https://st.depositphotos.com/1770836/1372/i/450/depositphotos_13720689-stock-photo-young-businesswoman.jpg" alt="image representing package 'Budget'" />
      <p className='user-name' id='user-name'>Jane</p>
      <img className='review-stars' id='review-stars' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/5_stars.svg/1024px-5_stars.svg.png" alt="" />
      <p id='review' className='review'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget turpis auctor, ullamcorper arcu eget, vehicula quam. Sed sit amet lacinia ex, vel viverra justo.”</p>
      </div>
    </div>  
    </div>
    
  )
}

export default Review