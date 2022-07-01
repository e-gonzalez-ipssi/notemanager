import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BasicButton from "../component/BasicButton";
import BasicTextInput from "../component/BasicTextInput";
import CollapseButton from "../component/CollapseButton";
import CustomScrollView from "../component/CustomScrollView";
import useNotes from "../hooks/notes";
import useUser from "../hooks/user";

export default function Perso({ navigation }: { navigation: any }) {
  const { notes, fetchData } = useNotes();
  const { user, setUser } = useUser();

  const [value, setValue] = useState("");

  const handleConnect = () => {
    setUser(value);
  };

  let filteredNotes = notes.filter((note) => {
    if (note.author) {
      return note.author.toLowerCase() === user.toLowerCase();
    }
    return false;
  });

  filteredNotes = user === "" ? [] : filteredNotes;

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
      <BasicTextInput
        placeholder={user === "" ? "Enter your name" : user}
        setInput={setValue}
      />
      <BasicButton
        textStyle={{
          color: "white",
        }}
        onPress={handleConnect}
      >
        Connect
      </BasicButton>
      <CustomScrollView refresh={fetchData}>
        <CollapseButton notes={filteredNotes}></CollapseButton>
      </CustomScrollView>
    </SafeAreaView>
  );
}
