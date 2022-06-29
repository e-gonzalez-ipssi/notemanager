import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../hooks/theme";
import ImageSelector from "../component/ImageSelector";

export default function New({ navigation }: { navigation: any }) {
    const {color}=useTheme();
    return (
        <SafeAreaView style={{flex: 1, marginTop:20}}>
            <Text>
                Page New
            </Text>
            <Text onPress={() => { navigation.navigate("Detail") }}>
                Aller sur la page Detail
            </Text>
            <ImageSelector onImage={() => { }} />
        </SafeAreaView>
    )
}