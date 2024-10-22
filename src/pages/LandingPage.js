const LandingPage = () => {
    return (
      <div>
        <h1>Welcome to Bharat Net</h1>
        <button onClick={() => window.location.href='/register'}>Register</button>
        <button onClick={() => window.location.href='/login'}>Login</button>
      </div>
    );
  };
  
  export default LandingPage;
  