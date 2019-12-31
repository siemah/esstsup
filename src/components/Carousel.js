import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';


const Carousel = ({ data = [], className = '' }) => (
  <div
    className={`carousel__container ${className}`}
  >
    {
      data.map(({ node: { title, path, featured_media, id: key } }) => (
        <div className={`carousel__slide-item`} key={key}>
          <div className={`carousel__slide-image`} style={{ backgroundImage: `url('${featured_media.source_url}')` }} />
          <div className={`carousel__content`}>
            <h2 className={`carousel__slide-title`}>{title}</h2>
            <AniLink
              cover
              direction="down"
              duration={1.5}
              bg="
                center / cover   /* position / size */
                no-repeat        /* repeat */
                fixed            /* attachment */
                padding-box      /* origin */
                content-box      /* clip */
                var(--purple)            /* color */
              " className={`carousel__slide-link badge badge-success`} to={`${path}`}>Voir +</AniLink>
          </div>
        </div>
      ))
    }
  </div>
);

export default Carousel;