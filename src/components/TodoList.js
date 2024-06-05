import React, {useEffect, useState} from 'react';
import CreateTask from '../modals/CreateTask'
import Card from './Card';
import { Checkbox } from '@mui/material';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    const [CheckList, setCheckList] = useState([])
    
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
        let arr2 = localStorage.getItem("Checkbox")

        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }

        if(arr2){
            let obj2 = JSON.parse(arr)
            setCheckList(obj2)
        }
    }, [])


    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }

    // input (checkbox) 만들고, 완료한 TODO check 처리
    // 완료한 TODO를 CheckBox에 저장
    const inputTask = (taskObj, index) => {
        let tempCheck = CheckList;
        tempCheck.push(taskObj);
        localStorage.setItem("checkbox", JSON.stringify(taskObj));
        setCheckList(CheckList);

        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false);
        window.location.reload()
    };

    return (
        <>
            <div className = "header text-center">
                <h3>Todo List</h3>
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)} >Create Task</button>
            </div>
            <div className = "task-container">
            {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray} inputTask = {inputTask} />)}
            </div>
            <CreateTask toggle = {toggle} modal = {modal} save = {saveTask}/>
        </>
    );
};

export default TodoList;