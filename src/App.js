import logo from './logo.svg';
import './App.css';
import Navbar from './Componenet/Navbar';
import TextForm from './Componenet/TextForm';


function App() {
  return (
   <>
   <Navbar></Navbar>
   <div className="container my-3">
    <TextForm heading="Enter the text to analyze"></TextForm>
   </div>
   
   </>
  );
}

export default App;
