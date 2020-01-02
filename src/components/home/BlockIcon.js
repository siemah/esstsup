import React from 'react';
import { Row, Col } from '../layout/grid';
import CardIcon from './CardIcon';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

export default function BlockIcon({ containerClassName = '', itemClassName='', data = [] , forSmallSize=1, forMediumSize=1, forLargeSize=4}) {
  return (
    <div className={`${containerClassName || ''}`}>
      <Row className={''}>
        {
          data.map(({ icon, title, content, link='/', iconColorClassName='', bgIconClassName=''}, i) => (
            <Col className={`${itemClassName}`} s={12/forSmallSize} m={12/forMediumSize} l={12/forLargeSize} key={`icon-${title}-${i}`}>
              <AniLink to={link}>
                <CardIcon
                  className={`mb1 flex-block flex-center flex-column`}
                  icon={icon}
                  title={title}
                  content={content}
                  parentIconClassName={` flex-block flex-center flex-column rounded ${bgIconClassName} mb1`}
                  iconClassName={`${iconColorClassName}`}
                />
              </AniLink>
            </Col>
          ))
        }
      </Row>
    </div>
  )
}
