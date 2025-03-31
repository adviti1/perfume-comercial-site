import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css';

function AuthPage() {
  const [hoverSide, setHoverSide] = useState(null);
  const [activeForm, setActiveForm] = useState(null);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted');
    setError('');
    
    if (!loginData.email || !loginData.password) {
      setError('Please fill in all fields');
      return;
    }

    console.log('Login data:', loginData);
    navigate('/home');
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signup submitted');
    setError('');
    
    if (!signupData.name || !signupData.email || !signupData.password) {
      setError('Please fill in all fields');
      return;
    }

    if (signupData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    console.log('Signup data:', signupData);
    navigate('/home');
  };

  const handleInputChange = (e, formType) => {
    const { name, value } = e.target;
    formType === 'login' 
      ? setLoginData({ ...loginData, [name]: value }) 
      : setSignupData({ ...signupData, [name]: value });
  };

  const showForm = (formType) => {
    console.log('Showing form:', formType);
    setActiveForm(formType);
    setHoverSide(formType === 'login' ? 'left' : 'right');
  };

  const hideForms = () => {
    console.log('Hiding forms');
    setActiveForm(null);
    setHoverSide(null);
    setError('');
  };

  return (
    <div className={`container ${hoverSide ? 'hover-' + hoverSide : ''}`}>
      <div 
        className="split left"
        onMouseEnter={() => !activeForm && setHoverSide('left')}
        onMouseLeave={() => !activeForm && setHoverSide(null)}
      >
        {activeForm === 'login' ? (
          <form className="auth-form active" onSubmit={handleLoginSubmit}>
            <h2>Log In</h2>
            {error && <div className="error">{error}</div>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) => handleInputChange(e, 'login')}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) => handleInputChange(e, 'login')}
              required
            />
            <div className="form-actions">
              <button type="button" className="auth-btn back-btn" onClick={hideForms}>
                Back
              </button>
              <button type="submit" className="auth-btn submit-btn">
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div className="auth-btn" onClick={() => showForm('login')}>
            Log In
          </div>
        )}
      </div>

      <div 
        className="split right"
        onMouseEnter={() => !activeForm && setHoverSide('right')}
        onMouseLeave={() => !activeForm && setHoverSide(null)}
      >
        {activeForm === 'signup' ? (
          <form className="auth-form active" onSubmit={handleSignupSubmit}>
            <h2>Sign Up</h2>
            {error && <div className="error">{error}</div>}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={signupData.name}
              onChange={(e) => handleInputChange(e, 'signup')}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signupData.email}
              onChange={(e) => handleInputChange(e, 'signup')}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password (min 6 characters)"
              value={signupData.password}
              onChange={(e) => handleInputChange(e, 'signup')}
              required
            />
            <div className="form-actions">
              <button type="button" className="auth-btn back-btn" onClick={hideForms}>
                Back
              </button>
              <button type="submit" className="auth-btn submit-btn">
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div className="auth-btn" onClick={() => showForm('signup')}>
            Sign Up
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthPage;