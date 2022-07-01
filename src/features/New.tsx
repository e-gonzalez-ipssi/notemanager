import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
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
  const [tags, setTags] = useState("");
  const [image, setImage] = useState("");

  const { user } = useUser();

  const handleTags = (rawValue: string) => {
    setTags(rawValue);
  };

  useEffect(() => {
    if (user !== "" && auteur === "") {
      setAuteur(user);
    }
  }, [auteur]);

  const handleConfirm = async () => {
    let tagRegex = /[^,\s][^\,]*[^,\s]*/gm;
    let found = tags.match(tagRegex);

    await useApi("POST", "note", {
      title: titre,
      author: auteur,
      anonym: anonymous,
      tags: found,
      text: texte,
      image: image,
    });
    navigation.navigate("Home");
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
            color: color.background,
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
            color: color.background,
            fontWeight: "900",
            marginBottom: 20,
          }}
        >
          {user}
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BasicTextInput
            setInput={setAuteur}
            style={styles.texteInput}
            placeholder={user === "" ? "Saisir un nom" : "Changer de nom ?"}
            placeHolderTextColor={color.secondary}
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
              ...styles.texteInput,
              marginBottom: 30,
            }}
            placeholder="Titre de la note"
            placeHolderTextColor={color.secondary}
          />
          <BasicTextInput
            setInput={setTexte}
            placeholder="Votre note"
            placeHolderTextColor={color.secondary}
            style={{
              ...styles.texteInput,
              height: 50,
              marginBottom: 30,
              maxWidth: "70%",
            }}
            multiline={true}
          />
          <BasicTextInput
            style={{
              ...styles.texteInput,
              marginBottom: 30,
            }}
            setInput={handleTags}
            placeholder="Tags"
            placeHolderTextColor={color.secondary}
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

const styles = StyleSheet.create({
  texteInput: {
    backgroundColor: "#ffff",
    width: "70%",
    color: "#327389",
  },
});
