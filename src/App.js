import logo from './logo.svg';
import './App.css';
import {Header,Content,Footer} from './func-components'
import MsgBox from './class-props';

function App() {
  return (
    //[<Header/>,<Content/>,<Footer/>]
    <MsgBox
      text="React & React Native"
      color="blue"
      bgColor="#ccc"
      fontSize="18pt"
      border="solid 1px black"
    />
  );
}

export default App;
