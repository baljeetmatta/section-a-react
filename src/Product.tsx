import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import type { RootState } from "./ReduxStore";
import { increment, incrementByAmount } from "./counterSlice";

const Product=()=>{
    const dispatch=useDispatch();
    const selector=useSelector((state:RootState)=>state.counter.value)
console.log(selector);

    return(
        <>
        <Header/>
        <div id="product">
            <div>
                <h3>Product 1</h3>
                <p>Some description about product</p>
            </div>
            <div>
                <p>1200</p>
                <button onClick={()=>dispatch(incrementByAmount(5))}>Add to Cart</button>
         
            </div>
        </div>
        </>
    )

}
export default Product;
