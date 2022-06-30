import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BasicTextInput from "../component/BasicTextInput";
import CollapseButton from "../component/CollapseButton";
import useApi from "../hooks/api";
import useNotes from "../hooks/notes";
import { Note } from "../utils/note";

export default function Home({ navigation }: { navigation: any }) {
  const [notes, setNotes] = useState([] as Note[]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await useApi("GET", "note");
      setNotes(response);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <View style={{ justifyContent: "center", padding: 20 }}>
        <CollapseButton notes={notes}></CollapseButton>
      </View>
    </SafeAreaView>
  );
}
