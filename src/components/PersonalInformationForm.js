import React, { useState } from 'react';
import { STEPS } from '../constants';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function PersonalInformationForm({changeStep, changeProgress, formValues, setFormValues}) {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      return setValidated(true);
    }
    changeProgress(50);
    changeStep(STEPS.PROFILE_INFO);
  };

  return (
    <Row className='col-md-6 col-xl-4 mx-auto'>
        <h2>Personal Information</h2>
        <p>Let's start with the basic information we need to get started.</p>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type='text'
            value={formValues.first_name}
            onChange={(e) => setFormValues({first_name: e.target.value})}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type='text'
            value={formValues.last_name}
            onChange={(e) => setFormValues({last_name: e.target.value})}
          />
        </Form.Group>
        <Form.Group className='mb-4'>
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type='text'
            value={formValues.email}
            onChange={(e) => setFormValues({email: e.target.value})}
          />
        </Form.Group>
        <Button className='w-100' type='submit'>Complete Profile Information</Button>
      </Form>
    </Row>
  )
}
