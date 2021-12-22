// import * as React from 'react';
// // import Box from '@mui/material/Box';
// // import Skeleton from '@mui/material/Skeleton';

// const Animations = () => {
//   return (
//     // <Box sx={{ width: 300 }}>
//     //   <Skeleton />
//     //   <Skeleton animation="wave" />
//     //   <Skeleton animation={false} />
//     // </Box>
//     <div>vvvvvvvvvvv</div>
//   );
// }

// export default Animations

import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderExampleIndeterminate = () => (
  <div>
    <Segment>
      <Dimmer active>
        <Loader indeterminate>Preparing Files</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
)

export default LoaderExampleIndeterminate
