import React from 'react';
import { View, StyleSheet,Image } from 'react-native';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

import * as Yup from 'yup'
import AppText from '../components/AppText';

import { Formik } from 'formik';

import ErrorMessage from '../components/forms/ErrorMessage';
// import AppFormField from '../components/forms/AppFormField';
// import SubmitButton from '../components/forms/SubmitButton';
// import AppForm from '../components/forms/AppForm';

import {AppForm,AppFormField,SubmitButton} from '../components/forms'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})


function LoginScreen(props) {


    return (
       <Screen>
        <Image style={styles.logo} source={require("../assets/icon.png")}/>
        <AppForm initialValues={{ email: '', password:''}} onSubmit={values => console.log(values)}
         validationSchema={validationSchema}>

        <AppFormField autoCapitalize="none" name='email' autoCorrect={false} icon="lock" placeholder="Password" 
         textContentType="password" secureTextEntry/>

        
        <AppFormField autoCapitalize="none" name='password'autoCorrect={false} icon="lock" placeholder="Password" 
         textContentType="password" secureTextEntry/>

        <SubmitButton title='Login'/>
        </AppForm>
       </Screen>
    );
}



const styles = StyleSheet.create({
    logo:{
       width:80,
       height:80,
       alignSelf:'center',
       marginTop:50,
       marginBottom:20,

    }
})

export default LoginScreen;