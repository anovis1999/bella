import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function UsedBotAlert() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const useStyles = makeStyles({
        root: {
            background: "#a80505",
            color: "white",
        },
        label: {
            textTransform: "capitalize"
        }
    });

    const classes = useStyles();

    return (

        <div>
            <Button classes={{
                root: classes.root,
                label: classes.label
            }} variant="contained" color="secondary" onClick={handleClickOpen}>
                ?מי זה הפרופסור
      </Button>
      
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{"?האם ניסית כבר את הפרופסור"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">בשביל לפתוח תקלה קודם יש להעזר בפרופסור, דוקטור התקלות שלנו הוא כבר ידע לעזור לכם בוודאות </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        סגור
          </Button>
          
         
        
                </DialogActions>
            </Dialog>

            {/* <div style={{marginTop:"500px"}}><ErrorForm></ErrorForm></div> */}
        </div>
    );
}
