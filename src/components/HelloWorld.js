 
import '../assets/style/HelloWorld.css';    

const appHeader = { 
    backgroundColor: "#FF0000",
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white"
  };
 

export function HelloWorld( props  ){
    return <div class="HW-header"><h1> Hello Worlds! { props.msg }</h1></div>
}

export function HelloMoon(){
    return <div style={appHeader}><h1> Hello Moon! Ciao a tutti</h1></div>
}

export default HelloWorld; 