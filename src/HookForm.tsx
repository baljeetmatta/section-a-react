// import {useForm} from "react-hook-form"
// import { DevTool } from '@hookform/devtools'; 
// import './App.css'
// const HookForm=()=>{

//     const {handleSubmit,register,watch,formState,control}=useForm({
//         defaultValues:{
//             name:"Default",
//             age:"0"
//         }
//     });
//     const formvalues=watch(["name","age"]);


//     const {errors}=formState;

//     const mySubmit=(data:any)=>{

//         console.log(data);
//     }
//     return (
//         <>

//         <div>
//              <DevTool control={control} placement="top-left" />
//             {JSON.stringify(formvalues)}
//             <form onSubmit={handleSubmit(mySubmit)}>
//             <input type="text" {...register("name",{
//                 required:"Name is required",
//                 // validate:{
//                 //     adminError:value=>{
//                 //         return value!=="admin"||"name must not be admin"

//                 //     },
//                 //     lengthError:value=>{
//                 //         return value.minLength<=3
//                 //     }

//                 // }
// //                 validate: value => {
// //   return value !== "admin" || "name must not be admin";
// // }
                
//                 })}/>
//                 {errors.name ?<p className="error-msg">{errors.name.message}</p>:""}

//             <input type="text" {...register("age",{
//                 valueAsNumber:true,
//                 required:"Age is required",
//                 min:{
//                     value:18,
//                     message:"Value must be mininum of 18"
//                 },
//                 max:{
//                     value:40,
//                     message:"Max age is 40"
//                 },
               
//             })}/>
//             {errors.age ?<p className="error-msg">{errors.age.message}</p>:""}
//             <input type="submit"/>

            

//             </form>

//         </div>
//         </>
//     )

// }
// export default HookForm;
// //required,min,max,minLength,maxLength,pattern, validate


import {useForm} from "react-hook-form"
import { DevTool } from '@hookform/devtools'; 
import './App.css'
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "./validation/userSchema";
type FormType={
    name:string,
    age:number,
    email:string,
    skills:[],
    password:string
}
const HookForm=()=>{

    const {handleSubmit,register,watch,formState,control}=useForm({
      
        resolver:yupResolver(userSchema)
        
    });
    const formvalues=watch(["name","age"]);


    const {errors}=formState;

    const mySubmit=(data:FormType)=>{

        console.log(data);
    }
    return (
        <>

        <div>
             <DevTool control={control} placement="top-left" />
            {JSON.stringify(formvalues)}
            <form onSubmit={handleSubmit(mySubmit)}>
            <input type="text" {...register("name")}/>
                {errors.name ?<p className="error-msg">{errors.name.message}</p>:""}

            <input type="text" {...register("age")}/>
            {errors.age ?<p className="error-msg">{errors.age.message}</p>:""}
            <input type="password" {...register("password")}/>
             <input type="password" {...register("cpassword")}/>
             {errors.cpassword? <p className="error-msg">{errors.cpassword.message}</p>:""}
          <input type="text" {...register("email")}/>
            {errors.email? <p className="error-msg">{errors.email.message}</p>:""}
          
          <input type="checkbox" {...register("skills")} value="one"/>One
          <input type="checkbox" {...register("skills")} value="two"/>Two
          <input type="checkbox" {...register("skills")} value="three"/>Three
           {errors.skills? <p className="error-msg">{errors.skills.message}</p>:""}
          
            <input type="submit"/>

            //zod

            </form>

        </div>
        </>
    )

}
export default HookForm;
//required,min,max,minLength,maxLength,pattern, validate

