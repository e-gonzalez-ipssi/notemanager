import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CollapseButton from "../component/CollapseButton";
import useApi from "../hooks/api";
import useTheme from "../hooks/theme";
import { Note } from "../utils/note";

export default function Home({ navigation }: { navigation: any }) {
	const { color } = useTheme();
	const [notes, setNotes] = useState([] as Note[]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await useApi("GET", "note");
			setNotes(response);
		};
		fetchData();
	}, []);

	return (
		<SafeAreaView style={{
			flex: 1,
			marginTop: 20,
			alignItems: 'center',
			justifyContent: 'center',
			height: "100%"
		}}>
			<CollapseButton notes={notes}></CollapseButton>
		</SafeAreaView>
	);
}
