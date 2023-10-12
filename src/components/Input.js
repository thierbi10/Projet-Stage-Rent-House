import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import React, { useState } from "react";
import COLORS from "../const/color";

const Input = ({ ...otherProps }) => {
  const [focused, setFocused] = useState(false);
  return (
    <TextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      placeholderTextColor={COLORS.dark}
      style={[
        {
          // fontFamily: Font["poppins-regular"],
          fontSize: 16,
          padding: 10,
          backgroundColor: COLORS.light,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: COLORS.blue,
          marginVertical: 5,
        },
        focused && {
          borderWidth: 3,
          borderColor: COLORS.blue,
          shadowOffset: { width: 4, height: 10},
          shadowColor: COLORS.lightBlue,
          shadowOpacity: 0.2,
          shadowRadius: 10,
        },
      ]}
      {...otherProps}
    />
  );
};

export default Input;

const styles = StyleSheet.create({});
