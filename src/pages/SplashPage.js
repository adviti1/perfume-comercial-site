import { useNavigate } from 'react-router-dom';
import './SplashPage.css';

function SplashPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/auth');
  };

  return (
    <div className="splash-container" onClick={handleClick}>
      <h1 className="splash-title">PERFUMA</h1>
    </div>
  );
}

export default SplashPage;