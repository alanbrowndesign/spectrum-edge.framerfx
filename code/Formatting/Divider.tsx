import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Divider as _Divider } from "@spectrum-edge/components"

export function Divider(props) {
    const { size, uiStyle, uiColor } = props
    return <_Divider uiStyle={uiStyle} size={size} uiColor={uiColor} />
}

Divider.defaultProps = {
    height: 120,
    width: 120,
    uiStyle: "dotted",
    uiColor: "red",
}

addPropertyControls(Divider, {
    uiStyle: {
        title: "Style",
        type: ControlType.Enum,
        options: ["dotted", "solid"],
    },
    uiColor: {
        title: "Color",
        type: ControlType.Color,
    },
})
