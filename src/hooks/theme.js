import React, { useContext } from "react"
import { COLORS } from "../utils/color";
import { themeContext } from "../utils/context";


export default function useTheme() {
    const { dark, setDark } = useContext(themeContext)
    return { color: dark ? COLORS.colorDark : COLORS.colorLight, modify: setDark };
}