import React from 'react';
import { Row, Col } from '../layout/grid';
import CardIcon from './CardIcon';

export default function BlockIcon({ containerClassName = '', data = [] , forSmallSize=1}) {
  return (
    <div className={`${containerClassName || ''}`}>
      <Row className={''}>
        {
          data.map(({ icon, title, content, iconColorClassName='', bgIconClassName=''}, i) => (
            <Col s={12/forSmallSize} m={12/data.length} key={`icon-${title}-${i}`}>
              <CardIcon
                icon={icon}
                title={title}
                content={content}
                parentIconClassName={`rounded ${bgIconClassName} mb1`}
                iconClassName={`${iconColorClassName}`}
              />
            </Col>
          ))
        }
      </Row>
    </div>
  )
}
