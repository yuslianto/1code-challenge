import React from 'react';

import { Box } from '@mui/material';

import { Header } from "./components";

const App = () => {
  return (

    <Box sx={{ flex: 1, flexGrow: 1, bgcolor: 'grey' }}>
      {/* <Logo /> */}
      <Header />
    </Box>
  );
}

export default App;
