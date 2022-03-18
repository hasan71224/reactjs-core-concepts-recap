import logo from './logo.svg';
import './App.css';
import { buildQueries } from '@testing-library/react';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
      <District name="chadpur" special="Elish"></District>
      <District name="cumilla" special="Khadi"></District>
    </div>
  );
}
//-------------------------Load Data-------------------------------------
function LoadPost(){
  const[posts, setPosts] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  },[])

  return(
    <div>
      <h2>Total Post:{posts.length}</h2>
          <div>
            {
              posts.map(post => <Post PostId={post.id} post={post} key={post.id}></Post>)
            }
          </div>
 
    </div>
  )
}
function Post(props){
  const{userId, title, body}=props.post
  return(
    <div style={Style}>
      <h2>User Id: {userId}</h2>
      <h3>Post Id: {props.PostId}</h3>
      <h4>Post Title: {title}</h4>
      <p>Body: {body}</p>
      
    </div>
  )
}

//-----------------------Event Handler.......................................
const Style ={
  color: 'yellow',
  backgroundColor: "seaGreen",
  margin: "20px",
  padding: "20px",
  borderRadius:'10px'
}
function District(props){
  const[power, setPower] = useState(1)

  const boostPower = () =>{
    const newPower= power*2;
    setPower(newPower);
  }
  return(
    <div style={Style}>
      <h2>Name: {props.name}</h2>
      <h3>Special: {props.special}</h3>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost Power</button>
    </div>
  )
}

export default App;
