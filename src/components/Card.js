import React, {useState} from 'react';
import EditTask from '../modals/EditTask'

const Card = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const colors = {
        "study" : {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        "work" : {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        "hobby" : {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        "play" : {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        "default" : {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    }

    const color = colors[taskObj.Category] || colors["default"];;

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }

    return (
        <div class = "card-wrapper mr-5">
            <div class = "card-top" style={{"background-color": color.primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": color.secondaryColor, "border-radius": "10px"}}>{taskObj.Name}</span>
                <p className = "mt-3">{taskObj.Description}</p>

                <div style={{"padding": "10px" }}>
                    <button 
                        style={{
                            "color" : color.primaryColor, 
                            "cursor" : "pointer",
                            "padding": "10px 20px",
                            "borderRadius": "5px",
                            "border": "none"
                            }} 
                            onClick = {() => setModal(true)}>Update</button>
                    <button 
                        style = {{
                            "color" : color.primaryColor, 
                            "cursor" : "pointer",
                            "padding": "10px 20px",
                            "borderRadius": "5px",
                            "border": "none"
                            }} 
                        onClick = {handleDelete}>Delete</button>
                </div>
        </div>  
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    );
};

export default Card;