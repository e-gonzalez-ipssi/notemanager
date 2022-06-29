import React from "react";
import { Text, View } from "react-native";

export default function Perso({ navigation }: { navigation: any }) {
    return (
        <View>
            <Text>
                Page Perso
            </Text>

            <Text onPress={() => { navigation.navigate("Home") }}>
                Aller sur la page Home
            </Text>
        </View>
    )
}