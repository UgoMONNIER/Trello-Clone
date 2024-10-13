import React from 'react';
import Popover from '@material-ui/core/Popover';

import DeleteColumn from './DeleteColumn';
import { MoreVert } from '@mui/icons-material';




const SimplePopover = ({ reloadSpaceContent, idColumn}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <MoreVert aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </MoreVert>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
            <DeleteColumn reloadSpaceContent={reloadSpaceContent} idColumn={idColumn}/>

      </Popover>
    </div>
  );
}


export default SimplePopover;