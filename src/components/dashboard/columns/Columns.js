import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import AddColumns from "./AddColumns";
import "./styleTask/task.css"
import ColumnCard from "./ColumnCard";
import LoadingAnimation from "../../LoadingAnimation"
import { Grid, Button, Modal } from "@mui/material";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    color: "#0554F2",
    backgroundColor: "#F1F8FF",
  }
});


export const Columns = () => {

  const params = useParams()
 

  const [isLoading, setIsLoading] = useState(true);
  const [reload, setReload] = useState(true);
  const [columnsData, setColumnsData] = useState([])

  useEffect(() => {

    // récupérer les datas en ajax
    //les méthodes http sont : GET, POST, PATCH, PUT ,DELETE, (OPTIONS) "crud"
    // const xhttp = new XMLHttpRequest()

    // xhttp.onreadystatechange = function () { // function exc à chaque changhement de l'état de notre requete
    //   //les états sont les suivant et correspondent au codes ci dessous:
    //   //0: non initialisée
    //   //1:connection établie avec le serveur
    //   //2:request reçue par le serveur
    //   //3:traitement de la req par le serveur
    //   //4:fin de traitement de la req et response reçu

    //   console.log("state:",this.readyState);

    //   //vérif de l'état de la req ainsi que du status de la reponse serveur
    //   if(this.readyState === 4 && this.status === 200) {
    //     console.log(this.responseText);
    //   }

    // }

    // xhttp.open('GET','https://jsonplaceholder.typicode.com/posts')
    // xhttp.send()



    // fetch('https://jsonplaceholder.typicode.com/posts',initConfig)
    // .then((response) => {
    //   if(response.ok) {
    //     return response.json()
    //   } else {
    //     throw new Error() ;
    //   }
    // })
    // .then((data) => {
    //   console.log(data);
    // })
    // .catch((error)=>{
    //   console.log(error);
    // })
    getData()

  }, [reload])

  const getData = async () => {
    const initConfig = {
      method: 'GET'
    }
    try {
      let response = await fetch(`http://localhost:5000/columns/${params.uid}/${params.id_space}/${params.idtable}/getAllColumns`, initConfig)
      let result = await response.json()
        result.map((column, index)=>(
          

          column.img ="https://picsum.photos/20"+(index)+"/300"
        ))
        setColumnsData(result)
        setIsLoading(false)
        console.log(result)

    } catch (error) {
      console.log(error);
    }
  }

  const reloadSpaceContent = () => setReload(!reload)

  return (
    <div className="tableau">

      <LoadingAnimation isLoading={isLoading} type="linear" />
      <Grid container spacing={2}>
        {
          columnsData.map((column) => (
            <Grid item lg={3} key={column.id}>
              <ColumnCard image= {column.img } reloadSpaceContent={reloadSpaceContent} column={column} />
            </Grid>
          ))
        }
        <Grid item lg={3}>
          <AddColumns reloadSpaceContent={reloadSpaceContent} />
        </Grid>
      </Grid>
    </div>
  );
};