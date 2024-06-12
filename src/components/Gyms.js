import React, {useState, useEffect} from "react";
import axios from "axios";

const Gyms = () => {
  const [gyms, setGyms] = useState([]);
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };
  useEffect(() => {
    axios.get("http://localhost:3000/gyms", config)
    .then((response) => {
      setGyms(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }, [])

  return (
    <div>
      <h2>Gyms</h2>
      <ul>
        {gyms.map((gym) => (
          <li key={gym.id}>{gym.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default Gyms;
