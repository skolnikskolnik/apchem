import React from 'react';
import {
    Grommet,
    Button
} from 'grommet';
import chemfoundations from "../ChapterMaterials/chemfoundations.json";
import AccordionVideo from "../components/AccordionVideo";
import worksheet from "../documents/uncertainty.pdf";

export default function ChemFoundations() {
    //Making a link for the pdf worksheet

    return (
        <div>
            <Grommet>
                <h1>Unit #1: Chemical foundations</h1>
                <p>This chapter functions as an introduction to chemistry. This is primarily a skills-based chapter. All of these skills will appear in other chapters</p>
                <h3>Videos and problems</h3>
                <AccordionVideo json={chemfoundations}/>
                <br></br>
                <Button primary label="Click here for PDF" href={worksheet}/>
            </Grommet>

        </div>
    )
}