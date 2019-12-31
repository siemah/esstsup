import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function CardIcon({ icon, title, content, parentIconClassName='', iconClassName='' }) {
  return (
    <div className={`card `}>
      <div className={`card__icon-container js-animate ${parentIconClassName}`}>
        <FontAwesomeIcon icon={icon} className={`card__icon ${iconClassName}`} />
      </div>
      <h3 className={`card__title js-animate mb1`}>{title}</h3>
      <p className={`card__content js-animate mb1`}>{content}</p>
    </div>
  )
}
