import React, { FC } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput as RNTextInput,
  TextInputProps,
} from 'react-native';
import { View as MotiView } from 'moti';

const styles = StyleSheet.create({
  textInputContainer: {
    width: '80%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
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
  errorMessage: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    fontSize: 12,
    color: 'red',
  },
});

interface Props extends TextInputProps {
  placeholder: string;
  error?: string;
  touched?: boolean;
  focus?: boolean;
  value?: string;
}

const TextInput: FC<Props> = ({
  placeholder,
  error,
  touched,
  focus,
  value,
  ...props
}) => {
  const reBorderColor = !touched ? 'black' : error ? 'red' : 'green';

  const returnTranslateY = () => {
    if (focus) {
      return -35;
    } else if (!focus && value !== '') {
      return -35;
    } else if (!focus && value == '') {
      return 0;
    }
  };

  const returnScale = () => {
    if (focus) {
      return 0.7;
    } else if (!focus && value !== '') {
      return 0.7;
    } else if (!focus && value == '') {
      return 1;
    }
  };

  return (
    <View style={[styles.textInputContainer, { borderColor: reBorderColor }]}>
      <RNTextInput style={styles.textInput} {...props} />
      {error && touched && <Text style={styles.errorMessage}>{error}</Text>}
      <MotiView
        animate={{
          translateY: returnTranslateY(),
          scale: returnScale(),
        }}
        // transition={{ type: 'timing', duration: 350 }} Add this if you do not like the spring animation effect
        style={styles.placeholderContainer}
      >
        <Text style={{ color: 'grey', fontSize: 18 }}>{placeholder}</Text>
      </MotiView>
    </View>
  );
};

export default TextInput;
