import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import '../assets/css/preinscription.css';

import { Row, Container, Col } from "../components/layout/grid";
import { FormField, Button } from "../components/layout/form";
// import Link from "gatsby-plugin-transition-link/Link";

const PreinscriptionPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Preinscription" />
      <div className={`fake-block`} />
      <div className={`preinscription-block`}>
        <Container className="">
          <form className={`preinscription__form`} action="#" netlify-honeypot="bot-field" action='/success-de-preinscription/' name="preinscription" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="preinscription" />
            <Row className="">
              <Col s='12'>
                <h2 className='center'>Préinscription</h2>
              </Col>
            </Row>
            <Row className="">
              <Col s='12' m='6'>
                <FormField name='Nom' placeholder='NOM' label='NOM' />
              </Col>
              <Col s='12' m='6'>
                <FormField name='Prenom' placeholder='Prénom' label='PRENOM*' />
              </Col>
            </Row>
            <Row className="">
              <Col s='12'>
                <FormField name='Ville' placeholder='' label='VILLE*' />
              </Col>
            </Row>
            <Row className="">
              <Col s='12'>
                <FormField name='Adresse-email' placeholder='' label='ADRESSE E-MAIL*' />
              </Col>
            </Row>
            <Row className="">
              <Col s='12'>
                <FormField name='Numero-de-telephone' placeholder='' label='NUMÉRO DE TÉLÉPHONE' />
              </Col>
            </Row>
            <Row className="">
              <Col s='12'>
                <label htmlFor={'niveau'}>NIVEAU D'ÉTUDES ACTUEL</label>
                <select id={'niveau'} name={`niveau-d-etude-actuel`}>
                  <option value={'BAC'}>BAC</option>
                  <option value={'BAC+1'}>BAC +1</option>
                  <option value={'BAC+2'}>BACK +2</option>
                  <option value={'BAC+3'}>BACK +3</option>
                </select>
              </Col>
            </Row>
            <Row className="">
              <Col s='12'>
                <label htmlFor={'formation'}>FORMATION RECHERCHÉE</label>
                <select id={'formation'} name={`niveau-d-etude-actuel`}>
                  <option value={'Licence Télécommunications'}>Licence Télécommunications</option>
                  <option value={'Licence en informatique'}>Licence en informatique</option>
                  <option value={'Licence en électronique'}>Licence en électronique</option>
                  <option value={'Licence en chimie'}>Licence en chimie</option>
                </select>
              </Col>
            </Row>
            <Row className="">
              <Col s='12'>
                <FormField name='Adresse-email' placeholder='' label='ADRESSE E-MAIL*' />
              </Col>
            </Row>
            <Row className="">
              <Col s='12'>
                <label htmlFor={`message`}>AJOUTEZ UN COMMENTAIRE</label>
                <textarea rows={4} name={`Message`} className={`form-field-block__input null block`} id={`message`} placeholder={`Message`}></textarea>
              </Col>
            </Row>
            <Row className="">
              <Col s='12'>
                <Button className="button__material form__button_submit capitalize" type='submit' name='envoyer'>Valider votre Préinscription </Button>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    </Layout>
  );
}

export default PreinscriptionPage
