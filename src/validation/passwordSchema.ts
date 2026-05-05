import * as yup from "yup"
export const passwordSchema=yup.string()
.required("Password is required")
.min(5,"Minimum 5 characters")