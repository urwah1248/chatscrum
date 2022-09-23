import React, {useState} from 'react'
import tasklist from '../static/tasks'
import './tasks.css'
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'


export default function Tasks() {
const[taskroll, updateTaskRoll] = useState(tasklist)

const handleOnDragEnd = result => {
    if(result.destination) return;
    const items = Array.from(taskroll);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateTaskRoll(items);
}
  return (
    <div className="taskboxes">
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="container">
                <div className="weeklytasks">
                    <h1>Weekly Tasks</h1>
                    <Droppable droppableId='tasket'>
                        {(provided) => (
                            <ul id='weeklytasks' {...provided.droppableProps} ref={provided.innerRef}>
                            {tasklist.map(({id, item}, index) => {
                                return <Draggable key={id} draggableId={id} index={index}>
                                    {(provided) => (
                                        <li className='task' {...provided.draggableProps} {...provided.draggableProps} ref={provided.innerRef}>{item}</li>
                                    )}
                                    {provided.placeholder}
                                    </Draggable>
                            })}
                        </ul>
                        )}
                        
                    </Droppable>
                </div>

                <div className="dailytasks">
                    <h1>Daily Tasks</h1>
                    <Droppable droppableId='tasket2'>
                    {(provided) => (
                        <ul id='dailytasks' {...provided.droppableProps} ref={provided.innerRef}>
                            <Draggable>
                            {(provided) => (
                                <li className='task' {...provided.draggableProps} {...provided.draggableProps} ref={provided.innerRef}> Sample</li>
                            )}
                            {provided.placeholder}
                            </Draggable>
                        </ul>
                    )}
                    </Droppable>
                    
                </div>
            </div>
        </DragDropContext>
    </div>
  )
}
