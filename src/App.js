import PopoverOne from "./PopoverOne";
import * as React from "react";
import PopoverTwo from "./PopoverTwo";
import PopoverThree from "./PopoverThree";
import {InputLabel} from "@mui/material";

export default function (){
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const [popover1ModalState, setPopover1ModalState] = React.useState(true);

    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const [popover2ModalState, setPopover2ModalState] = React.useState(false);

    const [anchorEl3, setAnchorEl3] = React.useState(null);
    const [popover3ModalState, setPopover3ModalState] = React.useState(false);

    const handleClose = () => {
        setPopover1ModalState(false)
    }

    const handleNext1 = () => {
        setPopover1ModalState(false)
        setPopover2ModalState(true)
    }

    const handlePrevious2 = () => {
        setPopover1ModalState(true);
        setPopover2ModalState(false)
    }

    const handleNext2 = () => {
        setPopover2ModalState(false);
        setPopover3ModalState(true);
    }

    const handlePrevious3 = () => {
        setPopover2ModalState(true);
        setPopover3ModalState(false)
    }

    const handleFinish = () => {
        setPopover3ModalState(false);
    }
    return(
        <div style={{paddingLeft: "50px", paddingRight: "50px"}}>
            <h1 style={{textAlign:"center", paddingTop: "20px"}}> Guided on boarding </h1>
            <hr/>

            <div>
                <InputLabel ref={setAnchorEl1}>
                    <h1>Element</h1>
                </InputLabel>
            </div>
            <PopoverOne modalState={popover1ModalState} handleCloseClick={handleClose} handleNextClick={handleNext1} anchorEl={anchorEl1}/>

            <div>
                <InputLabel style={{float: "right"}} ref={setAnchorEl2}>
                    <h1>Another element</h1>
                </InputLabel>
            </div>
            <PopoverTwo modalState={popover2ModalState} handlePreviousClick={handlePrevious2} handleNextClick={handleNext2} anchorEl={anchorEl2}/>

            <div>
                <InputLabel style={{marginTop: "100px"}} ref={setAnchorEl3}>
                    <h1>And yet another element</h1>
                </InputLabel>
            </div>
            <PopoverThree modalState={popover3ModalState} handlePreviousClick={handlePrevious3} handleFinishClick={handleFinish} anchorEl={anchorEl3}/>
        </div>
    )
}