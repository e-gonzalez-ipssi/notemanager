import React, { useState } from "react";
import { Note } from "../utils/note";
import { Text, View, Modal } from "react-native";
import Tags from "./Tags";
import Edit from "../features/Edit";
import BasicButton from "./BasicButton";
import useUser from "../hooks/user";
import useTheme from "../hooks/theme";

export default function NoteData({ note }: { note: Note }) {
	const [open, setOpen] = useState(false)
	const { user } = useUser();
	const { color } = useTheme()
	return (
		<View>
			<Text style={{ color: "#ffff" }}>
				Auteur : {note.anonym ? "Anonymes" : note.author}
			</Text>
			<Text style={{ color: "#ffff" }}>Note : {note.text}</Text>
			{note.tags.length > 0 && <Tags tags={note.tags} />}
			<Text style={{ color: "#ffff" }}>
				Date de création : {note.creation_date}
			</Text>
			{user.toLowerCase() === note.author.toLowerCase() && (
				<>
					<BasicButton
						onPress={() => setOpen(true)}
						style={{
							backgroundColor: "white"
						}}
						textStyle={{
							color: color.secondary
						}}
					>
						Edit
					</BasicButton>
					<Modal visible={open}>
						<Edit note={note} onEdit={() => setOpen(false)} />
					</Modal>
				</>
			)}

		</View>
	);
}
