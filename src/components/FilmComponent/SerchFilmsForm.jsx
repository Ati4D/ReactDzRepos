import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const SerchFilmsForm = ({ setFilms }) => {
    const [search, setSearch] = useSearchParams();

    const [name, setName] = useState(search.get('fname') ?? '');
    const [type, setType] = useState(search.get('type') ?? '');
    const [year, setYear] = useState(search.get('year') ?? '');

    useEffect(() => {
        setSearch({ fname: name, type: type, year: year });
    },
        [name, type, year]);

    const submitHandler = async (e) => {
        e.preventDefault();

        let query = 'http://www.omdbapi.com/?apikey=eb364da9';
        query += (name ? "&s=" + name : '');
        query += (type ? "&type=" + type : '');
        query += (year ? "&y=" + year : '');

        console.log('q=' + query);
        const res = (await axios.get(query));
        console.log(res);
        if (res.data.Response === "True")
            setFilms(res.data.Search);
        else setName('Error query');
    };

    const getYears = () => {
        const getYear = (i) => {
            return <option key={i} value={i}>{i}</option>
        }
        let l = [];
        for (let i = 1970; i <= new Date().getFullYear(); i++) {
            l.push(getYear(i));
        }
        return l;
    }

    const nameHandler = (e) => {
        setName(e.target.value);
    }
    const typeHandler = (e) => {
        setType(e.target.value);
    }
    const yearHandler = (e) => {
        setYear(e.target.value);
    }



    return (
        <form className='f-form' onSubmit={submitHandler}>
            <h2>Serch Form</h2>
            <div>
                <label htmlFor="fname">Write name: </label>
                <input type="text" name="fname" id="text" value={name} onChange={nameHandler} />
            </div>
            <div>
                <label htmlFor="fname">Select type: </label>
                <select name="type" id="" value={type} onChange={typeHandler}>
                    <option value=''> </option>
                    <option value="movie">movie</option>
                    <option value="series">series</option>
                </select>
            </div>
            <div>
                <label htmlFor="fname">Select year: </label>
                <select name="year" id="" value={year} onChange={yearHandler}>
                    <option value=''> </option>
                    {getYears()}
                </select>
            </div>
            <input type="submit" value="Serch" />
        </form>
    );
}

export default SerchFilmsForm;
