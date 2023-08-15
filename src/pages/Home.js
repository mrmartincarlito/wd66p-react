import React, { useState, useEffect } from "react";
import Card from "../component/Card";
import axios from "axios";

function Home() {
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [job, setJob] = useState("");
  const [accounts, setAccounts] = useState([]);

  const [data, setData] = useState([]);

  const handleClick = () => {
    //setAccounts([...accounts, { name, age, address }]);
    //store();
    //update(id)
    destroy(id)
  };

  useEffect(() => {
    checkEnv();
    index();
  }, []);

  const checkEnv = () => {
    console.log(process.env.REACT_APP_API);
    console.log(process.env.REACT_APP_SAMPLE_VARIABLE);
  };

  /**
   * Listing
   */
  async function index() {
    axios.get(process.env.REACT_APP_API + "users").then((response) => {
      console.log(response.data.data);
      setData(response.data.data);
    });
  }

  /**
   * Store insert
   */

  async function store() {

    const payload = {
      name : name,
      job : job
    }

    axios.post(process.env.REACT_APP_API + "users", payload)
      .then((response) => {
        if (response.status === 201) {
          alert("Successfully inserted")
          index();
        } else {
          alert("Error while saving")
        }
      })
  }

  /**
   * Update
   */
  async function update(id) {

    const payload = {
      name : name
    }


    axios.patch(process.env.REACT_APP_API + "users/" + id, payload)
      .then((response) => {
        if (response.status === 200) {
          alert("Successfully updated")
          index();
        } else {
          alert("Error while updating")
        }
      })
  }

  /**
   * Destroy delete
   */

  async function destroy(id) {
    axios.delete(process.env.REACT_APP_API + "users/" + id)
      .then((response) => {
        if (response.status === 204) {
          alert("Successfully deleted")
          index();
        } else {
          alert("Error while deleting")
        }
      })

  }

  return (
    <div>
      <div className="row">
        <div className="col-4 mt-3 ms-3">
          Enter your name :{" "}
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />{" "}
          <br />
          Enter your ID :{" "}
          <input
            type="number"
            onChange={(e) => setId(e.target.value)}
            value={id}
          />{" "}
          <br />
          Enter your Job :{" "}
          <input
            type="text"
            onChange={(e) => setJob(e.target.value)}
            value={job}
          />{" "}
          <br />
          <button onClick={handleClick}>Save Me</button>
        
        </div>
      </div>
      <hr />
      <div className="row">
            {data.map((user, index) => {
              return (
                <>
                  <div className="col-3 mt-3">
                    <Card
                      key={user.id}
                      first_name={user.first_name}
                      last_name={user.last_name}
                      email={user.email}
                      id={user.id}
                    />
                  </div>
                  
                </>
              );
            })}
          </div>
    </div>
  );
}

export default Home;
