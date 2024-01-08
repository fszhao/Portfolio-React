import React from 'react'

import PropTypes from 'prop-types'

import SolidButton from './solid-button'
import './card.css'

const Card = (props) => {
  return (
    <div className="card-card">
      <div className="card-icon">
        <svg viewBox="0 0 877.7142857142857 1024" className="card-icon1">
          <path d="M438.857 438.857c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 877.714c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 658.286c172 0 344.571-30.857 438.857-97.143v97.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-97.143c94.286 66.286 266.857 97.143 438.857 97.143zM438.857 0c242.286 0 438.857 65.714 438.857 146.286v73.143c0 80.571-196.571 146.286-438.857 146.286s-438.857-65.714-438.857-146.286v-73.143c0-80.571 196.571-146.286 438.857-146.286z"></path>
        </svg>
      </div>
      <div className="card-card-content">
        <span className="card-text">
          <span>Data Engineering</span>
        </span>
        <span className="card-text2">
          <span>
            Oye Bossmang hello hello hello hello hello hello hello hello hello
            hello
          </span>
        </span>
      </div>
      <SolidButton
        button="View Code"
        rootClassName="solid-button-root-class-name"
      ></SolidButton>
    </div>
  )
}

Card.defaultProps = {
  image_alt: 'image',
}

Card.propTypes = {
  image_alt: PropTypes.string,
}

export default Card
