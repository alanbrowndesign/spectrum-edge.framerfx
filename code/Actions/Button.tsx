import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"
import { Button as _Button } from "@spectrum-edge/components"

// Learn more: https://framer.com/api

export function Button(props) {
    const { text, uiStatus, uiSize, uiIsWhite, onClick } = props
    return <_Button {...props} />
}

Button.defaultProps = {
    height: 40,
    width: 200,
    text: "Button",
    padding: 0,
    margin: 0,
}

addPropertyControls(Button, {
    uiType: {
        title: "Type",
        type: ControlType.Enum,
        options: ["primary", "secondary", "tertiary"],
        optionTitles: ["Primary", "Secondary", "Tertiary"],
        defaultValue: "primary",
    },
    uiSize: {
        title: "Size",
        type: ControlType.Enum,
        options: ["micro", "small", "medium", "large"],
        optionTitles: ["Micro", "Small", "Medium", "Large"],
        defaultValue: "medium",
    },
    text: {
        title: "Text",
        type: ControlType.String,
        defaultValue: "A Framer button",
        placeholder: "Enter Button text",
    },
    uiStatus: {
        title: "Status",
        type: ControlType.Enum,
        options: ["default", "danger", "disabled"],
        optionTitles: ["Default", "Danger", "Disabled"],
        defaultValue: "default",
    },
    uiIsWhite: {
        title: "White",
        type: ControlType.Boolean,
        defaultValue: false,
    },
    onClick: {
        title: "Tap",
        type: ControlType.EventHandler,
    },
})
