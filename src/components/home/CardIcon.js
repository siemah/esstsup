import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CardIcon({ icon, title, content, className='', parentIconClassName='', iconClassName='' }) {
  return (
    <div className={`card ${className}`}>
      <div className={`card__icon-container js-animate ${parentIconClassName}`}>
        <FontAwesomeIcon icon={icon} className={`card__icon ${iconClassName}`} />
      </div>
      <p className={`card__content js-animate mb0`}>{content}</p>
      <h3 className={`card__title js-animate mb0`}>{title}</h3>
    </div>
  )
}
