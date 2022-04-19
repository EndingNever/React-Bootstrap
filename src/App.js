import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './Components/Bootstrap/Hello';
import Scratch from './Components/Scratch/Scratch';

function App() {
  return (
     <Hello 
     breakpoints = {['xxxl','xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
     />
    // <Scratch />
  );
}

export default App;
