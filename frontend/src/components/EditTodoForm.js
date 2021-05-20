import {useParams} from "react-router-dom";
import {useState} from "react";

function EditTodoForm({ todo, updateTodo}) {


    const [description, setDescription] = useState(todo.description)
    const [status, setStatus] = useState(todo.status);


    function handleSubmit(event){
        event.preventDefault();
        if(description==="" ){
            return;
        }

        updateTodo({...todo, description, status})
    }


    return <div>

        <form onSubmit ={handleSubmit}>
            <label>
                Description:
                <input type="text"
                       name="description"
                       value={description}
                       onChange={(event)=> setDescription(event.target.value)}
                />
            </label>
            <label>
                Status:
                <select name="state" value={status} onChange={(event)=>setStatus(event.target.value)}>
                    <option value ="OPEN">open</option>
                    <option value ="IN_PROGRESS">doing</option>
                    <option value ="DONE">done</option>
                </select>
            </label>
            <button type="submit">Submit</button>

        </form>


    </div>
}
export default EditTodoForm