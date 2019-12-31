import React from 'react';
import { Row, Col } from './layout/grid';
import { FormField, Button } from './layout/form';

import '../assets/css/register-form.css';

export default function RegisterForm({ className=''}) {
  // const [formstate, setFormstate] = useState({});
  return (
    <form className={`register-form__block ${className}`} action="#" netlify-honeypot="bot-field" action='/success-de-preinscription/' name="preinscription" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="preinscription" />
      <Row className="opacity-0 js-slide-from-down" data-delay={0.1}>
        <Col s='12'>
          <FormField name='nom-complet' placeholder='Nom Complet' />
        </Col>
      </Row>
      <Row className="opacity-0 js-slide-from-down" data-delay={0.1}>
        <Col s='12'>
          <FormField name='Email' placeholder='Email' />
        </Col>
      </Row>
      <Row className="opacity-0 js-slide-from-down" data-delay={0.1}>
        <Col s='12'>
          <FormField name='sujet' placeholder='Sujet' />
        </Col>
      </Row>
      <Row className="opacity-0 js-slide-from-down" data-delay={0.1}>
        <Col s='12'>
          <textarea rows={4} className={`block`} placeholder={`Message`}></textarea>
        </Col>
      </Row>
      <Row className="opacity-0 js-slide-from-down" data-delay={0.1}>
        <Col s='12'>
          <Button className="right button__material form__button_submit capitalize" type='submit' name='envoyer'>Envoyer</Button>
        </Col>
      </Row>
    </form>
  )
}
