import React from 'react';
import {
    Grommet
} from 'grommet';
import stoichiometry from "../ChapterMaterials/stoichiometry.json";
import AccordionVideo from "../components/AccordionVideo";


export default function Stoichiometry() {


    return (
        <div>
            <Grommet>
                <h1>Unit #3: Stoichiometry</h1>
                <p>This chapter goes through the fundamental calculations of chemistry, including reaction stoichiometry.</p>
                <h3>Videos and problems</h3>
                <AccordionVideo json={stoichiometry}/>
                <br></br>
            </Grommet>

        </div>
    )
}