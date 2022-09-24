import React, { useState } from "react";
import tasklist from "../static/tasks";
import "./tasks.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

export default function Tasks({data, deleteTask}) {
  const [taskroll, updateTaskRoll] = useState(data);

  const handleOnDragEnd = (result) => {
    if (result.destination) return;
    const tasks = Array.from(taskroll);
    const [reorderedItem] = tasks.splice(result.source.index, 1);
    tasks.splice(result.destination.index, 0, reorderedItem);

    updateTaskRoll(tasks);
  };
  return (
    <div className="taskboxes">
      <DragDropContext onDragEnd={handleOnDragEnd}>
          <div className="weeklytasks">
            <h1>Weekly Tasks</h1>
            <Droppable droppableId="tasket">
              {(provided) => (
                  <ul id="weeklytasks" {...provided.droppableProps} ref={provided.innerRef} >
                    {data.map(({ id, name, time_created, scrumgoalhistory_set }, idx) => {
                    return (
                      <Draggable draggableId={`${id}`} index={idx} key={id}>
                        {(provided) => (
                          <li onClick={() => {deleteTask(id)}} className="task"{...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            {name}
                            <div className="blue">
                              {time_created.slice(0, 10)} at {time_created.slice(12, 16)}
                            </div>
                            <div className="brown">
                              {scrumgoalhistory_set.map(
                                ({ id, done_by }) => (
                                  <p key={id}>{done_by}</p>
                                )
                              )}
                            </div>
                          </li>
                          
                        )}
                      </Draggable>)
                  })}
                    {provided.placeholder}
                  </ul>
                )}
            </Droppable>
          </div>

          <div className="dailytasks">
            <h1>Daily Tasks</h1>
            <Droppable droppableId="tasketer">
              {(provided) => (
                  <ul id="weeklytasks" {...provided.droppableProps} ref={provided.innerRef} >
                    {data.map(({ id, name, time_created, scrumgoalhistory_set }, idx) => {
                    return (
                      <Draggable draggableId={`${id}`} index={idx} key={id}>
                        {(provided) => (
                          <li onClick={() => {deleteTask(id)}} className="task"{...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                            {name}
                            <div className="blue">
                              {time_created.slice(0, 10)} at {time_created.slice(12, 16)}
                            </div>
                            <div className="brown">
                              {scrumgoalhistory_set.map(
                                ({ id, done_by }) => (
                                  <p key={id}>{done_by}</p>
                                )
                              )}
                            </div>
                          </li>
                          
                        )}
                      </Draggable>)
                  })}
                    {provided.placeholder}
                  </ul>
                )}
            </Droppable>
          </div>
      </DragDropContext>
    </div>
  );
}
