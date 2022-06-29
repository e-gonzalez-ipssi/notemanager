import React, { ReactNode } from "react";
import CheckBox from "expo-checkbox";
import { View, ViewStyle, Text } from "react-native";
import useTheme from "../hooks/theme";

export default function BasicCheckBox(
    { children, value = false, onValueChange = () => { }, disabled = false, style = {} }:
        { children?: ReactNode, value?: boolean, onValueChange?: (input: boolean) => void, disabled?: boolean, style?: ViewStyle }
) {
    const { color } = useTheme();
    return (
        <View
            style={{
                flexDirection: "row",
                ...style
            }}
        >
            <CheckBox
                value={value}
                onValueChange={(newValue) => onValueChange(newValue)}
                style={{
                    backgroundColor: color.secondary,
                    width: 30,
                    height: 30,
                    borderRadius: 8
                }}
                disabled={disabled}
            />
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: color.text,
                    textAlign: "center",
                    marginLeft: 5
                }}
            >
                {children}
            </Text>
        </View>

    )
}