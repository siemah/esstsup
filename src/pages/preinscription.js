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
        <Container className="flex-block">
          <div className={`image-block`} />
          <form className={`preinscription__form mb0`} netlify-honeypot="bot-field" action='/success-form/' name="formulaire-de-preinscription" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="formulaire-de-preinscription" />
            <Row className="" style={{ overflow: 'hidden' }}>
              <Col s='12' className={`dots-label__container`}>
                <h1 className='form-legend'>Pré-inscrivez-vous en remplissant ce formulaire</h1>
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
            <Row>
              <Col s='12' m='6'>
                <FormField name='date-de-naissance' type='date' placeholder='JJ/MM/AAAA' label='Date De Naissance*' />
              </Col>
              <Col s='12' m='6'>
                <FormField name='lieu-de-naissance' type='text' placeholder='Lieu de naissance' label='Lieu De Naissance*' />
              </Col>
            </Row>
            <Row className="">
              <Col s='12'>
                <FormField name='Ville' placeholder='' label='VILLE*' />
              </Col>
            </Row>
            <Row>
              <Col s='12' m='6'>
                <FormField name='moyenne-du-bac' label="Moyenne générale du BAC*" />
              </Col>
              <Col s='12' m='6'>
                <FormField name='annee-de-bac' placeholder='JJ/MM/AAAA' label='Année du BAC*' />
              </Col>
            </Row>
            <Row>
              <Col s='12'>
                <FormField name='numero-de-bac' placeholder='' label="N° d'inscription BAC*" />
              </Col>
            </Row>
            <Row>
              <Col s='12' m='3'>
                <FormField name='moyenne-du-sciences' label="Moyenne du Sciences" />
              </Col>
              <Col s='12' m='3'>
                <FormField name='moyenne-du-math' label='Moyenne du Mathématiques' />
              </Col>
              <Col s='12' m='3'>
                <FormField name='moyenne-du-physique' label="Moyenne du Physique" />
              </Col>
            </Row>
            <Row>
              <Col s='12' m='6'>
                <FormField name='moyenne-du-Francais' label='Moyenne du Français' />
              </Col>
              <Col s='12' m='6'>
                <FormField name='moyenne-du-anglais' label='Moyenne du Anglais' />
              </Col>
            </Row>
            <Row>
              <Col s={12}>
                <label htmlFor={'non'}>
                  <input type='radio' id='non' name='inscrit-dans-université' value='non' />
                  {` `}Je ne suis inscrit dans aucune université pour le moment
                </label><br />
                <label htmlFor={'oui'}>
                  <input type='radio' id='oui' name='inscrit-dans-université' value='oui' />
                  {` `}Actuellement, Je suis inscrit dans la spécialité suivante :
                </label>
              </Col>
            </Row>
            <Row>
              <Col s='12' m='6'>
                <FormField name='Nom-de-la-spécialité' label="Nom de la spécialité" />
              </Col>
              <Col s={12} m={6}>
                <div className={`select-container relative`}>
                  <select id={'Cycle'} className={`form-field-block__input`} name={`Cycle`}>
                    <option value={'Licence'}>Sélectionnez votre niveau d'études</option>
                    <option value={'Licence'}>Licence</option>
                    <option value={'Master'}>Master</option>
                    <option value={'Doctorat'}>Doctorat</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row>
              <Col s='12' m={6}>
                <FormField name="Année-d-étude" label="Année d'étude" />
              </Col>
              <Col s='12' m={6}>
                <FormField name="Nom-de-l-université" label="Nom de l'université ou école (Wilaya)" />
              </Col>
            </Row>
            <Row>
              <Col s='12' m={6}>
                <FormField name="Copie-du-BAC" type={'file'} label="Copie du BAC" />
              </Col>
              <Col s='12' m={6}>
                <FormField name="Copie-du-Relevé-de-notes-du-BAC" type={'file'} label="Copie du Relevé de notes du BAC" />
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
                <div className={`select-container relative`}>
                  <select id={'niveau'} className={`form-field-block__input`} name={`niveau-d-etude-actuel`}>
                    <option value={'BAC'}>Sélectionnez votre niveau d'études</option>
                    <option value={'BAC'}>BAC</option>
                    <option value={'BAC+1'}>BAC +1</option>
                    <option value={'BAC+2'}>BAC +2</option>
                    <option value={'BAC+3'}>BAC +3</option>
                  </select>
                </div>
              </Col>
            </Row>
            <Row className="">
              <Col s='12'>
                <label htmlFor={'formation'}>FORMATION RECHERCHÉE</label>
                <div className={`select-container relative`}>
                  <select id={'formation'} className={`form-field-block__input`} name={`niveau-d-etude-actuel`}>
                    <optgroup>Sélectionnez une formation</optgroup>
                    <option value={'Licence Télécommunications'}>Licence Télécommunications</option>
                    <option value={'Licence en informatique'}>Licence en informatique</option>
                    <option value={'Licence en électronique'}>Licence en électronique</option>
                    <option value={'Licence en chimie'}>Licence en chimie</option>
                  </select>
                </div>
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
                <Button className="button__material bg-blue form__button_submit right" type='submit' name='envoyer'>ENVOYER</Button>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    </Layout>
  );
}

export default PreinscriptionPage
