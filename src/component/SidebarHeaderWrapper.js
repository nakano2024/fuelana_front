import { useContext } from "react"
import { IsMobile } from "../context"
import { FixedSidebar } from "./FixedSidebar";
import { MobileHeader } from "./MobileHeader";


export const SidebarHeaderWrapper = () => {

    const isMobile = useContext(IsMobile);

    if(isMobile)return<MobileHeader/>       
    return<FixedSidebar/>
    
}