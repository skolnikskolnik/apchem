import React from "react";
import { Grommet, Box } from 'grommet';

function SideBar() {
    <Grommet>
      <Box
        tag='header'
        direction='row'
        align='center'
        justify='between'
        background='brand'
        pad={{ left: 'medium', right: 'small', vertical: 'small' }}
        elevation='medium'
        style={{ zIndex: '1' }}

      />
      <p>Hi</p>
      </Grommet>
};

export default SideBar;