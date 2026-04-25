import { useState } from "react";
import axios from "axios";

function Admin() {
  const [name, setName] = useState("");
  const [seats, setSeats] = useState("");

  const addMovie = async () => {
    const res = await axios.post("http://localhost:5000/add", {
      name,
      seats: Number(seats)
    });

    alert(res.data.message);
  };

  const addEvent = async () => {
    const res = await axios.post("http://localhost:5000/addevent", {
      name,
      seats: Number(seats)
    });

    alert(res.data.message);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>🧑‍💼 Admin Panel</h2>

      <input
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      /><br /><br />

      <input
        type="number"
        placeholder="Enter seats"
        onChange={(e) => setSeats(e.target.value)}
      /><br /><br />

      <button onClick={addMovie}>Add Movie</button>
      <button onClick={addEvent} style={{ marginLeft: "10px" }}>
        Add Event
      </button>
    </div>
  );
}

export default Admin;