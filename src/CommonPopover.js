import * as React from "react";
import Popover from "@mui/material/Popover"

export default function CommonPopover(props) {
    return (
        <div>
            <Popover id={props.id}
                     open={props.modalState}
                     anchorEl={props.anchorEl}
                     anchorOrigin={{
                         vertical: 'bottom',
                         horizontal: 'left',
                     }}
                     transformOrigin={{
                         vertical: 'top',
                         horizontal: 'left',
                     }}
            >
                {props.children}
            </Popover>
        </div>
    );
}
