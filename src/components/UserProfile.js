import { useUser } from './UserComponent';   

function UserProfile() {
  const { user, login, logout } = useUser(); 
  return (
    <div>
      <h2>Profilo Utente</h2>
      {user ? (
        <>
          <p>Benvenuto, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={() => login('Mario Rossi')}>Login</button>
      )}
    </div>
  );
}

export default UserProfile;
