import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BasicButton from "../component/BasicButton";
import BasicTextInput from "../component/BasicTextInput";
import CollapseButton from "../component/CollapseButton";
import { Text } from "react-native";
import useNotes from "../hooks/notes";
import useTheme from "../hooks/theme";
import useUser from "../hooks/user";

export default function Perso({ navigation }: { navigation: any }) {
    const { notes, loading, error } = useNotes();
    const { color } = useTheme();
    const { user, setUser } = useUser();

    const [value, setValue] = useState("");

    const handleConnect = () => {
        setUser(value)
    }

    let filteredNotes = notes.filter(note => {
        if (note.author) {
            return note.author.includes(user);
        }
    });

    return (
        <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
            <BasicTextInput
                placeholder={user === "" ? "Enter your name" : user}
                setInput={setValue}
            />
            <BasicButton
                textStyle={{
                    color: "white"
                }}
                onPress={handleConnect}
            >
                Connect
            </BasicButton>
            {user !== "" && (
                <CollapseButton notes={filteredNotes} />
            )}
        </SafeAreaView>
    )
}