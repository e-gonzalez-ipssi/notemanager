import React, { useEffect, useState } from "react";
import { TextInput, TextStyle } from "react-native";
import useTheme from "../hooks/theme";

export default function BasicTextInput({
  style = {},
  input = "",
  setInput = () => { },
  placeholder = "Recherche",
  placeHolderTextColor,
  multiline = false,
}: {
  style?: TextStyle;
  input?: string;
  setInput?: (input: string) => void;
  placeholder?: string;
  placeHolderTextColor?: string;
  multiline?: boolean;
}) {
  const { color } = useTheme();
  const [value, setValue] = useState(input);

  useEffect(() => {
    setInput(value)
  }, [value]);

  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={setValue}
      multiline={multiline}
      placeholderTextColor={
        placeHolderTextColor ? placeHolderTextColor : color.background
      }
      style={{
        backgroundColor: color.secondary,
        textAlign: "center",
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 8,
        width: 340,
        color: color.background,
        ...style,
      }}
    />
  );
}
