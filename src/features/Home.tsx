import React from "react";
import { Text, View } from "react-native";
import ImageSelector from "../component/ImageSelector";

export default function Home({ navigation }: { navigation: any }) {
    return (
        <View>
            <Text>
                Page Home
            </Text>
            <Text onPress={() => { navigation.navigate("Detail") }}>
                Aller sur la page Detail
            </Text>
            <ImageSelector onImage={() => { }} />
        </View>
    )
}