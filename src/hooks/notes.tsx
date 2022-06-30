import React, { useEffect, useContext } from "react";
import useApi from "./api";
import { Note } from "../utils/note";
import { notesContext } from "../utils/context";

export default function useNotes() {
  const { notes, setNotes } = useContext(notesContext as any);

  const fetchData = async () => {
    const data = await useApi("GET", "note");
    if (data.errorMessage) {
      console.log(data.errorMessage);
    } else {
      setNotes(data.reverse());
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { notes: notes as Note[], fetchData };
}
