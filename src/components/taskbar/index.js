import React from 'react';

class TaskBar extends React.Component{
    render(){
        return(
            <div>
                <input placeholder="add your task here" ref='task'type="text"/>
            <button >Add Task</button>
            </div>
        )
    }
}