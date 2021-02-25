import { Toast, ToastBody, ToastHeader } from "reactstrap";
import DeleteTask from "./DeleteTask";
import EditTask from "./EditTask";

const SingleTask = ({ item, trigger }) => {

    return (
        // <Card>
        <div className="p-6 my-2 rounded">
            <Toast>
                <ToastHeader>{item.taskName}
                </ToastHeader>
                <ToastBody style={{ height: "auto" }}>
                    {item.deadline}
                    <hr />
                    <DeleteTask className="float-right" del={item._id} trigger={trigger} />
                    <EditTask className="float-right" item={item} trigger={trigger} />
                </ToastBody>
            </Toast>
        </div>

    )
}
export default SingleTask; 