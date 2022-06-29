export interface Note {
    _id: number, //ignorer pour le moment 
    title: string,
    author: string,
    anonyme: boolean,
    tags: string[],
    text: string,
    image?: string,
}