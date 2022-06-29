import React, { useState } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTheme from "../hooks/theme";
import ImageSelector from "../component/ImageSelector";
import BasicCheckBox from "../component/BasicCheckbox";

export default function New({ navigation }: { navigation: any }) {
    const { color } = useTheme();
    const [anonymous, setAnonymous] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
            <Text>
                Page New
            </Text>
            <ImageSelector onImage={() => { }} />
            <BasicCheckBox
                style={{
                    margin: 10
                }}
                onValueChange={setAnonymous}
                value={anonymous}
            >
                Post as Anonymous
            </BasicCheckBox>
        </SafeAreaView>
    )
}