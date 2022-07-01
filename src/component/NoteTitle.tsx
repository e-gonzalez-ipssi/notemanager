import React from "react";
import { View, Text, Image } from "react-native";
import BasicButton from "./BasicButton";
import useTheme from "../hooks/theme";
import useUser from "../hooks/user";
import useApi from "../hooks/api";
import { Note } from "../utils/note";

export default function NoteTitle({ note }: { note: Note }) {
  const { color } = useTheme();
  const { user } = useUser();

  const isMyNote = user === note.author;

  const handleDelete = async () => {
    // delete note
    const message = await useApi("DELETE", "note/" + note._id);
  };

  const image = note.image ? (
    <Image
      source={{ uri: note.image }}
      style={{
        width: 40,
        height: 40,
        borderRadius: 8,
        marginLeft: 30,
      }}
    />
  ) : (
    <View
      style={{
        width: 40,
        height: 40,
        borderRadius: 8,
        borderColor: color.primary,
      }}
    />
  );

  return (
    <View
      style={{
        flexDirection: "row",
        borderRadius: 8,
        padding: 12,
        flexWrap: "wrap",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: color.text,
          marginLeft: 8,
          fontWeight: "900",
        }}
      >
        {note.title}
      </Text>
      {image}
      {isMyNote && (
        <BasicButton
          onPress={handleDelete}
          style={{
            backgroundColor: "#327389",
            position: "absolute",
            right: -50,
          }}
          textStyle={{ color: "white", fontWeight: "900" }}
        >
          X
        </BasicButton>
      )}
    </View>
  );
}
