import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import useTheme from "../hooks/theme";
import { Note } from "../utils/note";

export default function NoteTitle({ note }: { note: Note }) {
  const { color } = useTheme();
  const [openTitle, setOpenTitle] = useState(false);

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
    <TouchableOpacity
      onPress={() => {
        setOpenTitle((old) => !old);
      }}
    >
      <View
        style={{
          flexDirection: "row",
          borderRadius: 8,
          padding: 12,
        }}
      >
        {openTitle && (
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
        )}
        {!openTitle && (
          <Text
            style={{
              fontSize: 30,
              color: color.text,
              marginLeft: 8,
              fontWeight: "900",
            }}
            numberOfLines={1}
          >
            {note.title}
          </Text>
        )}
        {image}
      </View>
    </TouchableOpacity>
  );
}
