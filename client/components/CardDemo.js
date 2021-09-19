import { Paper, Typography, Container, Box } from "@mui/material";
import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const CardStyles = styled.div`
  max-width: 100px !important;
  max-height: 200px !important;
`;

const testCards = [
  {
    text: "Test",
    id: 1,
  },
  {
    text: "Another one",
    id: 2,
  },
  {
    text: "Last one",
    id: 3,
  },
];

export default function CardDemo() {
  return (
    <React.Fragment>
      <Container>
        <DragDropContext>
          <Droppable droppableId="cards">
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
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {testCards.map(({ text, id }, index) => {
                  return (
                    <Draggable key={id} draggableId={text} index={index}>
                      {(provided) => (
                        <Paper
                          elevation={3}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Typography>{text}</Typography>
                        </Paper>
                      )}
                    </Draggable>
                  );
                })}
              </Box>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
    </React.Fragment>
  );
}
