import './App.css';

import Business from './Components/Business';
import Custimer from './Components/Custimer';

import Header from './Components/Header';
import Input from './Components/Input';
import LastSection from './Components/LastSection';
import Main from './Components/Main';
import Marketing from './Components/Marketing';
function App() {
  return (
    <>
      <Header  />
      <Input />
      <Main />
   
      <Marketing />
      <Business />
      <Custimer />
      <LastSection/>
    </>
  );
}

export default App;
