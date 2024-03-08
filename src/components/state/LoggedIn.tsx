import { useState } from 'react';

function LoggedIn() {
  const [isLoggedIn, setIsloggedIn] = useState(false);

  const handleLogin = () => {
    setIsloggedIn(true);
  };
  const handleLogout = () => {
    setIsloggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Login</button>
      <div>User is {isLoggedIn ? 'logged  in' : 'logged out'}</div>
    </div>
  );
}
export default LoggedIn;
