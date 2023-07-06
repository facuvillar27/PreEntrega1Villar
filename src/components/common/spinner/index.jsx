import Spinner from 'react-bootstrap/Spinner';
import './index.css';

function CostumizedSpinner() {
  return (
    <div className="spinner-container">
      <Spinner animation="border" variant="primary" size="lg" />
    </div>
  );
}

export default CostumizedSpinner;