import React, {useState, useEffect} from 'react';
import axios from 'axios';


const UserList = () => {
    const [users, setUsers] = useState([]);
   
    useEffect(()=>{
      axios.get(`https://jsonplaceholder.typicode.com/users`).then((respond) => {
          setUsers(respond.data);
         });
  }, []);

    return (
      <div>
        {users?.map(user =>(
          <div key= {user.id}>
              <h6>Name:{user.name}</h6>
              <h6>Username:{user.userName}</h6>
              <h6>Email:{user.email}</h6>
              <h6>Address:{user.address.street},{user.address.city}
                {user.address.zipcode}</h6>
                <h6>{user.phone}</h6>
                <h6>{user.website}</h6>
                <h6>{user.company.name}</h6>
                <br>
                </br>
                <br>
                </br>
              </div>
        ))}
      </div>
    );
  }

  export default UserList;