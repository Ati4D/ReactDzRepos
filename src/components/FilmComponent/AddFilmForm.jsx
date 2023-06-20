import React, {useState} from 'react';
import LIComponent from './LIComponent';

const AddFilmForm = ({addFilm}) => {
  const [name, setName] = useState('');
  const [year, setYear] = useState(2000);
  const [img, setImg] = useState('');
  const [dir, setDir] = useState('');
  const [descr, setDescr] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (name.trim().length && img.trim().length && dir.trim().length && descr.trim().length) { 
          addFilm(name, year, img, dir, descr);
          setName('');
          setYear(2000);
          setImg('');
          setDir('');
          setDescr('');
        }
    };
    
      const handleChangeName = (e) => { 
        setName(e.target.value);
      }
      const handleChangeYear = (e) => { 
        setYear(e.target.value);
      }
      const handleChangeImg = (e) => { 
        setImg(e.target.value);
      }
      const handleChangeDir = (e) => { 
        setDir(e.target.value);
      }
      const handleChangeDescr = (e) => { 
        setDescr(e.target.value);
      }
      

    return (
        <form className='f-form' onSubmit={submitHandler}>
            <h2>Add Film Form</h2>
            <LIComponent descr="Name" type="text" val={name} chngeAct={handleChangeName}/>
            <LIComponent descr="Year" type="number" val={year} chngeAct={handleChangeYear}/>
            <LIComponent descr="Image" type="text" val={img} chngeAct={handleChangeImg}/>
            <LIComponent descr="Director" type="text" val={dir} chngeAct={handleChangeDir}/>
            <LIComponent descr="Description" type="text" val={descr} chngeAct={handleChangeDescr}/>
            <input type="submit" value="Add"/>
        </form>
    );
}

export default AddFilmForm;
