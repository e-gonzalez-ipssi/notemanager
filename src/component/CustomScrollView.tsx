import React, { ReactNode } from "react";
import { View, ScrollView } from "react-native";

export default function CustomScrollView({ children, refresh = () => { } }: { children?: ReactNode, refresh?: () => void }) {
    return (
        <View style={{ height: "100%" }}>
            <ScrollView
                onScroll={({ nativeEvent }) => {
                    if (isCloseToTop(nativeEvent)) {
                        refresh()
                    }
                    if (isCloseToBottom(nativeEvent)) {
                        refresh()
                    }
                }}
            >
                {children}
            </ScrollView>
        </View>
    )
}

function isCloseToBottom({ layoutMeasurement, contentOffset, contentSize }: { layoutMeasurement: any, contentOffset: any, contentSize: any }) {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
}

function isCloseToTop({ layoutMeasurement, contentOffset, contentSize }: { layoutMeasurement: any, contentOffset: any, contentSize: any }) {
    return contentOffset.y == 0;
}