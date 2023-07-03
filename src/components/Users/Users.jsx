import React, { useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useSearchParams();
    const [textSerch, setTextSerch] = useState(search.get('q') ?? '');

    const getUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await response.json();
        setUsers(result);
    }

    const searchHandler = (e) => {
        setTextSerch(e.target.value);
        setSearch({ q: e.target.value });
    }

    const filterUsers = (user) => {
        if (search.get('q'))
            return new RegExp(search.get('q'), 'i').test(user.name);
        return user;
    }

    useEffect(() => { getUsers(); }, []);

    return (
        <div>
            <div>
                <input type="text" value={textSerch} onChange={searchHandler} />

                {users.filter(filterUsers).map(user => <NavLink key={user.id} to={"/users/" + user.id} >{user.name}</NavLink>)}
            </div>
            <Outlet />
        </div>
    );
}

export default Users;
