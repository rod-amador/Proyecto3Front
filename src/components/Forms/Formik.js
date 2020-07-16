import React from 'react';
import {Formik} from "formik" 
import * as Yup from "yup"    
import ErrorDialog from "./ErrorDialog"
import {signup} from '../../services/authService';


// Librerías en uso: Yup y Formik 
// formik para enviar // Yup para validar

const validationSchema = Yup.object().shape(  {
    name: Yup.string()            
        .required("Campo necesario")
        .min(2, "Tu nombre debe ser más largo")
        .max(20, "Tu nombre es muy largo"),
   
    email: Yup.string()
        .email("Correo electrónico inválido")
        .required("Campo necesario"),

    password: Yup.string()
        .required("Campo necesario")
        .min(5, "Mínimo 5 caracteres"),
        
    origin: Yup.string()
        .required("Campo necesario")
})

////////////FORMULARIO

export default function FormikFormUser (){
   
    return (
    <div className="uk-text-center uk-padding">
        
    <Formik
        //aqui estan los valores del formulario (Schemas)
        initialValues= { {name: "", email: "", origin: "", password:""    }}
        validationSchema={validationSchema}
        
        onSubmit= { (values, {setSubmitting, resetForm} )=>{
            setSubmitting(true)
            signup(values)
            alert("Usuario creado con éxito");
            resetForm();
            setSubmitting(false)
           
        }}
       
        >
            {
             ({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}  )=>(
                <form onSubmit={handleSubmit}>
                    
                <div>
                    <label htmlFor="name" >    Name:       </label>
                    <input 
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nombre"  
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className={touched.name && errors.name ? "uk-form-danger uk-text-secondary uk-text-center uk-input" : " uk-input uk-form-success uk-text-secondary uk-text-center"} 
                   />

                    <ErrorDialog
                    touched={touched.name}
                    message={errors.name}
                    /> 

                </div>

                <div>
                    <label htmlFor="email">     Email:            </label>
                    <input 
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Escribe el correo a registrar"  
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
                    placeholder="Escribe un password"  
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

                <div>
                    <label htmlFor="origin"> ¿Cómo te enteraste de esta página?        </label>
                    <select 
                        name="origin"
                        value={values.origin}
                        id="origin"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={touched.origin && errors.origin ? "uk-form-danger uk-text-secondary uk-text-center uk-input" : "uk-input uk-text-center uk-form-success uk-text-secondary"}
                    >
                            <option value="null"            label="Escoge una de las siguientes opciones"   />
                            <option value="marketing"       label="Marketing"                               />
                            <option value="facebook"        label="Facebook"                                />
                            <option value="google"          label="Google"                                  />
                            <option value="youtube"         label="Youtube"                                 />
                            <option value="conocidos"       label="Conocidos"                               />
                    </select>

                    <ErrorDialog
                    touched={touched.origin}
                    message={errors.origin}
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

