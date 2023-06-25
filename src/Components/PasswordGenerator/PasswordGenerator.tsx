import React , {useState} from 'react'
import { Field, Form, Formik } from 'formik';
import {CustomCheckbox, CustomInput} from '../../utils/customComponents.tsx'
import './pass.css'

type passwordTypes = {
    length: number
    isUppercase: boolean
    isLowercase: boolean
    isSpecial: boolean 
    isNumbers: boolean
}
const PasswordGenerator = (): JSX.Element => {
    const formInitialValue : passwordTypes = {
        length: 8,
        isLowercase: false,
        isUppercase: false,
        isSpecial: false,
        isNumbers: false
    }
    const [password, setPassword] = useState<string>('');
    const handleSubmit = (values: passwordTypes)=>{
        const length = values.length; // Length of the generated password
        const lowerchars = 'abcdefghijklmnopqrstuvwxyz'
        const upperchars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        const specialchars = '!@#$%&*()'
        const numberchars = '0123456789'
        let charset = ''; // Characters to include in the password
        if(values.isLowercase){
            charset = charset + lowerchars
        }
        if(values.isNumbers){
            charset = charset + numberchars
        }
        if(values.isSpecial){
            charset = charset + specialchars
        }
        if(values.isUppercase){
            charset = charset + upperchars
        }else{
            charset = lowerchars+upperchars+specialchars+numberchars
        }
        let result = '';
        for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        result += charset.charAt(randomIndex);
        }
        setPassword(result);
    }
   const copy =async ()=>{
            await navigator.clipboard.writeText(password);
    }
  return (
    <div className='container mygenretaor'>
        {
                password&& (
                    <div className='passwordcontainer text-start px-3 py-2 rounded-lg'> {
                        password
                    } 
                    <i className="fa-solid fa-copy cpybtb cp" onClick={copy}></i>
                    </div>
                )
        }
     
            <Formik
                initialValues={formInitialValue}
                enableReinitialize
                onSubmit={(values) => {
                  handleSubmit(values);
                }}
              >
                {({ values }) => (
                  <Form className='passwordform'>
                            <Field
                              type="number"
                              component={CustomInput}
                              inputClassName="my-2 pl-2 nameInput"
                              name="length"
                            />
                            <Field
                              type="checkbox"
                              component={CustomCheckbox}
                              inputClassName="my-2 pl-2 nameInput"
                              name="isUppercase"
                              val={values.isUppercase}
                              label={
                                <span>
                                  Include UpperCase
                                </span>
                              }
                            />
                            <Field
                              type="checkbox"
                              component={CustomCheckbox}
                              inputClassName="my-2 pl-2 nameInput"
                              name="isLowercase"
                              val={values.isLowercase}
                              label={
                                <span>
                                  Include LowerCase
                                </span>
                              }
                            />
                            <Field
                              type="checkbox"
                              component={CustomCheckbox}
                              inputClassName="my-2 pl-2 nameInput"
                              name="isSpecial"
                              val={values.isSpecial}
                              label={
                                <span>
                                  Include Special chars
                                </span>
                              }
                            />
                            <Field
                              type="checkbox"
                              component={CustomCheckbox}
                              inputClassName="my-2 pl-2 nameInput"
                              name="isNumbers"
                              val={values.isNumbers}
                              label={
                                <span>
                                  Include Numbers
                                </span>
                              }
                            />
                            <button type="submit" className="btn btn-success my-3 " >Generate password</button>
                  </Form>
                )}
        </Formik>
    </div>
  )
}

export default PasswordGenerator