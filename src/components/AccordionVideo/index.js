import React from "react";
import VideoFrame from "../VideoFrame";
import {
    AccordionPanel,
    Box,
    Accordion
} from 'grommet';


const AccordionVideo = ({ json }) => (
    
    <div>
        <Accordion multiple>
            {json.map((video) => (
                <AccordionPanel key={video.index} label={video.videoIndex}>
                <Box background="light-2" overflow="auto" height="medium">
                    <Box height="large" flex={false}>
                        <h3>{video.title}</h3>
                        <h4>{video.summary}</h4>
                        <VideoFrame embedId={video.youtubeInfo} />
                        <h2>Suggested practice problems: {video.practiceProblems}</h2>
                    </Box>
                </Box>
            </AccordionPanel>
            ))}
            
        </Accordion>
    </div>
);

export default AccordionVideo;