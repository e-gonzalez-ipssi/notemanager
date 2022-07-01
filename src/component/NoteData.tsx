import React from "react";
import { Note } from "../utils/note";
import { Text, View } from "react-native";
import Tags from "./Tags";

export default function NoteData({ note }: { note: Note }) {
  return (
    <View>
      <Text style={{ color: "#ffff" }}>
        Auteur : {note.anonym ? "Anonymes" : note.author}
      </Text>
      <Text style={{ color: "#ffff" }}>Note : {note.text}</Text>
      <Tags tags={note.tags} />
      <Text style={{ color: "#ffff" }}>
        Date de création : {note.creation_date}
      </Text>
    </View>
  );
}
