import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../hooks/theme";

export default function Home({ navigation }: { navigation: any }) {
    const {color}=useTheme();
    return (
        <SafeAreaView style={{flex: 1, marginTop:20}}>
            <Text style={{color:color.text}}>
                Page Home 
            </Text>
            <Text onPress={() => { navigation.navigate("Detail") }}>
                Aller sur la page Detail
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop:20,
    },
  });