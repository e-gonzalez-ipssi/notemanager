import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../hooks/theme";
import ImageSelector from "../component/ImageSelector";
import BasicCheckBox from "../component/BasicCheckbox";
import BasicTextInput from "../component/BasicTextInput";
import useUser from "../hooks/user";

export default function New({ navigation }: { navigation: any }) {
    const { color } = useTheme();
    const [anonymous, setAnonymous] = useState(false);
    const [auteur, setAuteur] = useState("");
    const [titre, setTitre] = useState("");
    const [texte, setTexte] = useState("");
    const [tags, setTags] = useState("");
    const [image, setImage] = useState("");

    const { user } = useUser();

    useEffect(() => {
        if (user !== "" && auteur === "") {
            setAuteur(user)
        }
    }, [auteur]);

    return (
        <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
            <Text>
                Page New
            </Text>
            <Text
                style={{ textAlign: "center" }}
            >
                Auteur
            </Text>
            <BasicTextInput
                setInput={setAuteur}
                placeholder={user === "" ? "Enter your name" : user}
            />
            <BasicCheckBox
                style={{
                    margin: 10
                }}
                onValueChange={setAnonymous}
                value={anonymous}
            >
                Post as Anonymous
            </BasicCheckBox>
            <Text
                style={{ textAlign: "center" }}
            >
            </Text>
            <BasicTextInput
                setInput={setTitre}
                placeholder="Ex: Cours de React Native"
            />
            <Text
                style={{ textAlign: "center" }}
            >
                Texte
            </Text>
            <BasicTextInput
                setInput={setTexte}
                placeholder="Ex: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
            mollit anim id est laborum."
                style={{ height: 200, width: 340 }}
                multiline={true}
            />
            <Text
                style={{ textAlign: "center" }}
            >
                Tags
            </Text>
            <BasicTextInput
                setInput={setTags}
                placeholder="Ex: Pain au chocolat"
            />
            <ImageSelector
                onImage={setImage}
            />
        </SafeAreaView>
    )
}