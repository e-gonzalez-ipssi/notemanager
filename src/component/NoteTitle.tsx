import React from "react";
import { View, Text, Image } from "react-native";
import useTheme from "../hooks/theme";
import { Note } from "../utils/note";

export default function NoteTitle({ note }: { note: Note }) {
    const { color } = useTheme();

    const image = note.image != "" ?
        <Image source={{ uri: note.image }} style={{ width: 40, height: 40, borderRadius: 8 }} /> :
        <View style={{ width: 40, height: 40, borderRadius: 8, backgroundColor: color.primary }} />;

    return (
        <View
            style={{
                flexDirection: "row",
                backgroundColor: color.extra,
                borderRadius: 8,
                padding: 12
            }}
        >
            {image}
            <Text
                style={{
                    fontSize: 30,
                    color: color.text
                }}
            >
                {note.title}
            </Text>
        </View>
    )
}