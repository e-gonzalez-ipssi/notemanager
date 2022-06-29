import React from "react";
import { ViewStyle, Button } from "react-native";
import useTheme from "../hooks/theme";

export default function ThemeButton({ style = {} }: { style?: ViewStyle }) {
    const { color, modify } = useTheme();
    const handleThemeSwap = () => {
        modify((old: boolean) => !old)
    }

    return (
        <Button onPress={handleThemeSwap} title="Change Theme" />
    )
}