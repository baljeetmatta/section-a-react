import { useMemo, useState } from "react";

const WithoutMemo = () => {

   const [count,setCount]=useState(0);


    const expensiveCal = (cal:number) => {

        console.log("expensive Cal running...")
        let total = 0;
        for (let i = 1; i <= 1000000; i++)
            total += i;
        console.log("expensive Cal done...")
        console.log(total,cal);

        return (total+cal);
    }
    const result=expensiveCal(6);
    return (
        <>
            <div>
                Result :{result}
                
            </div>
            <div>
                Count:{count}
            <button onClick={()=>setCount(count+1)}>Change</button>
            </div>
        </>
    )


}
export default WithoutMemo;