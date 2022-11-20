import React, { Component } from 'react';
import './App.css';
import Todo from './component/todo';

class App extends Component {
  constructor() {
    super()
    let title ='TODOS HELLO'
    let todoDefalut = [
      {
        id: 1,
        name: "Hoc Tap",
        isCompleted: true,
      },
      {
        id: 2,
        name: "Di choi",
        isCompleted: false,
      },
      {
        id: 3,
        name: "Ngu",
        isCompleted: false,
      }
    ]

    this.state={
      todos: todoDefalut,
      title: title,
      displayStatus: "all",
    }
  }

  // 1 function xóa  item: Nhận 1 tham số là id 
  // được gọi  trong onClick - button delete trong todo Component
  // xóa 1 phần tử trong mảng: sử dụng hàm filter để lọc các phần tử có giastrij khác giá trị truyền vao

    enterData = (event)=>{
      let val = event.target.value;
      if(val ==""){

      }else{
        console.log(val);
      // check enter nguoi dùng
      let {todos} = this.state;
      let ids = todos.map(x=>x.id)
      let id = ids.length > 0? Math.max(...ids) + 1 : 1;
      if(event.keyCode == 13){
        let obj = { 
        id: id,
        name: val,
        isCompleted: false,
        }

        this.setState({
          todos:[...this.state.todos, obj]
        })
        event.target.value  = ""
      }
      }
    }

    changeStatusCompleted= (id)=>{
      let {todos} = this.state;  
      let obj = todos.find(x => x.id == id);
      obj.isCompleted =!obj.isCompleted;  
      this.setState({
        todos:[...todos]
      })
    }

    deleteItem =(id)=>{
    let {todos} = this.state;
     let newArray = todos.filter(x=> x.id !=id);
     this.setState({
      todos: [...newArray]
     })
    }

    clearCompleted =()=>{
      let {todos} = this.state;
      this.setState({
        todos:[...todos.filter(x => !x.isCompleted)]
      })
    }

    changeDisplayStatus=(status)=> {
      this.setState({
        displayStatus: status,
      })
    }
      
    render(){
      let {todos,displayStatus} = this.state;
      if(displayStatus == "active"){
        todos= todos.filter(x=> !x.isCompleted);
      } else if(displayStatus == "completed"){
        todos= todos.filter(x=> x.isCompleted)
      } 
      let atives = this.state.todos.filter(x => !x.isCompleted);
      return (
        <div>
          <h1>{this.state.title}</h1>
          <div className='box'>
            <div className='box-header'>
              <input type="text" placeholder='Nhap cong viec' onKeyUp={this.enterData}/>
            </div>
            <div className='box-body'>
              <div className='list'>
                {
                  //template String
                  todos.map(x => (
                    <Todo changeStatusCompleted={this.changeStatusCompleted} deleteItem={this.deleteItem} todo={x} />
                  ))
                }

              </div>
            </div>
            <div className='box-footer d-flex'>
              <p>{atives.length} item left</p>
              <div className='d-flex'>
                <button onClick={()=>{this.changeDisplayStatus("all")}}>ALL</button>
                <button onClick={()=>{this.changeDisplayStatus("active")}}>Ative</button>
                <button onClick={()=>{this.changeDisplayStatus("completed")}} >Completed</button>
              </div>
              <p onClick={()=>{this.clearCompleted()}}>Clear Completed</p>
            </div>
          </div>
        </div>
      );
    }
  }

export default App;