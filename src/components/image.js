import React from 'react'

import PropTypes from 'prop-types'

import './image.css'

const Image = (props) => {
  return (
    <div className="image-container">
      <img
        alt={props.imageAlt1}
        src={props.imageSrc1}
        className="image-image"
      />
    </div>
  )
}

Image.defaultProps = {
  imageAlt1: 'image',
  imageSrc1: '/ice-400w.jpg',
}

Image.propTypes = {
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
}

export default Image
