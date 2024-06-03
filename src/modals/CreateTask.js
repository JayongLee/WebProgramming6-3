import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

const CreateTaskPopup = ({ modal, toggle, save }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "taskName") {
            setTaskName(value);
        } else if (name === "description"){
            setDescription(value);
        }
        else {
            setCategory(value);
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        let taskObj = {};
        taskObj["Name"] = taskName;
        taskObj["Description"] = description;
        taskObj["Category"] = category;
        save(taskObj);
    };

    return (
        <Dialog open={modal} onClose={toggle}>
            <DialogTitle>Create Task</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <div className="form-group">
                        <TextField
                            label="Task Name"
                            variant="outlined"
                            fullWidth
                            value={taskName}
                            onChange={handleChange}
                            name="taskName"
                            margin="dense"
                        />
                    </div>
                    <div className="form-group">
                        <select 
                            label="Category"
                            class="form-select" 
                            onChange={handleChange} 
                            value={category}>
                            <option value="default">카테고리 분류</option>
                            <option value="study">공부</option>
                            <option value="work">일</option>
                            <option value="hobby">취미</option>
                            <option value="play">여가활동</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <TextField
                            label="Description"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={5}
                            value={description}
                            onChange={handleChange}
                            name="description"
                            margin="dense"
                        />
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={handleSave}>Create</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CreateTaskPopup;
