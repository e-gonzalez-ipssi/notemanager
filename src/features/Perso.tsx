import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BasicButton from "../component/BasicButton";
import BasicTextInput from "../component/BasicTextInput";
import useTheme from "../hooks/theme";
import useUser from "../hooks/user";

export default function Perso({ navigation }: { navigation: any }) {
    const { color } = useTheme();
    const { user, setUser } = useUser();

    const [value, setValue] = useState("");

    const handleConnect = () => {
        setUser(value)
    }

    return (
        <SafeAreaView style={{ flex: 1, marginTop: 20 }}>
            <BasicTextInput
                placeholder={user === "" ? "Enter your name" : user}
                setInput={setValue}
            />
            <BasicButton
                textStyle={{
                    color: color.success
                }}
                onPress={handleConnect}
            >
                Change your name
            </BasicButton>
        </SafeAreaView>
    )
}