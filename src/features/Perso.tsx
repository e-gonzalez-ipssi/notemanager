import React from "react";
import { Text, View } from "react-native";

export default function Detail({ navigation }: { navigation: any }) {
    return (
        <View>
            <Text>
                Page Detail
            </Text>

            <Text onPress={() => { navigation.navigate("Home") }}>
                Aller sur la page Home
            </Text>
        </View>
    )
}