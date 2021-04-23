import React from 'react';
import {
    Accordion,
    AccordionPanel,
    Box,
    Grommet
} from 'grommet';
import VideoFrame from "../components/VideoFrame";
import chemfoundations from "../ChapterMaterials/chemfoundations.json";


export default function ChemFoundations() {
    return (
        <div>
            <Grommet>
                <h1>Unit #1: Chemical foundations</h1>
                <p>This chapter functions as an introduction to chemistry. This is primarily a skills-based chapter. All of these skills will appear in other chapters</p>
                <h3>Videos and problems</h3>
                <Accordion multiple>
                    <AccordionPanel label="Video #1">
                        <Box background="light-2" overflow="auto" height="medium">
                            <Box height="large" flex={false}>
                                <h3>Intro to chemistry</h3>
                                <h4>Intro to chemistry, theories, laws, making measurements to the proper degree of precision</h4>
                                <VideoFrame embedId="7_zkDOhB_0U" />
                               
                            </Box>
                        </Box>
                    </AccordionPanel>
                    <AccordionPanel label="Panel 2">
                        <Box background="light-2" style={{ height: '50px' }}>
                            Panel 2 contents
          </Box>
                    </AccordionPanel>
                    <AccordionPanel label="Panel 3">
                        <Box background="light-2" style={{ height: '300px' }}>
                            Panel 3 contents
          </Box>
                    </AccordionPanel>
                </Accordion>
            </Grommet>

        </div>
    )
}