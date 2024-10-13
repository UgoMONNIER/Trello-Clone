import React, { useState } from "react";
import {
    Button, Typography
} from "@mui/material";
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { v4 as uuid } from 'uuid'



const DeleteColumn = ({ reloadSpaceContent, idColumn }) => {
    const params = useParams()

    const handleClick = () => {

        console.log(idColumn)
        const config = {
            method: 'DELETE',
        }
        fetch(`http://localhost:5000/columns/${params.uid}/${params.id_space}/${params.idtable}/${idColumn}`, config)
            .then((response) => {
                return response.json() // pour mettre en format JSON ?
            })
            .then((data) => {
                reloadSpaceContent()
                console.log(data);
            })
            .catch((error) => {
                const code = error.message;
                console.log(error)
            })


    }


    return (

        <Typography
            onClick={handleClick}
            variant="contained"
            style={{
                cursor: "pointer",
                margin: "20px",
                textAlign: "center",
            }} >
                Supprimer la colonne
            </Typography>
    );
};

export default DeleteColumn;