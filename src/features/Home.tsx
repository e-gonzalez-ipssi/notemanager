import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BasicTextInput from "../component/BasicTextInput";
import CollapseButton from "../component/CollapseButton";
import useApi from "../hooks/api";
import { Note } from "../utils/note";

export default function Home({ navigation }: { navigation: any }) {
    const [notes, setNotes] = useState([] as Note[]);
    const [filtreName, setFiltreName] = useState("");
    const [filtreTag, setFiltreTag] = useState([] as string[]);
    const [filtreDate, setFiltreDate] = useState("");
    let interval: any;

	const handleTags = (rawValue: string) => {
        let tagRegex = /[^,\s][^\,]*[^,\s]*/gm;
        let found = rawValue.match(tagRegex)

        if (found) { setFiltreTag(found) }
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await useApi("GET", "note")
            setNotes(response)
        }
        interval = setInterval(() => fetchData(), 5000)
        return () => clearInterval(interval)
    }, [])

    
    let filteredNotes = []; 

    filteredNotes = notes.filter(note =>
        {
        if(note.author){
            return note.author.includes(filtreName);}
        }   
    );
    if(filtreTag.length !== 0){
        filteredNotes = filteredNotes.filter(note =>
            {   
                var BreakException = {};

                try{
                    let filtred = true
                    filtreTag.forEach((tag) => {
                        filtred = note.tags.includes(tag)
                        if (!filtred) {
                            throw BreakException;
                        }
                    })
                    return filtred
                }
                catch (e){
                    if (e !== BreakException) throw e;
                }
            })
        console.log(filteredNotes);
        filteredNotes = filteredNotes.filter(note =>{
            if(note.creation_date){
                return note.creation_date.includes(filtreDate);
            }
        }
        );
    }
    return (
        <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
            <ScrollView>
                <Text>Filtre nom</Text>
                <BasicTextInput setInput={setFiltreName} placeholder="Ex: Test, Esteban, Maths" />
                <Text>Filtre tag</Text>
                <BasicTextInput setInput={handleTags} placeholder="Ex: Test, Esteban, Maths" />
                <Text>Filtre date</Text>
                <BasicTextInput setInput={setFiltreDate} placeholder="2022" />
                
                <CollapseButton notes={filteredNotes}></CollapseButton>
                
            </ScrollView>
        </SafeAreaView>
    )
}
