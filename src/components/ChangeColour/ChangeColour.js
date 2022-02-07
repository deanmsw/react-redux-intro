import React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux"
import { changeColour } from "../../features/theme";

function ChangeColour() {

    const [colour, setColour] = useState("");
    const dispatch = useDispatch();

  return (
        <div>

            <input 
                type="text"
                onChange={(e) => {
                    setColour(e.target.value);
                }} 
            />
            <button 
                onClick={() => {
                    dispatch(changeColour(colour));
                }}
            >
                Change Colour
            </button>
        </div>
    
    );
}

export default ChangeColour;
