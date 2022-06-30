import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BasicTextInput from "../component/BasicTextInput";
import CollapseButton from "../component/CollapseButton";
import useApi from "../hooks/api";
import useNotes from "../hooks/notes";
import { Note } from "../utils/note";

export default function Home({ navigation }: { navigation: any }) {
	const notes = useNotes();
	const [filtreName, setFiltreName] = useState("");
	const [filtreTag, setFiltreTag] = useState("");
	const [filtreDate, setFiltreDate] = useState("");
	const [tags, setTags] = useState([] as string[]);

	const handleTags = (rawValue: string) => {
		let tagRegex = /[^,\s][^\,]*[^,\s]*/gm;
		let found = rawValue.match(tagRegex)

		if (found) { setTags(found) }
	}

	let filteredNotes = [];

	filteredNotes = notes.filter(note => {
		if (note.author) {
			return note.author.includes(filtreName);
		}
	}
	);
	/*tags.forEach(tag => {
		filteredNotes = notes.filter(note =>
			note.tags.forEach(element => {
				if(tag === element)
					note.tags.includes(element);
			});
		    
		);
	});
	*/
	filteredNotes = filteredNotes.filter(note => {
		return note.creation_date.includes(filtreDate);
	}
	);

	return (
		<SafeAreaView style={{ flex: 1, marginTop: 20 }}>
			<ScrollView>
				<Text>Filtre nom</Text>
				<BasicTextInput setInput={setFiltreName} placeholder="Ex: Test, Esteban, Maths" />
				<Text>Filtre tag</Text>
				<BasicTextInput setInput={setFiltreTag} placeholder="Ex: Test, Esteban, Maths" />
				<Text>Filtre date</Text>
				<BasicTextInput setInput={setFiltreDate} placeholder="2022" />

				<CollapseButton notes={filteredNotes}></CollapseButton>


			</ScrollView>
		</SafeAreaView>
	)
}
