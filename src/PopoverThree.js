import * as React from "react";
import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import CommonPopover from "./CommonPopover";

export default function PopoverThree(props) {
    return (
        <div>
            <CommonPopover modalState={props.modalState} anchorEl={props.anchorEl} id="popover-3">
                <Box sx={{border: .1, borderRadius: "5px", p: 1, bgcolor: "background.paper"}}>
                    <h4>Some heading</h4>
                    <p>Content in the popover</p>
                    <div align="right">
                        <Button onClick={props.handlePreviousClick}>
                            Previous
                        </Button>
                        <Button onClick={props.handleFinishClick}>
                            Finish
                        </Button>
                    </div>
                </Box>
            </CommonPopover>
        </div>
    );
}
