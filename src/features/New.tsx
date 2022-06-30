import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../hooks/theme";
import ImageSelector from "../component/ImageSelector";
import BasicCheckBox from "../component/BasicCheckbox";
import BasicTextInput from "../component/BasicTextInput";
import useUser from "../hooks/user";
import useApi from "../hooks/api";
import BasicButton from "../component/BasicButton";

export default function New({ navigation }: { navigation: any }) {
  const { color } = useTheme();
  const [anonymous, setAnonymous] = useState(false);
  const [auteur, setAuteur] = useState("");
  const [titre, setTitre] = useState("");
  const [texte, setTexte] = useState("");
  const [tags, setTags] = useState([] as string[]);
  const [image, setImage] = useState("");

  const { user } = useUser();

  const handleTags = (rawValue: string) => {
    let tagRegex = /[^,\s][^\,]*[^,\s]*/gm;
    let found = rawValue.match(tagRegex);

    if (found) {
      setTags(found);
    }
  };

  useEffect(() => {
    if (user !== "" && auteur === "") {
      setAuteur(user);
    }
  }, [auteur]);

  const handleConfirm = async () => {
    await useApi("POST", "note", {
      title: titre,
      author: auteur,
      anonym: anonymous,
      tags: tags,
      text: texte,
      image: image,
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#327389",
      }}
    >
      <ScrollView>
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            color: color.text,
            fontWeight: "900",
            margin: 40,
          }}
        >
          {auteur}
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BasicTextInput
            setInput={setAuteur}
            style={{
              backgroundColor: "#ffff",
              width: "70%",
            }}
            placeholder={user === "" ? "Saisir un nom" : "Changer de nom ?"}
          />
          <BasicCheckBox
            style={{
              margin: 30,
            }}
            onValueChange={setAnonymous}
            value={anonymous}
          >
            Post as Anonymous
          </BasicCheckBox>
          <BasicTextInput
            setInput={setTitre}
            style={{
              backgroundColor: "#ffff",
              marginBottom: 30,
              width: "70%",
            }}
            placeholder="Titre de la note"
          />
          <BasicTextInput
            setInput={setTexte}
            placeholder="Votre note"
            style={{
              height: 50,
              backgroundColor: "#ffff",
              marginBottom: 30,
              maxWidth: "70%",
              width: "70%",
            }}
            multiline={true}
          />
          <BasicTextInput
            style={{
              backgroundColor: "#ffff",
              marginBottom: 30,
              width: "70%",
            }}
            setInput={handleTags}
            placeholder="Tags"
          />
          <ImageSelector onImage={setImage} />
          <BasicButton
            style={{
              backgroundColor: "#ffff",
            }}
            onPress={handleConfirm}
          >
            Créer la note
          </BasicButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
