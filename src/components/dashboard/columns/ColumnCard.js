import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Typography,
    Button
} from '@mui/material';
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import AddTask from './AddTask';
import DeleteColumn from './DeleteColumn';
import DeleteTask from './DeleteTask';
import "./styleTask/task.css"
import SimplePopover from './SimplePopover'



const ColumnCard = ({ column, reloadSpaceContent, image }) => {

    const params = useParams()
    const navigate = useNavigate();

    return <Card sx={{ maxWidth: 500, marginTop: 2 }}>
              <CardHeader

        action={
            <SimplePopover reloadSpaceContent={reloadSpaceContent} idColumn={column.id}/>

        }
        title={column.title}
      />
        <CardMedia
            component="img"
            height="140"
            // image={column.imgUrl}
            image={image}
            alt="green iguana"
        />
        <CardContent>

            <Typography gutterBottom variant="h5" component="div">
                {column.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{marginBottom : "20px"}}>
                {column.description}
            </Typography>
            {column.tasks.map((task, index) => (
                <Card key={index} sx={{ backgroundColor: "rgba(241, 243, 245, 0.4)", marginBottom:'20px' }} >
                    <div className='lign'>
                    <Typography sx={{ width: "100px", height: "5px", borderRadius: "15px", margin: "10px" }} backgroundColor={task.color}>   </Typography>
                    <DeleteTask 
                    reloadSpaceContent={reloadSpaceContent} idTask={task.id} idColumn={column.id} />
                    </div>
                    <Typography variant="h6" sx={{margin : "5px"}}>
                        {task.title}
                    </Typography>
                    <Typography variant="body2" sx={{margin : "5px"}}>
                        {task.description}
                    </Typography>
                </Card>
            ))}
        </CardContent>
        <AddTask reloadSpaceContent={reloadSpaceContent} idColumn={column.id} />
    </Card>;
};

export default ColumnCard;