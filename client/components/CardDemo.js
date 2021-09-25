import { Paper, Typography, Container, Box } from "@mui/material";
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import CardRow from "./CardRow";

const CardStyles = styled.div`
  max-width: 100px !important;
  max-height: 200px !important;
`;

export default function CardDemo() {
  const [cardState, setCardState] = useState({
    cards: {
      "card-1": {
        id: "card-1",
        content: {
          text: "Becoming a blueberry.",
          pack: 0,
          type: "WHITE",
          pick: 0,
        },
      },
      "card-2": {
        id: "card-2",
        content: {
          text: "Being a busy adult with many important things to do.",
          pack: 0,
          type: "WHITE",
          pick: 0,
        },
      },
      "card-3": {
        id: "card-3",
        content: {
          text: "Bees?",
          pack: 0,
          type: "WHITE",
          pick: 0,
        },
      },
      "card-4": {
        id: "card-4",
        content: {
          text: "Being a dick to children.",
          pack: 0,
          type: "WHITE",
          pick: 0,
        },
      },
    },
    rows: {
      "cards-1": {
        id: "cards-1",
        title: "Player Hand",
        cardIds: ["card-1", "card-2", "card-3", "card-4"],
      },
    },
    rowOrder: ["cards-1"],
  });

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const row = cardState.rows[source.droppableId];
    const newCardIds = Array.from(row.cardIds);

    newCardIds.splice(source.index, 1);
    newCardIds.splice(destination.index, 0, draggableId);

    const newRow = {
      ...row,
      cardIds: newCardIds,
    };

    const newCardState = {
      ...cardState,
      rows: {
        ...cardState.rows,
        [newRow.id]: newRow,
      },
    };

    setCardState(newCardState);
  };

  return (
    <React.Fragment>
      <Container>
        <DragDropContext onDragEnd={onDragEnd}>
          {cardState.rowOrder.map((rowId) => {
            const row = cardState.rows[rowId];
            const cards = row.cardIds.map((cardId) => cardState.cards[cardId]);

            return <CardRow key={row.id} row={row} cards={cards} />;
          })}
        </DragDropContext>
      </Container>
    </React.Fragment>
  );
}
