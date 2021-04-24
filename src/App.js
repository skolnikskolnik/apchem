import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChemFoundations from "./pages/ChemFoundations";
import AtomsMoleculesIons from "./pages/AtomsMoleculesIons";
import {
  Grommet,
  Anchor,
  Heading,
  Button,
  Box,
  Collapsible,
  ResponsiveContext,
  Layer
} from 'grommet';
import AppBar from "./components/AppBar";
import { FormClose } from 'grommet-icons';

//Gives a theme to the website
const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};



function App() {
  //Allows right sidebar to be toggled open/closed
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Router>
      <Grommet theme={theme} full>
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <Heading level='3' margin='none'>Mrs. Altman's AP Chemistry Page</Heading>
                <Button
                  onClick={() => setShowSidebar(!showSidebar)}
                >Show sidebar</Button>
              </AppBar>
              <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                <Box flex align='center' justify='center'>
                  <Switch>
                    <Route exact path="/">
                      <HomePage />
                    </Route>
                    <Route exact path="/chemfoundations">
                      <ChemFoundations />
                    </Route>
                    <Route exact path="/atomsmoleculesions">
                      <AtomsMoleculesIons />
                    </Route>
                  </Switch>
                </Box>
                {(!showSidebar || size !== 'small') ? (
                  <Collapsible direction="horizontal" open={showSidebar}>

                    <Box
                      flex
                      width='medium'
                      background='light-2'
                      elevation='small'
                      align='center'
                      justify='center'
                    >
                      <h3>Welcome to Mrs. Altman's page!</h3>
                      <p>This website is designed to supplement what you're learning in class so you can be successful in your AP Chemistry course and exam.</p>
                      <h4>Table of contents</h4>
                      <Anchor
                        href="/"
                        label="Home Page"
                      />
                      <Anchor
                        href="/chemfoundations"
                        label="Chemical Foundations"
                      />
                      <Anchor
                        href="/atomsmoleculesions"
                        label="Atoms, molecules, and ions"
                      />
                    </Box>
                  </Collapsible>
                ) : (
                  <Layer>
                    <Box
                      background='light-2'
                      tag='header'
                      justify='end'
                      align='center'
                      direction='row'
                    >
                      <Button
                        icon={<FormClose />}
                        onClick={() => setShowSidebar(false)}
                      />
                    </Box>
                    <Box
                      fill
                      background='light-2'
                      align='center'
                      justify='center'
                    >
                      sidebar
                         </Box>
                  </Layer>
                )}
              </Box>

            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    </Router>
  );
}
export default App;
