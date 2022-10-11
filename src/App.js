import React, { useReducer, useState } from 'react';
import { STEPS } from './constants';
import Layout from './components/Layout';
import ProgressBar from 'react-bootstrap/ProgressBar';
import PersonalInformationForm from './components/PersonalInformationForm';
import ProfileInformationForm from './components/ProfileInformationForm';
import NotificationSettingsForm from './components/NotificationSettingsForm';
import SuccessScreen from './components/SuccessScreen';

const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  username: '',
  about: '',
  email_notifications: true,
  email_promotions: false
}

const App = () => {
  const [progress, setProgress] = useState(25);
  const [step, setStep] = useState(STEPS.NOTIFICATION_SETTINGS);
  const [formValues, setFormValues] = useReducer((oldFormValues, newFormValues) => {
    return {
      ...oldFormValues,
      ...newFormValues
    }
  }, initialFormValues)

  const FormStepComponents = {
    [STEPS.PERSONAL_INFO]: PersonalInformationForm,
    [STEPS.PROFILE_INFO]: ProfileInformationForm,
    [STEPS.NOTIFICATION_SETTINGS]: NotificationSettingsForm,
    [STEPS.SUCCESS]: SuccessScreen,
  }

  const FormStepComponent = FormStepComponents[step];

  const FormStepProps = {
    changeStep: setStep,
    changeProgress: setProgress,
    formValues,
    setFormValues
  }

  return (
    <Layout>
      <ProgressBar className='my-4' now={progress} />
      <FormStepComponent {...FormStepProps} />
    </Layout>
  );
}

export default App;
