 const addtask=(task)=>{
return {
    type:'ADD_TASK',
    payload:task
};
},
deleteTask=(taskId)=>{
    return {
        type:'DELET_TASK',
        payload:taskId
    }
}

export default {addtask,deleteTask}