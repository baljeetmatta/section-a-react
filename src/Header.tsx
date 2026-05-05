import type { RootState } from "./ReduxStore";
import { useDispatch, useSelector } from "react-redux";

const Header=()=>{
 const dispatch=useDispatch();
    const selector=useSelector((state:RootState)=>state.counter.value)
    return (

        <>
        <div id="header">
            <img/>
            <div>
            <a href="/">Home</a> 
            <a href="/">Contact</a>
            </div>
            <div>
                Cart({selector})
            </div>
        </div>
        </>
    )

}
export default Header;
