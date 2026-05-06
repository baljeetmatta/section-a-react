import { useCallback, useMemo, useState } from "react";

const WithMemo = () => {

    const [count,setCount]=useState(0);
    const [text,setText]=useState("");

const expensiveCal=useCallback((cal:number)=>{
 console.log("expensive Cal running...")
        let total = 0;
        for (let i = 1; i <= 1000000; i++)
            total += i;
        console.log("expensive Cal done...")
        console.log(total,cal);

        return (total+cal);

},[])

    // const expensiveCal = (cal:number) => {

    //     console.log("expensive Cal running...")
    //     let total = 0;
    //     for (let i = 1; i <= 1000000; i++)
    //         total += i;
    //     console.log("expensive Cal done...")
    //     console.log(total,cal);

    //     return (total+cal);
    // }

   // const result=expensiveCal(6);
    const result =useMemo(()=> expensiveCal(count),[count]);
    return (
        <>
            <div>
                Result :{result}
                
            </div>
            <div>
                Count:{count}, {text}
            <button onClick={()=>setCount(count+1)}>Change</button>
            <button onClick={()=>setText("Hello")}>Change Text</button>
            </div>
        </>
    )


}
export default WithMemo;