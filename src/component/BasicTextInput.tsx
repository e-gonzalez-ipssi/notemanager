import React from "react";
import { TextInput, FlexStyle, TextStyle } from "react-native";
import useTheme from "../hooks/theme";

export default function BasicTextInput({
  style = {},
  placeholder = "Recherche",
  multiline = false,
  setInput = () => {},
}: {
  style?: TextStyle;
  placeholder?: string;
  multiline?: boolean;
  setInput: (input: string) => void;
}) {
  const { color } = useTheme();

  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={setInput}
      multiline={multiline}
      style={{
        backgroundColor: color.secondary,
        textAlign: "center",
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 8,
        width: 340,
        ...style,
      }}
    />
  );
}
