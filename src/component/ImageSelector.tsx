import React, { useState } from "react";
import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";
import { Image, View, Button } from "react-native";

export default function ImageSelector({ onImage = (uri: string) => { } }: { onImage: (uri: string) => void }) {
    const [image, setImage] = useState<any>(null);
    const picker = async () => {
        try {
            let response = await launchImageLibraryAsync(
                {
                    mediaTypes: MediaTypeOptions.Images,
                    allowsEditing: false,
                    aspect: [1, 1],
                    quality: 1,
                }
            );
            if (!response.cancelled) {
                setImage(response.uri)
                onImage(response.uri)
            }

        }
        catch (e) {
            console.log("Couldn't open phone librairy")
        }
    }

    return (
        <View>
            <Button title="Select an image" onPress={() => { picker() }} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>

    )
}