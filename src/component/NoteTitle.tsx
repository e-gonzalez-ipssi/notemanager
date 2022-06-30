import React from "react";
import { View, Text, Image } from "react-native";
import useTheme from "../hooks/theme";
import { Note } from "../utils/note";

export default function NoteTitle({ note }: { note: Note }) {
    const { color } = useTheme();

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
                flexWrap: "wrap"
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
        </View>
    );
}
