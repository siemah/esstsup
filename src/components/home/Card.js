import React from 'react';

import '../../assets/css/card.css';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export default function Card({ className = '', tag=null, imageSource, title, excerpt, link }) {
  return (
    <div className={`card-ui ${className}`}>
      <div className={`card-ui__image-container`}>
        <img src={imageSource} className={`card-ui__image mb0`} alt={title} />
        {
          tag && <span className={`card-ui__tag`}>{tag}</span>
        }
      </div>
      <div className={`card-ui__content mb0`}>
        <h2 className={`card-ui__title mb0-5`}>{title}</h2>
        <p className={`card-ui__description color-grey mb0-5`}>{excerpt}</p>
        <div className={`card-ui__action`}>
        <AniLink cover
          direction="down"
          duration={1.5}
          bg="
            /*url(../assets/images/esst-logo.png) */
            center / cover   /* position / size */
            no-repeat        /* repeat */
            fixed            /* attachment */
            padding-box      /* origin */
            content-box      /* clip */
            var(--purple)            /* color */
          " 
          to={`${link}`} 
          className={`card-ui__link right`}>Voir +</AniLink>
        </div>
      </div>
    </div>
  )
}
