import { useState } from "react";
import { Card, CardBody, CardTitle } from "reactstrap"
import axios from "axios";
import {TASK_URL} from '../CONSTS.json';

const CreateTask = ({trigger}) => {

    // states for form
    const [taskName, setTaskName] = useState('');
    const [deadline, setDeadline] = useState('');

    const create = (e) => {
        e.preventDefault(); 
        axios.post(`${TASK_URL}/create`, {taskName,deadline})
            .then((res) => {
                // console.log(res.data);
                clearValues();
                trigger(res.data);
            }).catch((err) => {
                trigger(err.data);
            })
    }

    const clearValues = () => {
        setTaskName('');
        setDeadline('');
    }

    return(
        <div className="bg-light border-right" id="sidebar">
            <Card>
                <CardBody>
                    <CardTitle>Create New Task</CardTitle>
                    <form onSubmit={create}>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Name of Task..."
                            value={taskName}
                            onChange={({target}) => setTaskName(target.value)}
                        />
                        <input
                            type="date"
                            className="form-control"
                            placeholder="Deadline"
                            value={deadline}
                            onChange={({ target }) => setDeadline(target.value)}
                        />
                        <br/>
                        <button type="submit" className="btn btn-outline-success col-md-12">Create</button>
                    </form>
                </CardBody>
            </Card>
        </div>     
    )
}

export default CreateTask; 