import useWindowSize from 'react-use/lib/useWindowSize'
import Row from 'react-bootstrap/Row';
import Confetti from 'react-confetti'
import Button from 'react-bootstrap/Button';
import { STEPS } from '../constants';

export default function SuccessScreen({ changeStep, changeProgress }) {
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
      <p>You're all ready to go. Thanks for joining.</p>
      <Button
        className='w-100'
        type='submit'
        onClick={() => {
          changeProgress(25);
          changeStep(STEPS.PERSONAL_INFO);
        }}
      >
        Proceed to Dashboard
      </Button>
    </Row>
  )
}
