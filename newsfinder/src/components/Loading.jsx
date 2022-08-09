import { Spinner } from 'reactstrap';

function Loading() {
  return (
    <div className='containerSpinner'>
      <center className='centrarSpinner'>
        <Spinner className='spinnerReactstrap' color='success' />
      </center>
    </div>
  )
}

export default Loading;