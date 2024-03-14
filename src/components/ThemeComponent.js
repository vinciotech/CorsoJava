import {createContext, useState, useContext} from 'react';

export const ThemeContext = createContext();
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');  

    const switchTheme = (newTheme) => {
        setTheme (newTheme);
    }
    return (
        <ThemeContext.Provider value={ {theme, switchTheme}}>   
            {children}
    	</ThemeContext.Provider>  
    );

}

export const useTheme = () => useContext(ThemeContext);

