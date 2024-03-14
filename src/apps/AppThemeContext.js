import React  from 'react'; 
import { ThemeProvider  } from '../components/ThemeComponent';
import ChangeTheme from '../components/ChangeTheme'; 
import Pannello from '../components/Pannello'; 
 
function  App () {    
	return (    
	<ThemeProvider>  
		  <ChangeTheme/>
		  <Pannello>			
			Figlio y
			Figlio Z 
            <Pannello/> 
			Figlio x
			<Pannello/> 
        </Pannello> 
	</ThemeProvider>  );
};

export default App;