import './App.css';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useState } from 'react';


const Createnotes=(props)=>{
    const [expand,setexpand]=useState(false);
    const [btn,btnexpand]=useState(false);

const [set,setnote]=useState({

    title : "",
    content :"",
});
const input =(event)=>
{
const{name,value}=event.target;
setnote((old)=>
{
    return{
        ...old,
        [name]:value,
    }
}

)
}
const fun1 =()=>
{
props.passNote(set);
setnote({

    title : "", 
    content :"",
})

}
const expandIt=()=>
{
    setexpand(true);
    btnexpand(true);
}
const collapseIt=() =>
{
    setexpand(false);
    btnexpand(false);
}

    return(
<>
<div className="main_note"  onDoubleClick={collapseIt}>
    <form>
{
    expand?
<input
 type="text" 
placeholder="Title"
 autoComplete="off"
name="title"
value={set.title}
onChange={input}

 />:null
}


<textarea rows='' 
column=''
 placeholder="Write a note..."
 name="content"
value={set.content}
onChange={input}
onClick={expandIt}

 />
 {
     btn?
<Button onClick={fun1}>
    <AddIcon className="plus_sign"/>
</Button>
:null
 }
    </form>
</div>
</>


    );
}
export default Createnotes;