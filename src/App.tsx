import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {useForm} from "react-hook-form";
function App() {

  type FormType={
    name:string,
    age:string
  }

  const {
    register,
    handleSubmit,
    formState:{errors}  
  }=useForm<FormType>();
  const submitData=(data:FormType)=>{
    console.log(data);
  }
return (
  <>
  <form onSubmit={handleSubmit(submitData)}>
    <input {...register("name")} type="text"/>
     <input {...register("age")} type="text"/>
  <input type="submit" value="Send"/>
  </form>
  </>
)
  // const nameRef=useRef<HTMLInputElement|null>(null);
  // const ageRef=useRef<HTMLInputElement|null>(null);
  

  // const clickHandler=()=>{
   
  //     alert(nameRef?.current?.value);


  // }
  // return (
  //   <>
  //   <form>
  //     <input ref={nameRef} type="text"/>
  //     <input type="text" ref={ageRef}/>
  //     <input type="button" onClick={clickHandler} value="Send"/>


  //   </form>
  //   </>
  // )
//   const [formData,setFormData]=useState({
//     name:"",
//     age:""
//   });
// const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
//   const {name,value}=e.target;
//   setFormData((prev)=>(
//    {
//      ...prev,
//     [name]:value
//    })
  
//   )

// //console.log(name,value);

// }
// const clickHandler=()=>{
  
// alert(formData.name+" "+formData.age);

// }
//   return (
//     <>
//     <form>
//       <input name="name" type="text" onChange={handleChange}/>
//       <input type="text" name="age" onChange={handleChange}/>
//       <input type="button" value="Send" onClick={clickHandler}/>

      
//     </form>
//     </>
//   )
//   const [name,setName]=useState("");
// const [age,setAge]=useState("");

//   const nameChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
//     setName(e.target.value);

//   }
//   const ageChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
//     setAge(e.target.value);

//   }
//   const clickHandler=()=>{
//    // alert(name+""+age);
//     setName("Test");

//   }
//   return (
//     <>
//      <form>
//       <input type="text" onChange={nameChangeHandler} placeholder="you name" value={name} />
//       <input type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setAge(e.target.value)}} placeholder="you age" />
     
//       <input type="button" onClick={clickHandler} value="Submit"/>
//            </form>
//     </>
//   )
}

export default App
