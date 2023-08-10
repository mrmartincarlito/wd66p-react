import React, { useState } from 'react';
import Card from '../component/Card';

function Home() {
  
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState('');
    const [accounts, setAccounts] = useState([]);
  
    const handleClick = () => {
      setAccounts([...accounts, {name , age, address}]);
    }
  
    return (
      <div>
  
        <div className='row'>
          <div className='col-4 mt-3 ms-3'>
          Enter your name : <input type="text" onChange={((e) => setName(e.target.value))} value={name}/> <br />
          Enter your age : <input type="number" onChange={((e) => setAge(e.target.value))} value={age}/> <br />
          Enter your address : <input type="text" onChange={((e) => setAddress(e.target.value))} value={address}/> <br />
          <button onClick={handleClick}>Save Me</button>
  
          
          {
            accounts.map((account, index) => {
              return (
                <>
                  <hr />
                  <Card key={index} name={account.name} age={account.age} address={account.address}/>
                </>
  
              )
            })
          }
          </div>
  
        </div>
      </div>
    );
};

export default Home;