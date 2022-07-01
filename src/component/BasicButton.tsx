import React, { ReactNode } from "react";
import { Text, TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import useTheme from "../hooks/theme";

export default function BasicButton({
    children,
    onPress = () => { },
    style = {},
    textStyle = {},
}: {
    children?: ReactNode;
    onPress?: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}) {
    const { color } = useTheme();
    return (
        <TouchableOpacity
            style={{
                backgroundColor: color.secondary,
                paddingVertical: 18,
                paddingHorizontal: 24,
                borderRadius: 10,
                margin: 10,
                ...style,
            }}
            onPress={onPress}
        >
            <Text
                style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "#327389",
                    textAlign: "center",
                    ...textStyle,
                }}
            >
                {children}
            </Text>
        </TouchableOpacity>
    );
}
