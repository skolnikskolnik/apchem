import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Grommet, Heading, Button, Box, Collapsible, ResponsiveContext, Layer } from 'grommet';
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
      <Grommet theme={theme} full themeMode="dark">
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill>
              <AppBar>
                <Heading level='3' margin='none'>AP Chemistry for not-so dummies</Heading>
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
                      sidebar
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
