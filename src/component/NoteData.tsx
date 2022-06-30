import React from "react";
import { Note } from "../utils/note";
import { Text, View } from "react-native";

export default function NoteData({ note }: { note: Note }) {
	return (
		<View>
			<Text>{note.anonym ? "Anonymes" : note.author}</Text>
			<Text>{note.text}</Text>
			<View style={{ flexDirection: "row" }}>
				{note.tags.map((tag, index) => {
					return (
						<Text style={{ marginRight: 5 }} key={index}>
							{tag}
						</Text>
					);
				})}
			</View>
			<Text>{note.creation_date}</Text>
		</View>
	);
}
