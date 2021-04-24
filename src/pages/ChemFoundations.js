import React from 'react';
import {
    Grommet
} from 'grommet';
import chemfoundations from "../ChapterMaterials/chemfoundations.json";
import AccordionVideo from "../components/AccordionVideo";

export default function ChemFoundations() {
    console.log(chemfoundations);
    return (
        <div>
            <Grommet>
                <h1>Unit #1: Chemical foundations</h1>
                <p>This chapter functions as an introduction to chemistry. This is primarily a skills-based chapter. All of these skills will appear in other chapters</p>
                <h3>Videos and problems</h3>
                <AccordionVideo json={chemfoundations} />
                
            </Grommet>

        </div>
    )
}