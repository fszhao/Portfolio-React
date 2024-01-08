import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card1.css'

const GalleryCard1 = (props) => {
  return (
    <div className={`gallery-card1-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card1-image"
      />
      <h2 className="gallery-card1-text">{props.new_prop}</h2>
      <span className="gallery-card1-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard1.defaultProps = {
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
  image_alt: 'image',
  subtitle: 'Lorem ipsum dolor sit amet',
  new_prop: 'Project Title',
}

GalleryCard1.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  subtitle: PropTypes.string,
  new_prop: PropTypes.string,
}

export default GalleryCard1
