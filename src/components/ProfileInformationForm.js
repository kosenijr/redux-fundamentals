import React, { useState } from 'react';
import { STEPS } from '../constants';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function ProfileInformationForm({ changeStep, changeProgress, formValues, setFormValues }) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      return setValidated(true);
    }
    changeProgress(75);
    changeStep(STEPS.NOTIFICATION_SETTINGS);
  };

  return (
    <Row className='col-md-6 col-xl-4 mx-auto'>
        <h2 className=''>Profile Information</h2>
        <p>Let's start with the basic information we need to get started.</p>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            required
            type='text'
            value={formValues.username}
            onChange={(e) => setFormValues({username: e.target.value})}
          />
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label>About</Form.Label>
          <Form.Control
            as='textarea'
            type='textarea'
            value={formValues.about}
            onChange={(e) => setFormValues({about: e.target.value})}
          />
        </Form.Group>
        <Button className='w-100 mb-2' type='submit'>Complete Profile Information</Button>
        <Button
          className='w-100 text-decoration-none'
          variant='link'
          onClick={() => {
            changeProgress(25);
            changeStep(STEPS.PERSONAL_INFO);
          }}
        >
          Back to Personal Information
        </Button>
      </Form>
    </Row>
  )
}
