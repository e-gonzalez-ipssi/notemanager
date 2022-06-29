export interface Note {
    _id: number,
    title: string,
    author: string,
    anonyme: boolean,
    tags: string[],
    mainText: string,
    linkedPhoto: string,
}