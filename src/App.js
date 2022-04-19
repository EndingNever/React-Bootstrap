import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import  Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Hello from './Components/Bootstrap/Hello';

function App() {
  return (
     <Hello 
     breakpoints = {['xxxl','xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
     />
  );
}

export default App;
