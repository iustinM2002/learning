import { createContext,useState } from "react";
interface init{
    activeNav:Boolean,
    setActiveNav:React.Dispatch<React.SetStateAction<boolean>>
}
let initValue!:init;

export const NavContext = createContext(initValue);


export const NavProvider = (props:any) => {
    const [activeNav,setActiveNav] = useState(false);
    return <NavContext.Provider value={{activeNav,setActiveNav}}>{props.children}</NavContext.Provider>
}