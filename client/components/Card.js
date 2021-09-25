import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";

export default function Card(props) {
  return (
    <Draggable draggableId={props.card.id} index={props.index}>
      {(provided) => (
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 1,
              width: 135,
              height: 180,
            },
          }}
          className="cards"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Paper elevation={3}>
            <Typography>{props.card.content.text}</Typography>
          </Paper>
        </Box>
      )}
    </Draggable>
  );
}
