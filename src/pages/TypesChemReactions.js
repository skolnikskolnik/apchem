import React from 'react';
import {
    Grommet
} from 'grommet';
import typesofchemreactions from "../ChapterMaterials/typesofchemreactions.json";
import AccordionVideo from "../components/AccordionVideo";


export default function TypesChemReactions() {


    return (
        <div>
            <Grommet>
                <h1>Unit #4: Types of chemical reactions and solution stoichiometry</h1>
                <p>In this chapter you will learn how to make predictions about chemical reactions that occur in aqueous solutions, such as double replacement reactions, acid-base reactions, and oxidation-reduction reactions. You will also learn the necessary calculations for performing experiments with these types of reactions such that you are prepared for a lab experience.</p>
                <h3>Videos and problems</h3>
                <AccordionVideo json={typesofchemreactions}/>
                <br></br>
            </Grommet>

        </div>
    )
}