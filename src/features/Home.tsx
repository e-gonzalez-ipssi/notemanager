import React from "react";
import { Text, View } from "react-native";

export default function Home({ navigation }: { navigation: any }) {
    return (
        <View>
            <Text>
                Page Home
            </Text>
            <Text onPress={() => { navigation.navigate("Detail") }}>
                Aller sur la page Detail
            </Text>
        </View>
    )
}