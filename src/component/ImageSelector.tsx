import React, { useState } from "react";
import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";
import { Image, TextStyle, View, ViewStyle } from "react-native";
import BasicButton from "./BasicButton";

export default function ImageSelector({
    onImage = (uri: string) => { },
    style = {},
    textStyle = {},
}: {
    onImage: (uri: string) => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
}) {
    const [image, setImage] = useState<any>(null);
    const picker = async () => {
        try {
            let response = await launchImageLibraryAsync({
                mediaTypes: MediaTypeOptions.Images,
                allowsEditing: false,
                aspect: [1, 1],
                quality: 1,
            });
            if (!response.cancelled) {
                setImage(response.uri);
                onImage(response.uri);
            }
        } catch (e) {
            console.log("Couldn't open phone librairy");
        }
    };

    return (
        <View>
            <BasicButton
                style={{ width: 250, backgroundColor: "#ffff", ...style }}
                textStyle={textStyle}
                onPress={() => {
                    picker();
                }}
            >
                Select an image
            </BasicButton>
            {image && (
                <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
            )}
        </View>
    );
}
