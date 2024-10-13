import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import "../../../css/style-dashboard.css"
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { Modal } from "@mui/material";
import ModalFormColumns from "./ModalFormColumns";



const AddColumns = ({reloadSpaceContent}) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Card sx={{ maxWidth: 345, marginTop: 2 }}
    
    >

      <CardActionArea className="card-action-add-espace">


        <CardMedia  onClick={handleOpen} sx={{ display: "flex", alignContent: "center", justifyContent : "center",height: 60 , padding:"20px"}}>
          <Typography className="add-espace">
            <AddIcon fontSize="small" />
            Ajouter une colonne
          </Typography>
        </CardMedia>
      </CardActionArea>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
        
      
      >
        <ModalFormColumns
        handleClose={handleClose}
        reloadSpaceContent={reloadSpaceContent}/>
      </Modal>


    </Card>
  );
};

export default AddColumns;