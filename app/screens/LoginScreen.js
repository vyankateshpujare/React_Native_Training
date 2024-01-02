import { Image, StyleSheet, Text } from "react-native";
import Screen from "../component/Screen";
import AppTextInput from "../component/AppTextInput";
import AppButton from "../component/AppButton";
// import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../component/ErrorMessage";
import AppFormField from "../component/AppFormField";
import AppFormButton from "../component/AppFormButton";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("email"),
  password: Yup.string().required().label("password"),
});
const LoginScreen = () => {
  // const [email ,setEmail]=useState("");
  // const [password ,setPassword]=useState("");

  return (
    <Screen>
      <Image
        style={styles.logo}
        source={require("../assets/logo.jpeg")}
      ></Image>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={loginValidationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppFormField
              name="email"
              icon="email"
              autoCapitalize="none"
              placeholder="Email"
              keyboardType="email-address"
              autoCorrect={false}
              iconColor="#f87171"
            />
            <AppFormField
              name="password"
              icon="lock"
              autoCapitalize="none"
              placeholder="Password"
              autoCorrect={false}
              secureTextEntry
              iconColor="#f87171"
            />
            <AppFormButton content="Login" color="#f87171"/>

            {/* <AppTextInput 
                            icon="email"
                            autoCapitalize="none"
                            placeholder="Email" 
                            keyboardType="email-address"
                            autoCorrect={false}
                            iconColor="#f87171"
                            onBlur={()=>setFieldTouched("email")}
                            onChangeText={handleChange("email")}
                            />
                        <ErrorMessage error={errors.email} touched={touched.email}/> */}
            {/* <AppTextInput 
                            icon="lock" 
                            autoCapitalize="none" 
                            placeholder="Password" 
                            autoCorrect={false}
                            secureTextEntry
                            iconColor="#f87171"
                            onBlur={()=>setFieldTouched("password")}
                            onChangeText={handleChange("password")}
                            />
                        <ErrorMessage error={errors.password} touched={touched.password}/> */}
            {/* <AppButton content="Login" color="#f87171" onPress={handleSubmit} /> */}
          </>
        )}
      </Formik>
      {/* <AppTextInput 
                icon="email"
                autoCapitalize="none"
                placeholder="Email" 
                keyboardType="email-address"
                autoCorrect={false}
                iconColor="#f87171"
                onChangeText={(text)=>setEmail(text)}
                 />
            <AppTextInput 
                icon="lock" 
                autoCapitalize="none" 
                placeholder="Password" 
                autoCorrect={false}
                secureTextEntry
                iconColor="#f87171"
                onChangeText={(text)=>setPassword(text)}

                 />
            <AppButton content="Login" color="#f87171" onPress={()=>console.log("details",email,password)}/> */}
    </Screen>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 80,
    width: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
export default LoginScreen;
