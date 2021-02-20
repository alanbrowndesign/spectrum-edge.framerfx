import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { SkyLogo as _SkyLogo } from "@spectrum-edge/components"

export function SkyLogo(props) {
    const { size, uiStyle } = props
    return <_SkyLogo uiStyle={uiStyle} size={size} />
}

SkyLogo.defaultProps = {
    height: 120,
    width: 120,
    uiStyle: "spectrum",
    size: "medium",
}

addPropertyControls(SkyLogo, {
    uiStyle: {
        title: "Style",
        type: ControlType.Enum,
        options: ["spectrum", "primary", "black", "white"],
    },
    size: {
        title: "Size",
        type: ControlType.Enum,
        options: ["micro", "small", "medium", "large", "jumbo"],
    },
})
