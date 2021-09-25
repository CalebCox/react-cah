import React from "react";
import { Typography, Container, Box } from "@mui/material";
import styled from "styled-components";
import Card from "./Card";
import { Droppable } from "react-beautiful-dnd";

export default function CardRow(props) {
  return (
    <Container>
      <Typography>{props.row.title}</Typography>
      <Droppable droppableId={props.row.id} direction="horizontal">
        {(provided) => (
          <Box
            ref={provided.innerRef}
            {...provided.droppableProps}
            sx={{ display: "flex" }}
          >
            {props.cards.map((card, index) => {
              return <Card key={card.id} card={card} index={index} />;
            })}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Container>
  );
}
