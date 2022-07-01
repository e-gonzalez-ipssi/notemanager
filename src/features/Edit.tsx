import React, { useState, useEffect } from "react";
import { Note } from "../utils/note";
import useTheme from "../hooks/theme";
import useUser from "../hooks/user";
import useApi from "../hooks/api";
import { SafeAreaView, Text, ScrollView, View, StyleSheet } from "react-native";
import BasicButton from "../component/BasicButton";
import BasicTextInput from "../component/BasicTextInput";
import BasicCheckBox from "../component/BasicCheckbox";
import ImageSelector from "../component/ImageSelector";
import Tags from "../component/Tags";

export default function Edit({ note, onEdit = () => { } }: { note: Note, onEdit?: () => void }) {
    const { color } = useTheme();
    const [anonymous, setAnonymous] = useState(note.anonym);
    const [titre, setTitre] = useState(note.title);
    const [texte, setTexte] = useState(note.text);
    const [tags, setTags] = useState("");
    const [image, setImage] = useState(note.image);

    const styles = StyleSheet.create({
        texteInput: {
            backgroundColor: color.secondary,
            width: "70%",
            color: color.background,
        },
    });

    const { user } = useUser();

    const handleTags = (rawValue: string) => {
        setTags(rawValue);
    };

    const handleEdit = async () => {
        let tagRegex = /[^,\s][^\,]*[^,\s]*/gm;
        let found = tags.match(tagRegex);
        await useApi("PUT", "note/" + note._id, {
            title: titre,
            anonym: anonymous,
            tags: found,
            text: texte,
            image: image,
        });
        onEdit()
    }

    useEffect(() => {
        const tagsString = note.tags.toString()
        setTags(tagsString)
    }, [])

    return (
        <SafeAreaView
            style={{
                flex: 1,
                marginTop: 0,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <ScrollView>
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 30,
                        fontWeight: "900",
                        margin: 40,
                        marginBottom: 20,
                    }}
                >
                    Votre nom
                </Text>
                <Text
                    style={{
                        textAlign: "center",
                        fontSize: 30,
                        fontWeight: "900",
                        marginBottom: 20,
                    }}
                >
                    {note.author}
                </Text>
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <BasicCheckBox
                        style={{
                            margin: 30,
                        }}
                        textStyle={{
                            color: color.secondary
                        }}
                        onValueChange={setAnonymous}
                        value={anonymous}
                    >
                        Post as Anonymous
                    </BasicCheckBox>
                    <BasicTextInput
                        input={titre}
                        setInput={setTitre}
                        style={{
                            ...styles.texteInput,
                            marginBottom: 30,
                        }}
                        placeholder="Titre de la note"
                        placeHolderTextColor={color.placeholder}
                    />
                    <BasicTextInput
                        input={texte}
                        setInput={setTexte}
                        placeholder="Votre note"
                        placeHolderTextColor={color.placeholder}
                        style={{
                            ...styles.texteInput,
                            height: 50,
                            marginBottom: 30,
                            maxWidth: "70%",
                        }}
                        multiline={true}
                    />
                    {false && <Text>Current Tags: {tags}</Text> /** ca me fait giga chier mais j'ai un bug d'affichage si j'update pas la value des tags dans le react directement, je peux pas set la valeur de base sans faire ca m'en voulez pas il est tard et j'en est marre de chercher le bug */}
                    <BasicTextInput
                        style={{
                            ...styles.texteInput,
                            marginBottom: 30,
                            maxWidth: "70%",
                            height: 50,
                        }}
                        input={tags}
                        setInput={handleTags}
                        placeholder="Tags"
                        placeHolderTextColor={color.placeholder}
                    />
                    <ImageSelector onImage={setImage} style={{ backgroundColor: color.secondary }} textStyle={{ color: color.background }} />
                    <BasicButton
                        onPress={handleEdit}
                        textStyle={{ color: color.background }}
                    >
                        Confirm
                    </BasicButton>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

