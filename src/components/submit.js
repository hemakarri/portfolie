
import react,{useEffect,useState} from 'react' 
import { Navigate, useNavigate } from "react-router-dom"; 
import axios from 'axios';
import "./submit.css"

function Submit() {
  const [title,setTitle] = useState("");
  const [link,setLink] = useState("");
  const [git,setGit] = useState("");
  const [description,setDescription] = useState("");
  const Navigate = useNavigate()
  const SubmitHandler =(e)=>{
    e.preventDefault()
    
  axios.post("http://localhost:8080/postdata",{
    title:title,link:link,linkgit:git,description:description})
  .then(res=>console.log(res))
  .catch(err=>console.log(err))

 alert("alert dats success")
  Navigate("/")
   
  }

  return (
    <div>
      <h1>To Add Project Details</h1>
    <div className="submit">
     <form onSubmit={SubmitHandler}>
      <input className="input" type="text" placeholder='title' value={title} name='title' onChange={(e)=>{setTitle(e.target.value)}}/>
      <input className="input" type="text" placeholder='link' value={link} name='title' onChange={(e)=>{setLink(e.target.value)}}/>
      <input className="input" type="text" placeholder='gitlink' value={git} name='title' onChange={(e)=>{setGit(e.target.value)}}/>
      <input className="input" type="text" placeholder='description' value={description} name='title' onChange={(e)=>{setDescription(e.target.value)}}/>
      <input  id='btn-btn' type="submit"/>
     </form>
    </div>
    </div>
  );
}

export default Submit;