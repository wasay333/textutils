import { useState } from 'react';
import './';
import Navbar from './Navbar';
import Alert from './Alert';
import Textform from './Textform';


function App() {
  const [alert, setAlert] =useState(null)  
  const showAlert =(message, type)=>{
    
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
    
  }

  const [mode, setMode] = useState('light')

  const toggleMode = ()=>{
  if(mode === 'light'){
    setMode('dark')
document.body.style.backgroundColor = '#0e3854'
document.body.style.color='white'
document.title = "TextUtils-darkmode"
showAlert(" dark mode enabled", "success")
}else{
  setMode('light')
  document.body.style.backgroundColor = 'white'
document.body.style.color='black'
document.title = "TextUtils"
showAlert(" light mode enabled", "success")
}
}  

return (
    <div className="App">

     <Navbar title ="TextUtils" mode = {mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <Textform showAlert={showAlert} heading="Enter your text here"/>
 

</div>
  );
}


export default App;
