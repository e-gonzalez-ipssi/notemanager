import React, { useState } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import NoteData from "./NoteData";
import { Note } from "../utils/note";
import NoteTitle from "./NoteTitle";
import useTheme from "../hooks/theme";

export default function CollapseButton({ notes = [] }: { notes: Note[] }) {
	const { color } = useTheme();
	const [currentIndex, setCurrentIndex] = useState<number | null>(null);

	const noteDisplay = [] as {
		title: React.ReactNode;
		content: React.ReactNode;
	}[];

	notes.forEach((note) => {
		noteDisplay.push({
			title: <NoteTitle note={note} />,
			content: <NoteData note={note} />,
		});
	});

	return (
		<View>
			{noteDisplay.map((note, index) => {
				return (
					<TouchableOpacity
						key={index}
						style={{
							marginBottom: 30,
							backgroundColor: color.secondary,
							width: "100%",
							borderRadius: 16,
							shadowColor: "#000",
							shadowOffset: {
								width: 0,
								height: 3,
							},
							shadowOpacity: 0.29,
							shadowRadius: 4.65,
							alignItems: "flex-start",
							elevation: 7,
						}}
						onPress={() => {
							setCurrentIndex(index === currentIndex ? null : index);
						}}
					>
						<View style={styles.notestyle}>
							{note.title}
							{index === currentIndex && (
								<View style={styles.contenu}>{note.content}</View>
							)}
						</View>
					</TouchableOpacity>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		fontSize: 38,
		fontWeight: "900",
	},
	notestyle: {
		textAlign: "left",
		padding: 20,
		justifyContent: "center",
	},
	contenu: {},
	bodycontent: {
		fontSize: 20,
		lineHeight: 20 * 1.5,
		textAlign: "center",
	},
});
