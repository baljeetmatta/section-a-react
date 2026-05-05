import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Forms from './Forms.tsx'
import HookForm from './HookForm.tsx'
import { Provider } from 'react-redux'
import store from "./ReduxStore.ts"
import Product from './Product.tsx'
createRoot(document.getElementById('root')!).render(
  
    <Provider store={store}>

    <Product />
    </Provider>
    
  ,
)
