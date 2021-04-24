import React from 'react';
import {
    Grommet
} from 'grommet';
import atomsmoleculesions from "../ChapterMaterials/atomsmoleculesions.json";
import AccordionVideo from "../components/AccordionVideo";


export default function AtomsMoleculesIons() {


    return (
        <div>
            <Grommet>
                <h1>Unit #2: Atoms, molecules, and ions</h1>
                <p>This chapter introduces the components of the atom, but does not go into the quantum mechanics of electrons just yet. You will also learn how to write formulas, and get names from formulas, for four different types of compounds.</p>
                <h3>Videos and problems</h3>
                <AccordionVideo json={atomsmoleculesions}/>
                <br></br>
            </Grommet>

        </div>
    )
}