import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CollapseButton from "../component/CollapseButton";
import ThemeButton from "../component/ThemeButton";
import useApi from "../hooks/api";
import useTheme from "../hooks/theme";
import { Note } from "../utils/note";

export default function Home({ navigation }: { navigation: any }) {
  const { color } = useTheme();
  const [notes, setNotes] = useState([] as Note[]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await useApi("GET", "note");
      setNotes(response);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
      <ThemeButton />
      <Text style={{ color: color.text }}>Page Home</Text>
      <CollapseButton notes={notes}></CollapseButton>
      {notes.map((note, index) => {
        <Text key={index}>{note.title}</Text>;
      })}
    </SafeAreaView>
  );
}
