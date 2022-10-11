import useWindowSize from 'react-use/lib/useWindowSize'
import Row from 'react-bootstrap/Row';
import Confetti from 'react-confetti'
import Button from 'react-bootstrap/Button';
import { STEPS, initialFormValues } from '../constants';

export default function SuccessScreen({ changeStep, changeProgress, setFormValues}) {
  const { width, height } = useWindowSize()
  return (
    <Row className='col-md-6 col-xl-4 mx-auto text-center'>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={200}
        recycle={false}
        gravity={0.5}
      />
      <h2>Success!</h2>
      <p>Thanks for interacting and reviewing this example of a multi-step form built with React.</p>
      <p>If you haven't already, try to refactor the application to utilize Redux.</p>
      <Button
        className='w-100'
        type='submit'
        onClick={() => {
          changeProgress(25);
          changeStep(STEPS.PERSONAL_INFO);
          setFormValues(initialFormValues);
        }}
      >
        Reset Application
      </Button>
    </Row>
  )
}
