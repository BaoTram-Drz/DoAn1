// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import DraggableButton from './Button/DraggableButton'
// import DropZone from './Button/DropZone'


// const Answers = styled.p`
//     text-align: center;
//     padding: 0px 24px;
//     font: normal 400 28px 'Autour One';
// `;
// const ButtonsContainer = styled.div`
//     width: 80%;
//     display: flex;
//     justify-content: space-around;
//     flex-wrap: wrap;
//     margin: 3% auto 5% auto;
// `;
// const Game4 = ({data}) => {

//     const [draggedItems, setDraggedItems] = useState([]);

//     if (!data) {
//         return <p>Loading...</p>;
//     }

//     const handleDrop = (id) => {
//         setDraggedItems((prev) => [...prev, id]);
//       };
    
//       const resetDraggedItems = (resetItems) => {
//         setDraggedItems((prev) => prev.filter((item) => !resetItems.includes(item)));
//       };

//       const answerOptions = data.answerOptions;

//       return (
//         <>
//           <Answers>{data.question}</Answers>
//           <DndProvider backend={HTML5Backend}>
//             <DropZone onDrop={handleDrop}  resetDraggedItems={resetDraggedItems}/>
//             <ButtonsContainer>
//               {answerOptions.map((item) => {
//                 if (draggedItems.includes(item.id)) {
//                   return null;
//                 }
//                 return (
//                   <DraggableButton key={item.id} id={item.id} text={item.text} />
//                 );
//               })}
//             </ButtonsContainer>
//           </DndProvider>
//         </>
//       );
// };

// export default Game4;
