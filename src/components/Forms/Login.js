import React from 'react';
import {Formik} from "formik" 
import * as Yup from "yup"    
import ErrorDialog from "./ErrorDialog"
import { login } from '../../services/loginService';


// Librerías en uso: Yup y Formik 
// formik para enviar // Yup para validar

const validationSchema = Yup.object().shape(  {
   
    email: Yup.string()
        .email("Correo electrónico inválido")
        .required("Campo necesario"),

    password: Yup.string()
        .required("Campo necesario")
        .min(3, "Mínimo 3 caracteres"),
})

////////////FORMULARIO

export default function LoginForm (){
  

    return (
    <div className="uk-text-center uk-padding">
        
    <Formik
        //aqui estan los valores del formulario (Schemas)
        initialValues= { {email: "", password:"" }}
        validationSchema={validationSchema}
        
        onSubmit= { (values, {setSubmitting, resetForm} )=>{
            setSubmitting(true)
            login(values)
            alert("login realizado con éxito");
            //aqui el redirect -> podría ser con .then
            resetForm();
            setSubmitting(false)
            // aqui se pondría una pestaña de redirect
        }}
       
        >
            {
             ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}  )=>(
                <form onSubmit={handleSubmit}>
                    
                <div>
                    <label htmlFor="email">     Email:            </label>
                    <input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Escribe el correo"  
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    className={touched.email && errors.email ? "uk-form-danger uk-text-secondary uk-text-center uk-input" : "uk-input uk-text-center uk-form-success uk-text-secondary"}
                    />

                    <ErrorDialog
                    touched={touched.email}
                    message={errors.email}
                    /> 
                </div>

                <div>
                    <label htmlFor="password">     Password:            </label>
                    <input 
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Escribe tu password"  
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={touched.password && errors.password ? "uk-form-danger uk-text-secondary uk-text-center uk-input" : "uk-input uk-text-center uk-form-success uk-text-secondary"}
                    />

                    <ErrorDialog
                    touched={touched.password}
                    message={errors.password}
                    /> 
                </div>

                <div className="uk-submit">
                    <button 
                    
                    type="submit"
                    disabled={isSubmitting} // no se pueda apretar mientras se sube}
                    className="uk-button uk-button-primary uk-align-center"
                    >      SUBMIT          </button>
                </div>


                </form>
                )}
        
    </Formik>
    </div>

    
    )}

