
import { useState } from 'react';
import './App.css';

const Time=()=>
{
    let time = new Date().toLocaleTimeString();
    const [ctime,setCtime] = useState(time);
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };
    setInterval(UpdateTime,1000);

    return(
        
<>



<p>{ctime} </p>



</>

    );
}
export default Time;