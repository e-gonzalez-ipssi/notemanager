import React, { useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BasicTextInput from "../component/BasicTextInput";
import CollapseButton from "../component/CollapseButton";
import CustomScrollView from "../component/CustomScrollView";
import useNotes from "../hooks/notes";

export default function Home({ navigation }: { navigation: any }) {
  const { notes, fetchData } = useNotes();
  const [filtreName, setFiltreName] = useState("");
  const [filtreTag, setFiltreTag] = useState([] as string[]);
  const [filtreDate, setFiltreDate] = useState("");

  const handleTags = (rawValue: string) => {
    let tagRegex = /[^,\s][^\,]*[^,\s]*/gm;
    let found = rawValue.match(tagRegex);

    if (found) {
      setFiltreTag(found);
    }
  };

  let filteredNotes = [];

  filteredNotes = notes.filter((note) => {
    if (note.author && note.anonym === false) {
      return note.author.toLowerCase().includes(filtreName.toLowerCase());
    }
    return false;
  });

  filteredNotes = filteredNotes.filter((note) => {
    return note.creation_date.includes(filtreDate);
  });

  if (filtreTag.length !== 0) {
    filteredNotes = filteredNotes.filter((note) => {
      var BreakException = {};

      try {
        let filtred = true;
        filtreTag.forEach((tag) => {
          const lowerCase = note.tags.map((tag) => tag.toLowerCase());
          filtred = lowerCase.includes(tag.toLowerCase());
          if (!filtred) {
            throw BreakException;
          }
        });
        return filtred;
      } catch (e) {
        if (e !== BreakException) throw e;
      }
    });
  }
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
      <Text>Filtre nom</Text>
      <BasicTextInput
        setInput={setFiltreName}
        placeholder="Ex: Test, Esteban, Maths"
      />
      <Text>Filtre tag</Text>
      <BasicTextInput
        setInput={handleTags}
        placeholder="Ex: Test, Esteban, Maths"
      />
      <Text>Filtre date</Text>
      <BasicTextInput setInput={setFiltreDate} placeholder="2022" />
      <CustomScrollView refresh={fetchData}>
        <CollapseButton notes={filteredNotes}></CollapseButton>
      </CustomScrollView>
    </SafeAreaView>
  );
}
