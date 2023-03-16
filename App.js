import React ,{useState} from 'react'
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const salert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggle = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#220058";
      salert(" Dark Mode Enabled Successfully ","success");
      // document.title="Manav React - Dark Mode";
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      salert(" Light Mode Enabled Successfully ","success");
      // document.title="Manav React - Light Mode";
    }

  }
  return (
    <>    
    <NavBar title="Text.Cloud" about="About Us" mode={mode} toggle={toggle}/>
    <Alert alert={alert}/>
          
    <div className="container my-3">
    <TextForm salert={salert} heading='Try - Text Case Converter' mode={mode}/>
    </div>

    </>
  )}


export default App;
