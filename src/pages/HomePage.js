import React from 'react';
import {
    Anchor,
    Image,
    Box
} from 'grommet';
import equationsheet from "../documents/equationsheet.pdf";
import jskolpic from "../documents/jskolpic.jpg";




export default function HomePage() {
    return (
        <div>
            <h1>About this page</h1>
            <p>This page is created by Mrs. Altman, who has over 8 years teaching experience in all levels of chemistry, ranging from remedial chemistry to AP Chemistry, and even some college courses. This is me! I look a little different when I teach.</p>
            <br></br>
            <Box height="medium" width="medium" margin="15px" >
            <Image src={jskolpic} />
            </Box>
            <h2>How to use this page</h2>
            <p>On this page, I will be providing all of the materials I typically provide my own students. This includes, but is not limited to: youtube videos, AP practice problems, suggested problems from the textbook.</p>
            <p>This website will serve you best if you are currently enrolled in AP Chemistry or an Honors course that will lead to AP Chemistry. When I teach, I view AP Chemistry as a two-year course that starts with the Honors curriculum.</p>
            <br></br>
            <h2>Suggested materials</h2>
            <p>Each student must have a calculator. I strongly recommend a graphing calculator such as a  &nbsp;
        <Anchor
                    href="https://www.google.com/search?q=TI-84+"
                    label="TI-84+"
                />
            , though a scientific calculator, such as the &nbsp;
            <Anchor
                    href="https://www.google.com/search?q=TI-30X"
                    label="TI-30X"
                />
             &nbsp; will also work. I don't personally recommend Casio calculators for this class.</p>
            <p>Each student should have a copy of the periodic table and equation sheet that will provided on the AP Exam. &nbsp;
             <Anchor
                    href={equationsheet}
                    label="Here"
                />
                 &nbsp; is a link to one, though you can also find these via a Google Search.
             </p>
            <p>I personally like and use &nbsp;
             <Anchor
                    href="https://www.amazon.com/Chemistry-Steven-S-Zumdahl/dp/1133611095"
                    label="Zumdahl Zumdahl"
                />
                &nbsp; textbook, and I will be making suggestions for book problems from this book. The actual text of this book goes beyond what you need to know for the AP Chemistry exam, but the problems and in-text explanations for what you do need to know are excellent.
             </p>
        </div>
    );
}