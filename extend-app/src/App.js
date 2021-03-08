import React, {useState} from 'react';
import Tweet from './tweet';


function App() {

  const [users, setUser] = useState([
    {name:'Nathan', message:'1st', likes:'100'},
    {name:'Richard', message:'2nd', likes:'100'},
    {name:'Caitlin', message:'3rd', likes:'100'}, 
    {name:'Dave', message:'3rd', likes:'100'},
    {name:'Steve', message:'3rd', likes:'100'},
  ])


  return (
    <div className="app">
      {users.map(user => (
          <Tweet name={user.name} message={user.message} likes={user.likes}/>
      ))}
    </div>
      
  );
}

export default App;