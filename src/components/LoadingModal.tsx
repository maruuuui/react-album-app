import { Modal, Spinner } from 'react-bootstrap'

type LoadingModalProps = {
  isLoading: boolean
}
function LoadingModal(props: LoadingModalProps) {
  return (
    <Modal show={props.isLoading} centered size="sm">
      <Modal.Body>
        <div
          id="spinner"
          className="d-flex justify-content-center align-items-center"
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default LoadingModal
