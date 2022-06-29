import React from "react";
import { Text, View } from "react-native";
import ImageSelector from "../component/ImageSelector";

export default function New({ navigation }: { navigation: any }) {
    return (
        <View>
            <Text>
                Page New
            </Text>
            <Text onPress={() => { navigation.navigate("Detail") }}>
                Aller sur la page Detail
            </Text>
            <ImageSelector onImage={() => { }} />
        </View>
    )
}