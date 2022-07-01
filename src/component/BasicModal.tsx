import React, { ReactNode } from "react";
import { ViewStyle, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../hooks/theme";

export default function BasicModal({ children, open = false, style = {} }: { children: ReactNode, open?: boolean, style?: ViewStyle }) {
    const { color } = useTheme();
    return (
        <>
            {open && (
                <SafeAreaView
                    style={{
                        backgroundColor: color.background,
                        zIndex: 1000,
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        ...style
                    }}
                >
                    {children}
                </SafeAreaView>
            )}
        </>
    )
}
