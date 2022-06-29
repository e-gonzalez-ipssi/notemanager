import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useUser() {
    const [user, setUser] = useState("");

    const retrieveHistory = async () => {
        const userStored = await AsyncStorage.getItem("user");
        if (userStored !== "") {
            setUser(JSON.parse(userStored));
        } else {
            try {
                await AsyncStorage.setItem("user", JSON.stringify(user))
                setUser("")
            } catch (e) {
                console.log(e)
            }
        }
    }

    const updateHistory = async () => {
        try {
            await AsyncStorage.setItem("user", JSON.stringify(user))
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        retrieveHistory()
    }, [])

    useEffect(() => {
        updateHistory()
    }, [user])

    return { user, setUser }
}