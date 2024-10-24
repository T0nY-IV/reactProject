import { useState } from 'react';
function FORMUL(props) {
    const [nom, setnom] = useState("");
    const [age, setage] = useState(+50);
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("get you hairry ass here ",nom,", I spend ",age,", years feeding you for nothing!!");
    }
    return(
        <form>
            email: {props.email} <br/>
            <input type="text" value={nom} onChange={(event)=>setnom(event.target.value)} />
            {nom ? <p>le nom est {nom}</p> : null}
            <br />
            <input type="number" value={age} onChange={(event)=>setage(event.target.value)} />
            <p>le age est {age}</p>
            <div>
                <button className='btn btn-success' onClick={(event)=>handleSubmit(event)}>valider</button>
            </div>
        </form>
    )
}
export default FORMUL;