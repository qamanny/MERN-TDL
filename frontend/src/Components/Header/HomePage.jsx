import CreateTask from "../Sidebar/CreateTask"
import { useState } from 'react';
import ReadTasks from "../ReadTasks";

const HomePage = () => {

    const [msg, setMsg] = useState('');

    const trigger = (data) => {
        setMsg(data);
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <CreateTask trigger={trigger} />
            </div>
            <div className="container">
                <div className="col-md-9">
                    <div className="alert alert-success">{msg}</div>
                    <ReadTasks msg={msg} trigger={trigger}/>
                </div>
            </div>
        </div>
    )
}
export default HomePage; 