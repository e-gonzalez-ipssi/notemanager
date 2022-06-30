import React, { useEffect, useContext, useState } from "react";
import useApi from "./api";
import { theme } from "../../App";
import { Note } from "../utils/note";

export default function useNotes() {
    const { notes, setNotes } = useContext(theme as any);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const { data, loading, error } = await useApi("GET", "note")
            setNotes(data)
            setLoading(loading)
            setError(error)
        }
        fetchData();
    }, [])

    return {
        notes: notes as Note[],
        loading: loading as boolean,
        error: error as boolean,
    }
}