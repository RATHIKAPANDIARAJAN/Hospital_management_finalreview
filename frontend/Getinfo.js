import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

function Get() {
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null); // Track the user being edited
  const [editedUser, setEditedUser] = useState({
    address: '',
    disease: '',
    patientname: '',
  });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8216/get');
    setUsers(result.data);
  };

  const handleEdit = (user) => {
    setEditId(user.id);
    setEditedUser({
        address: user.address,
        disease: user.disease,
        patientname: user.patientname,
    });
  };

  const handleUpdate = async () => {
    try {
      
      await axios.put(`http://localhost:8216/updateif/${editId}`, editedUser);
      
      
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === editId ? { ...user, ...editedUser } : user
        )
      );

      
      setEditId(null);
      setEditedUser({
        address: '',
        disease: '',
        patientname: '',
      });
    } catch (error) {
      console.error('Error updating user:', error);
      // Handle the error (e.g., display an error message)
    }
  };

  const handleDelete = async (id) => {
    try {
      // Make an HTTP request to delete the record by ID
      await axios.delete(`http://localhost:8216/delete/${id}`);
    
      // Update the UI to remove the deleted record
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
      // Handle the error (e.g., display an error message)
    }
  };

  return (
    <div>
      <table id="table" border={1}>
        <thead id="head">
          <tr>
            <th>ADDRESS</th>
            <th>DISEASE</th>
            <th>PATIENT NAME</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                {editId === user.id ? (
                  <input
                    type="text"
                    value={editedUser.address }
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, address: e.target.value })
                    }
                  />
                ) : (
                  user.address
                )}
              </td>
              <td>
                {editId === user.id ? (
                  <input
                    type="text"
                    value={editedUser.disease}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, disease: e.target.value })
                    }
                  />
                ) : (
                  user.disease
                )}
              </td>
              <td>
                {editId === user.id ? (
                  <input
                    type="text"
                    value={editedUser.patientname}
                    onChange={(e) =>
                      setEditedUser({ ...editedUser, patientname: e.target.value })
                    }
                  />
                ) : (
                  user.patientname
                )}
              </td>
              <td>
                {editId === user.id ? (
                  <button onClick={handleUpdate}>Save</button>
                ) : (
                  <div>
                    <button onClick={() => handleEdit(user)}>Edit</button>
                    
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Get;
