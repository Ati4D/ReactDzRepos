import React, { useState, useEffect } from 'react';
import ThemeContext from '../contexts/ThemeContext'

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') ?? 'dark');

    const setThemeLight = ()=>{
        setTheme('light');
    }
    const setThemeDark = ()=>{
        setTheme('dark');
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, setThemeLight, setThemeDark}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
