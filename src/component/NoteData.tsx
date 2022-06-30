import React from "react";
import { Note } from "../utils/note";
import { Text, View } from "react-native";
import Tags from "./Tags";

export default function NoteData({ note }: { note: Note }) {
	return (
		<View>
			<Text style={{ color: "#ffff" }}>
				{note.anonym ? "Anonymes" : note.author}
			</Text>
			<Text style={{ color: "#ffff" }}>{note.text}</Text>
			<View style={{ flexDirection: "row" }}>
				{note.tags.map((tag, index) => {
					return (
						<Text style={{ marginRight: 5, color: "#ffff" }} key={index}>
							{tag}
						</Text>
					);
				})}
			</View>
			<Text style={{ color: "#ffff" }}>{note.creation_date}</Text>
		</View>
	);
}
