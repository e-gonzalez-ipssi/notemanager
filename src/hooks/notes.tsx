import React, { useEffect, useContext } from "react";
import useApi from "./api";
import { theme } from "../../App";

export default function useNotes() {
    const { notes, setNotes } = useContext(theme as any);

    useEffect(() => {
        const fetchData = async () => {
            const response = await useApi("GET", "note")
            setNotes(response)
        }
        fetchData()
    }, [])

    return notes
}