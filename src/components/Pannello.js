import React, { useContext} from 'react';
import themeStyles from '../assets/style/themeStyles.js';
import { useTheme } from './ThemeComponent'; 

export default function Pannello({children}) {
	const { theme } = useTheme();  

	const currentStyle = themeStyles[theme];

    console.log(currentStyle);
	return <div style={currentStyle}>[{children}]</div>
}