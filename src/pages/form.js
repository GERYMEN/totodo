// import { Delete } from '@material-ui/icons';
import react, {useState} from 'react';
import '../style.css'

function Formcreation (){
    
    const [value,setValue]=useState('');
    const [description,setDescription]=useState('');
    const [todos,setTodos]=useState([{
        title : "epl",
        desc : "english primer league",
        time : "01.01.2021 00:01"
    }]);
    let date =new Date();
    // var todolist=[''];
    // todolist=''+ toString(value);
    // todos.map((todo)=>{
        //     console.log(todo);
        // })
        console.log(todos);  
        console.log(date);
        // todos.map((toto)=>{
        //     console.log(toto);
        // })        
        return(

    <form className="" noValidate autoComplete="off" onSubmit={e=>{
        e.preventDefault();
        console.log(`submition request calling `,value)
        setValue('');
        setDescription('');
      let data = {
            title : value,
            desc : description,
            time : date
        }
        console.log("data packate condain",data);
        //setTodos(data);
         setTodos([...todos,data]);
        
        // console.log(`store todo list value are ${todos}`);
        }}>

    {/* <ul >
    {todos.map((todo,index)=>(
            
            <li key={index.toString()}>{todo}</li>
    ))}
    </ul> */}
    <react.Fragment>
    <div >
    <input type="text"  placeholder="add to do list" value={value} onChange={(e)=> setValue(e.target.value)} ></input>
    <input type="text"  placeholder="enter the discription" value={description} onChange={(e)=> setDescription(e.target.value)} ></input>
     <button type="submit">Enter </button>
        </div> 
    {/* <h6 >{date}</h6> */}
    <hr></hr>
    <h5> Values you are enterd in below</h5>
    <hr></hr>
    {todos.map((todo)=>
    <ul >
        <li key={todo.time} className="wrapper">
            <div>{todo.title}</div>
            <div>{todo.desc}</div>
            <div>{todo.time.toString()}</div>
            <div><button type="button" onClick={(todoIndex)=>{
                console.log(todo);
                const newtodo = todos.filter((tod) => tod.time !== todo.time)
                setTodos(newtodo)
                console.log(newtodo);

}}>delete</button></div>
             
             </li>
        {/* <li key={todo.time}>{todo.desc}</li> */}

        </ul>)} 
    </react.Fragment>
    </form>
)
// function Deletebutton(deletevalue){
//     return (
//         console.log(deletevalue)
//     )
// }

}
export default Formcreation;
