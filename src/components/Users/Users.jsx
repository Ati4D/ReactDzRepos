import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './style.css';
import UsersContext from '../../contexts/UsersContext';


const Users = () => {
    const users = useContext(UsersContext);
    
    const [search, setSearch] = useSearchParams();
    const [textSerch, setTextSerch] = useState(search.get('q') ?? '');

    const searchHandler = (e) => {
        setTextSerch(e.target.value);
        setSearch({ q: e.target.value });
    }

    const filterUsers = (user) => {
        if (search.get('q'))
            return new RegExp(search.get('q'), 'i').test(user.name);
        return user;
    }


    return (
        <div className='main'>
            <div className='cont'>
                <input type="text" value={textSerch} onChange={searchHandler} />

                {users.filter(filterUsers).map(user => <NavLink key={user.id} to={"/users/" + user.id} >{user.name}</NavLink>)}
            </div>
            <Outlet />
        </div>
    );
}

export default Users;
