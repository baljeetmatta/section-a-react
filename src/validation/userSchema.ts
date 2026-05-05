import * as yup from "yup"
import { passwordSchema } from "./passwordSchema"
export const userSchema=yup.object({
    name:yup.string()
    .required("name must be specfied")
    .trim()
    .lowercase()
    .min(4,"name must be of atleast 4 characters"),
    age:yup.number()
    .required("age must be specified"),
    password:passwordSchema,
    //password:yup.string().required("Password is required"),
    cpassword:yup.string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")],"it must with the password"),
    email:yup.string()
    .when("age",{
        is:(age:number)=>age>=18,
        then:schema=>
            schema.required("Email must be given")
        .email("Emamil Must be a valid "),
        otherwise:schema=>
            schema.notRequired()

    }).test("EmailError","Email Already exits",
        async value=>{
            if(value=="admin@gmail.com")
                return false;
            else 
                return true;

            //return value=="admin";

            // let res=await fetch("");
            // let output=await res.json();
            // if(output)
            //     return false;
            // else 
            //     return true;
        }
        

        
    ),
    skills:yup.array().of(yup.string()).min(2,"Atleast two skills")

    // .required("Email. must be give")
    // .email("Type must a valid email")

    



})