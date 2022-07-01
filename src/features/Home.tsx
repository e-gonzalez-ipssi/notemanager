import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BasicTextInput from "../component/BasicTextInput";
import CollapseButton from "../component/CollapseButton";
import CustomScrollView from "../component/CustomScrollView";
import useNotes from "../hooks/notes";

export default function Home({ navigation }: { navigation: any }) {
  const { notes, fetchData } = useNotes();
  const [filtreTitle, setFiltreTitle] = useState("");
  const [filtreAuthor, setfiltreAuthor] = useState("");
  const [filtreTag, setFiltreTag] = useState([] as string[]);
  const [filtreDate, setFiltreDate] = useState("");

  const handleTags = (rawValue: string) => {
    if (rawValue.length === 0) {
      setFiltreTag([]);
      return;
    }

    const arrayofTags = rawValue.split(",").map((item) => item.trim());
    setFiltreTag(arrayofTags);
  };

  let filteredNotes = [];

  filteredNotes = notes.filter((note) => {
    return note.title.includes(filtreTitle);
  });

  filteredNotes = filteredNotes.filter((note) => {
    if (note.author && note.anonym === false) {
      return note.author.toLowerCase().includes(filtreAuthor.toLowerCase());
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
      <Text style={styles.texte}>Filtre titre</Text>
      <BasicTextInput
        setInput={setFiltreTitle}
        placeholder="Ex: Test"
        style={{ alignItems: "center" }}
      />
      <Text style={styles.texte}>Filtre auteur</Text>
      <BasicTextInput
        setInput={setfiltreAuthor}
        placeholder="Ex: Test"
        style={{ alignItems: "center" }}
      />
      <Text style={styles.texte}>Filtre tag</Text>
      <BasicTextInput
        setInput={handleTags}
        placeholder="Ex: Test, Esteban, Maths"
        style={{ alignItems: "center" }}
      />
      <Text style={styles.texte}>Filtre date</Text>
      <BasicTextInput
        setInput={setFiltreDate}
        placeholder="2022"
        style={{ alignItems: "center" }}
      />
      <Text style={styles.texte}>Notes</Text>
      <CustomScrollView refresh={fetchData}>
        <CollapseButton notes={filteredNotes}></CollapseButton>
      </CustomScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  texte: {
    textAlign: "center",
  },
});
