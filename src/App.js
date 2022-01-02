
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';


function App() {
  return (
<>
<Navbar title="Shehroz" about="About" help="Help"/>
<div className="container"><TextForm title="Enter Your Article Here"/></div>


</>
  );
}

export default App;
