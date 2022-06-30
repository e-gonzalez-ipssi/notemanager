import React, { useState, useEffect } from "react";
import useApi from "./api";
import { Note } from "../utils/note";

export default function useNotes() {
    const [notes, setNotes] = useState([] as Note[]);
    let interval: any;

    useEffect(() => {
        const fetchData = async () => {
            const response = await useApi("GET", "note")
            setNotes(response)
        }
        interval = setInterval(() => fetchData(), 2000)
        return () => clearInterval(interval)
    }, [])

    return notes
}