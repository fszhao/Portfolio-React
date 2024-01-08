import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card2.css'

const GalleryCard2 = (props) => {
  return (
    <div className={`gallery-card2-gallery-card ${props.rootClassName} `}>
      <div className="gallery-card2-container">
        <div className="gallery-card2-container1">
          <h2 className="gallery-card2-text">{props.new_prop}</h2>
          <span className="gallery-card2-text1">{props.description}</span>
          <span className="gallery-card2-text2">SHOW MORE</span>
        </div>
      </div>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card2-image"
      />
    </div>
  )
}

GalleryCard2.defaultProps = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&ixlib=rb-1.2.1&h=1000',
  new_prop: 'Project Title',
  image_alt: 'image',
}

GalleryCard2.propTypes = {
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  new_prop: PropTypes.string,
  image_alt: PropTypes.string,
}

export default GalleryCard2
