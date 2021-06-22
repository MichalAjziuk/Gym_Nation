import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router';
import firebase from '../../../../firebase'
import Diets from '../../pages/Diets';
import ErrorPage from '../../pages/ErrorPage';
import OnlineTraining from '../../pages/OnlineTraining';
import Profile from '../../pages/Profile';
import Progress from '../../pages/Progress';
import Trainings from '../../pages/Trainings';
import styled from 'styled-components'


const Main = () => {
    const [title, setTitle] = useState('');
    const [todoList, setTodoList] = useState();

    const handleOnChange = (e) => {
        setTitle(e.target.value);
    }

    const createToDo = () => {
        const todoRef = firebase.database().ref("Todo");
        const todo = {
            title,
            complete: false,
        };
        todoRef.push(todo);
    }

    useEffect(()=>{
        const todoRef = firebase.database().ref("Todo");
        todoRef.on("value", (snapshot) => {
            const todos = snapshot.val();
            const todoList = []
            for(let id in todos){
                todoList.push(todos[id]);
            }
            console.log(todoList);
            setTodoList(todoList);
        });
    }, [])

    return (
            <Switch>
                <Route path="/progress" component={Progress}/>
                <Route path="/onlineTraining" component={OnlineTraining}/>
                <Route path="/trainings" component={Trainings}/>
                <Route path="/diets" component={Diets}/>
                <Route path="/profile" component={Profile}/>
                <Route component={ErrorPage}/>
            </Switch>
    )
}

export default Main;

{/* <h2>Wyślij zadanie</h2>
            <MainInput type="text" onChange={handleOnChange} value={title}/>
            <button onClick={createToDo}>Add Todo</button> */}