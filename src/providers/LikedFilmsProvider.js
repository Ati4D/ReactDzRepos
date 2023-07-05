import React, { useEffect, useState } from 'react';
import LikedFilmsContext from '../contexts/LikedFilmsContext';

const LikedFilmsProvider = ({ children }) => {

    const ArrToStr = (arr) => {
        let str = '';
        for (const i of arr) {
            str += i.name + "$" + i.year + "$" + i.image + '|';
        }
        return str;
    }
    
    const StrToArr = (str) => {
        let arr = [];
        if(str.length)
        {
            let elements = str.split('|');
            for (const i of elements) {
                if(i)
                {
                    const temp = i.split('$');
                    arr.push({name: temp[0], year: temp[1], image: temp[2]});
                }
            }
        }
        return arr;
    }

    let tryGetDefaultArr = () => {
        let str = localStorage.getItem('films');
        let arr = str ? StrToArr(str) : [];
        return arr;
    } 

    const [films, setFilms] = useState([].concat(tryGetDefaultArr()));

    const addFilm = (film) => {
        setFilms([...films, film]);
    }

    const checkFilm = (film) => {
        return films.some(f =>
            f.name + f.year + f.image === film.name + film.year + film.image
        );
    }

    const removeFilm = (film) => {
        setFilms(films.filter(
            e => e.name + e.year + e.image !== film.name + film.year + film.image
        ));
    }

    useEffect(() => {
        localStorage.setItem('films', ArrToStr(films));
    }, [films]);

    return (
        <LikedFilmsContext.Provider value={{ addFilm, removeFilm, checkFilm, films }}>
            {children}
        </LikedFilmsContext.Provider>
    );
}

export default LikedFilmsProvider;
