import React from "react";

export default function useRegex(rawValue: string) {
        let tagRegex = /[^,\s][^\,]*[^,\s]*/gm;
        let found = rawValue.match(tagRegex)
        if (found) { return(found) }
}