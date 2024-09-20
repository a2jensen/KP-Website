import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {  // Target the Dialog's paper element to control width and height
    width: '500px',        // Set the width
    height: '300px',       // Set the height
    maxWidth: '70%',       // set max-width for responsiveness
    maxHeight: '90%',      // Set max-height for responsiveness
    borderRadius: '20px',      // Customize border radius
    border: '2px solid rgb(201, 201, 201)', // Customize border color and size
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Add box shadow for a subtle effect
    padding: '20px', // Optional: adds padding inside the dialog
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs({ description, googleForm}) {
  const eventDiscription = description
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div onClick={handleClickOpen}>
        More Event Information
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          KP Event
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            {eventDiscription}
          </Typography>
        </DialogContent>
        {/** CUT OUT FEATURE: SIGN IN EVENT
         * <DialogActions style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px', }}>
          <Button  href={googleForm} variant="contained" fullWidth style={{backgroundColor: '#ffb703'}}>
            Sign In 
          </Button>
        </DialogActions>
         */}
      </BootstrapDialog>
    </React.Fragment>
  );
}
