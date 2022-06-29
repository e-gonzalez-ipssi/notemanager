import React from "react";
import { ViewStyle } from "react-native";
import useTheme from "../hooks/theme";
import BasicButton from "./BasicButton";
import { Feather } from '@expo/vector-icons';

export default function ThemeButton({ style = {} }: { style?: ViewStyle }) {
    const { color, modify } = useTheme();
    const handleThemeSwap = () => {
        modify((old: boolean) => !old)
    }
    const icon = color.theme ? <Feather name="sun" size={24} color={color.text} /> : <Feather name="moon" size={24} color={color.text} />
    return (
        <BasicButton
            onPress={handleThemeSwap}
            style={{
                ...style
            }}
        >
            {icon}
        </BasicButton>
    )
}