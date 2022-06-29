import React, { useContext } from "react"
import { COLORS } from "../utils/color";
import { theme } from "../../App";


export default function useTheme() {
    const { dark, setDark } = useContext(theme)
    return { color: dark ? COLORS.colorDark : COLORS.colorLight, modify: setDark };
}