import React, { useState, } from 'react';
import { Row, Col } from './layout/grid';
import { FormField, Button } from './layout/form';

import '../assets/css/register-form.css';

export default function RegisterForm({ className=''}) {
  return (
    <form className={`register-form__block ${className}`} netlify-honeypot="bot-field" action='/success-form/' name="formulaire-de-contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="formulaire-de-contact" />
      <Row className="mb0 js-slide-from-down" data-delay={0.1}>
        <Col s='12'>
          <FormField name='nom-complet' placeholder='Nom Complet' />
        </Col>
      </Row>
      <Row className="mb0 js-slide-from-down" data-delay={0.1}>
        <Col s='12'>
          <FormField name='Email' placeholder='Email' />
        </Col>
      </Row>
      <Row className="mb0 js-slide-from-down" data-delay={0.1}>
        <Col s='12'>
          <FormField name='sujet' placeholder='Sujet' />
        </Col>
      </Row>
      <Row className="js-slide-from-down" data-delay={0.1}>
        <Col s='12'>
          <textarea rows={4} className={`block`} placeholder={`Message`}></textarea>
        </Col>
      </Row>
      <Row className="mb0 js-slide-from-down" data-delay={0.1}>
        <Col s='12'>
          <Button className="right button__material form__button_submit capitalize" style={{borderRadius: 0}} type='submit' name='envoyer'>ENVOYER</Button>
        </Col>
      </Row>
    </form>
  )
}
