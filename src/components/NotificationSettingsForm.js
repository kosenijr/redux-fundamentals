import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { STEPS } from '../constants';
import Row from 'react-bootstrap/Row';

export default function NotificationSettingsForm({ changeStep, changeProgress, formValues, setFormValues }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    changeProgress(100);
    changeStep(STEPS.SUCCESS);
  };

  return (
    <Row className='col-md-6 col-xl-4 mx-auto'>
      <h2 className=''>Notification Settings</h2>
      <p>How would you like to receive alerts?</p>
      <Form onSubmit={handleSubmit}>
        <Form.Check
          className='mb-3'
          type='switch'
          id='custom-switch'
          label="I'd like to receive email alerts when I receive messages."
          checked={formValues.email_notifications}
          onChange={() => setFormValues({email_notifications: !formValues.email_notifications})}
        />
        <Form.Check
          className='mb-3'
          type='switch'
          id='custom-switch'
          label="I'd like to promotional emails when there are specials or new products."
          checked={formValues.email_promotions}
          onChange={(e) => setFormValues({email_promotions: !formValues.email_promotions})}
        />
        <Button className='w-100 mb-2' type='submit'>Complete Notification Settings</Button>
        <Button
          className='w-100 text-decoration-none'
          variant='link'
          onClick={() => {
            changeProgress(25);
            changeStep(STEPS.PROFILE_INFO);
          }}
        >
          Back to Profile Information
        </Button>
      </Form>
    </Row>
  )
}
