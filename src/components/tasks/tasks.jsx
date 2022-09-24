import React, { useState } from "react";
import tasklist from "../static/tasks";
import "./tasks.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Tasks() {
  const [taskroll, updateTaskRoll] = useState(tasklist);

  const handleOnDragEnd = (result) => {
    if (result.destination) return;
    const items = Array.from(taskroll);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateTaskRoll(items);
  };
  return (
    <div className="taskboxes">
      <DragDropContext onDragEnd={handleOnDragEnd}>
          <div className="weeklytasks">
            <h1>Weekly Tasks</h1>
            <Droppable droppableId="tasket">
              {(provided) => (
                  <ul id="weeklytasks" {...provided.droppableProps} ref={provided.innerRef} >
                    {taskroll.map(({ id, item }, index) => (
                        <Draggable key={id} draggableId={id} index={index}>
                          {provided => (
                              <li id={id} className="task" {...provided.draggableProps}  {...provided.dragHandleProps} ref={provided.innerRef}>
                                {item}
                              </li>
                            )}
                        </Draggable>)
                    )}
                    {provided.placeholder}
                  </ul>
                )}
            </Droppable>
          </div>

          <div className="dailytasks">
            <h1>Daily Tasks</h1>
            <Droppable droppableId="tasketer">
              {(provided) => (
                <ul id="dailytasks" {...provided.droppableProps} ref={provided.innerRef}>

                  {taskroll.map(({id, item}, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>{item}</li>
                        )}
                      </Draggable>)
                  })}
                  {/* <Draggable draggableId="dragone" index={1}>
                  //   {(provided) => (
                  //     <li className="task" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                  //       Sample2
                  //     </li>
                  //   )}
                  // </Draggable>
                  // <Draggable draggableId="dragtwo" index={2}>
                  //   {(provided) => (
                  //     <li className="task" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                  //       Sample1
                  //     </li>
                  //   )}
                  // </Draggable> */}

                  {/* {provided.placeholder} */}
                </ul>
              )}
            </Droppable>
          </div>
      </DragDropContext>
    </div>
  );
}
