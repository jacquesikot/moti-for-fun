import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import TextInput from './components/TextInput';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputContainer: {
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'black',
  },
  textInput: {
    width: '100%',
    height: '100%',
    paddingLeft: 15,
  },
  placeholderContainer: {
    position: 'absolute',
    top: 14,
    left: 15,
    backgroundColor: 'white',
    paddingHorizontal: 3,
  },
  formContainer: {
    height: 120,
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '80%',
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 16,
    backgroundColor: 'blue',
  },
});

const AnimatedForm = () => {
  const formSchema = yup.object().shape({
    full_name: yup.string().required('Full Name is required'),
    email: yup.string().email().required('Email is required'),
  });

  const [focusName, setFocusName] = useState<boolean>(false);
  const [contentName, setContentName] = useState<string>('');

  const [focusEmail, setFocusEmail] = useState<boolean>(false);
  const [contentEmail, setContentEmail] = useState<string>('');

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} bounces={false}>
      <Formik
        initialValues={{ full_name: '', email: '' }}
        validationSchema={formSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, handleChange, handleBlur, handleSubmit }) => {
          return (
            <>
              <View style={styles.formContainer}>
                <TextInput
                  placeholder="Full Name"
                  touched={touched.full_name}
                  error={errors.full_name}
                  onFocus={() => setFocusName(true)}
                  onChangeText={(e) => {
                    handleChange('full_name')(e);
                    setContentName(e);
                  }}
                  onBlur={(e) => {
                    handleBlur('full_name')(e);
                    setFocusName(false);
                  }}
                  focus={focusName}
                  value={contentName}
                />
                <TextInput
                  placeholder="Email"
                  touched={touched.email}
                  error={errors.email}
                  onFocus={() => setFocusEmail(true)}
                  onChangeText={(e) => {
                    handleChange('email')(e);
                    setContentEmail(e);
                  }}
                  onBlur={(e) => {
                    handleBlur('email')(e);
                    setFocusEmail(false);
                  }}
                  focus={focusEmail}
                  value={contentEmail}
                />
              </View>
              <TouchableOpacity
                onPress={() => handleSubmit()}
                activeOpacity={0.7}
                style={styles.buttonContainer}
              >
                <Text style={{ color: 'white', fontSize: 18 }}>Submit</Text>
              </TouchableOpacity>
            </>
          );
        }}
      </Formik>
    </ScrollView>
  );
};

export default AnimatedForm;
