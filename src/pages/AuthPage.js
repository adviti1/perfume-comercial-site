import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';

function AuthPage() {
  const [hoverSide, setHoverSide] = useState(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    // You can add login logic here later
    navigate('/home'); // Navigate to home page
  };

  const handleSignup = () => {
    // You can add signup logic here later
    navigate('/home'); // Navigate to home page
  };

  return (
    <div className={`container ${hoverSide ? 'hover-' + hoverSide : ''}`}>
      <div 
        className="split left"
        onMouseEnter={() => setHoverSide('left')}
        onMouseLeave={() => setHoverSide(null)}
      >
        <div className="btn" onClick={handleLogin}>Log In</div>
      </div>
      <div 
        className="split right"
        onMouseEnter={() => setHoverSide('right')}
        onMouseLeave={() => setHoverSide(null)}
      >
        <div className="btn" onClick={handleSignup}>Sign Up</div>
      </div>
    </div>
  );
}

export default AuthPage;
