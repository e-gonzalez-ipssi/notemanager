import React, { useEffect, useContext } from "react";
import useApi from "./api";
import { theme } from "../../App";
import { Note } from "../utils/note";

export default function useNotes() {
    const { notes, setNotes } = useContext(theme as any);

    useEffect(() => {
        const fetchData = async () => {
            const data = await useApi("GET", "note")
            if (data.errorMessage) {
                console.log(data.errorMessage)
            }
            else {
                setNotes(data)
            }
        }
        fetchData();
    }, [])

    return {
        notes: notes as Note[],
    }
}