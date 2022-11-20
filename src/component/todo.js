import {React,Component} from "react";


class Todo extends Component
{
    constructor(props){
        super(props);
    }
    render(){
        let todoItem = this.props.todo;
        let {changeStatusCompleted} = this.props;
        let {deleteItem} = this.props;

        return (
            <div key={todoItem.id} className={`item ${todoItem.isCompleted? 'completed': ''}`}>  
            { todoItem.isCompleted && <input type="checkbox" onChange={()=>{changeStatusCompleted(todoItem.id)}}  defaultChecked />}
            { !todoItem.isCompleted && <input type="checkbox" onChange={()=>{changeStatusCompleted(todoItem.id)}}  value=""/>}
              <span> {todoItem.name} </span>
              <button type="" onClick={()=>{deleteItem(todoItem.id)}}>Delete</button>
            </div>
        )
    }
}

export default Todo;