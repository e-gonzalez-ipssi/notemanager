import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import NoteData from "./NoteData";
import { Note } from "../utils/note";

export default function CollapseButton({ notes = [] }: { notes: Note[] }) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const noteDisplay = [] as { Titre: string; Content: React.ReactNode }[];

  notes.forEach((note) => {
    noteDisplay.push({
      Titre: note.title,
      Content: <NoteData note={note} />,
    });
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar hidden />
        {noteDisplay.map((note, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setCurrentIndex(index === currentIndex ? null : index);
              }}
            >
              <View style={styles.notestyle}>
                <Text key={index} style={styles.header}>
                  {note.Titre}
                </Text>
                {index === currentIndex && (
                  <View style={styles.contenu}>{note.Content}</View>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 38,
    fontWeight: "900",
  },
  notestyle: {
    alignItems: "center",
    padding: 20,
  },
  contenu: {},
  bodycontent: {
    fontSize: 20,
    lineHeight: 20 * 1.5,
    textAlign: "center",
  },
});
