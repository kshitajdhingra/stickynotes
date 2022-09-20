
import './App.css';
import Time from "./Time"

const Header=()=> {
    
  return (
    <>
    <div className="header">
<h1>STICKY NOTES  </h1>
<span className="clock" ><Time /></span>

    </div>
    </>
   
  );
}

export default Header;