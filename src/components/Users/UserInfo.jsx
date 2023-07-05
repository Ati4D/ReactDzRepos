import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UsersContext from '../../contexts/UsersContext';

const UserInfo = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const users = useContext(UsersContext);

    const getUser = async () => {
        //const response = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
        //const result = await response.json();
        //setUser(result);
        //const response = (await axios.get("https://jsonplaceholder.typicode.com/users/" + id));
        setUser(users.find(user => user.id == id));
    }

    useEffect(() => { getUser(); }, [id, users]);

    return (
        <div>
            <h2>{user?.name}</h2>
            <h3>{user?.email}</h3>
        </div>
    );
}

export default UserInfo;
