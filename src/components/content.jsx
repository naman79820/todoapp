import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useState , useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { DiVim } from "react-icons/di";

 
function content() {

const [todo, settodo] = useState("")
const [todos, settodos] = useState([])
const [showfinished, setshowfinished] = useState(true)

const sTls = (todos)=>{
  localStorage.setItem("todos", JSON.stringify(todos))
  
}

const togglefinished = (e)=>{
setshowfinished (!showfinished)
} 

useEffect(() => {
  let todoString = localStorage.getItem("todos")
  if(todoString) {

    let todos = JSON.parse(localStorage.getItem("todos"))
settodos(todos)
  }

 
}, [])




const handleDelete = (e , id) =>{
 
let newTodos = todos.filter(item=>{
  return item.id!==id

})
settodos(newTodos)
sTls(newTodos)
}

const handleEdit = (e , id) =>{
 let t = todos.filter(i =>
   i.id===id)
   
   settodo(t[0].todo)

  
  let newTodos = todos.filter(item=>{
    return item.id!==id
    
  
  })
  settodos(newTodos)
  sTls(newTodos)
}

const handleAdd = ()=>{
 
  const newTodos = [...todos, { id: uuidv4(), todo, isCompleted: false }];
  settodos(newTodos);
  settodo("");
 sTls(newTodos)
 
}

const handleChange = (e)=>{
 settodo(e.target.value)
 
}

const handleCheckbox = (e) =>{
let id = e.target.name
let index = todos.findIndex(item => {
  return item.id === id
})
let newTodos = [...todos]
newTodos[index].isCompleted = !newTodos[index].isCompleted
settodos(newTodos)
sTls(newTodos)
}


  return (
    <div className="w-full  mt-4">
      <div className="min-h-[80vh] 2xl:w-[30%] bg-violet-300 m-auto rounded-2xl w-1/2 max-[900px]:w-full">
        <div className="w-full h-12 flex justify-center items-center font-bold text-2xl max-[455px]:text-xl max-[380px]:text-lg">
          <span>iTask - Manage your todos at one place</span>
        </div>
        <div className="w-[95%] m-auto font-bold text-xl max-[380px]:text-lg">Add a Todo</div>
       
        <div className="">
          <input onChange={handleChange}
            type="text"
            name="search"
            value={todo}
            className="w-2/3 mt-4 ml-5 rounded-3xl h-8 outline-none pl-2 "
          />
          <button onClick={handleAdd} disabled={todo.length<1} className="bg-indigo-700 disabled:bg-slate-600  text-white p-1 w-16 rounded-3xl ml-5">
            Save
          </button>
        </div>
        <div className="w-[95%] m-auto mt-10">
          <input onChange={togglefinished} type="checkbox" name=" Show finished" checked={showfinished} id="" /> Show finished
         
        </div>
        <div className=" w-[95%] m-auto font-bold text-xl  border-black border-t-2 border-b-violet-300 border-x-violet-300 border-opacity-[0.2] mt-2 max-[380px]:text-lg">
          <span>Your Todos</span>
        </div>
        {todos.length===0 && <div className=" mt-5 w-[95%] m-auto"> No Todos to display </div>}

        {todos.map(item=>{
             
       return (showfinished||!item.isCompleted) && <div key={item.id} className="flex w-[95%] m-auto ">
          <div className="w-[95%] m-auto mt-5 flex gap-5 ">
            <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
            <p className={item.isCompleted?"line-through":""  }>{item.todo}</p>
          </div>
          <div className="  flex mt-5 gap-2 text-white ">
          <span onClick ={(e)=> {handleEdit(e , item.id)}} className="p-1 bg-violet-700 rounded-md cursor-pointer "><FaEdit /></span>

          <span onClick={(e)=> {handleDelete(e , item.id)}} className="p-1 bg-violet-700 rounded-md cursor-pointer"><MdDelete /></span>

          </div>
        </div>
        })}
      </div>
      
    </div>
  );
};

export default content;
