import { useContext } from 'react';
import './App.css';
import { AuthContext } from './Context/AuthProvider';

function App() {
  const {he} = useContext(AuthContext);
  return (
    <div className="">
      {he}
    </div>
  );
}

export default App;
