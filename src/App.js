import React,{useState, useEffect} from "react";

export default function App(){
    const [weight, setWeight] = useState(150);
    const [age, setAge] = useState(42);
    const [month] = useState("Febbruary");
    const [todos, setTodos] = useState([{text: "Eat Pie"}])
    useEffect(()=>{
        document.title = `Updated weight: ${weight}`;
    }, [weight])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(results => results.json())
        .then((data)=>{setTodos([{text: data.title}]);}, [])
    })
    return (
        <div className="app">
            <p>Current Weight: {weight}</p>
            <p>Age: {age}</p>
            <p>Month: {month}</p>
            <button onClick={()=>setWeight(weight + 10)}>
                {todos[0].text}
            </button>
        </div>
    )
}