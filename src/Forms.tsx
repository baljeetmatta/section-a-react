import { useState } from "react"

const Forms=()=>{
    const [errors,setErrors]=useState({
        name:"",
        age:""
    })
    const [formData,setFormData]=useState({
        name:"",
        age:""
    })
    const changeHandler=(evt:React.ChangeEvent<HTMLInputElement>)=>{

        const {name,value}=evt.target;

        
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }

    const clickHandler=()=>{
        
        if(parseInt(formData.age)<18)
        {
            setErrors((prev)=>({
                ...prev,
                "age":"Not a valid Age"
            }))
            return;

        }
        console.log(formData);

        console.log("submit form");

    }
    return (
        <>
        <div>
            <form>
            <input type="text" required value={formData.name} name="name" onChange={changeHandler}/>
            <input type="number" min={18} value={formData.age} name="age" onChange={changeHandler}/>
            {errors.age}
            <input type="submit" value="Send" onClick={clickHandler}/>
            </form>
        </div>
        </>
    )
}
export default Forms;
