import './App.css';


import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const Note =(props)=>
{ const delitem1=()=>
    {
        props.delitem(props.id);
    }
    return(
<>
<div className="note">
<h1>{props.title}</h1>
<br/>
<p>{props.content}</p>
<button className="btn" onClick={delitem1}>
<DeleteForeverIcon className="deleteIcon"/>
</button>


</div>

</>
    );
}
export default Note;