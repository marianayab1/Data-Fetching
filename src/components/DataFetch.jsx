import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserViewer = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [fetch, setFetch] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                setUsers(res.data);
            })
            .catch(() => {
                setErrorMsg('Unable to fetch users.');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleSelectUser = (user) => {
        setSelectedUser(user);
    };

    return (

        <>

            <div className="container p-4">

                <button onClick={()=>setFetch(true)} className='btn text-white bg-success mb-5'>Fetch users</button>

                {fetch && (<>

                    <h4 className="mb-3">Select a User</h4>

                    {loading && <p>Loading users...</p>}
                    {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}


                    <div className="d-flex flex-wrap gap-2 mb-4">
                        {users.map((user) => (
                            <button
                                key={user.id}
                                className="btn btn-outline-primary btn-sm"
                                onClick={() => handleSelectUser(user)}
                            >
                                {user.name}
                            </button>
                        ))}
                    </div>


                    {selectedUser && (
                        <div className="card p-3">
                            <h5>{selectedUser.name}</h5>
                            <p><strong>Username:</strong> {selectedUser.username}</p>
                            <p><strong>Email:</strong> {selectedUser.email}</p>
                            <p><strong>Phone:</strong> {selectedUser.phone}</p>
                            <p><strong>Website:</strong> {selectedUser.website}</p>
                            <p><strong>Company:</strong> {selectedUser.company?.name}</p>
                        </div>
                    )}

                </>)
                }

            </div>


        </>

    );
};

export default UserViewer;
