//! Without Toolkit or react
//* 1. initState = {name:"name"}
//* 2. Reducer fn (state = initState,action)
        // if (action.type==="blalba"){
            // return {...state, name:"newName"}
        // return state 
//* 3. Build store and put the reducer into it |
//* and this store automatic create Global State by the name of initState 
    // const store = Redux.createStore("counterReducer")
//* 4. Create View | component!
    // const counterApp = () => {document.getElementById("counter").innerText = store.getState().counter;}
    // Important code: store.getState().counter;
    // counterApp();
//* 5. store.subscribe(counterApp) ->  Connect reducer fn to store -> to see update imediatily 
    // store.subscribe(counterApp)
//* 6. Create Actions
    // const action = {type:"increase", number:5}l
//* 7. Create Dispatch
    // store.dispatch(action)
         
//! With Toolkit and react
//* createSlice({name:'',inialState:{isLoggedIn:false,reducers:{logIn:(state)=>{state.isLoggedIn= true}},}})
import "redux"
{/* <button id=" increase">increase</button>
    <button id="decrease">decrease</button> */}
const initState = {counter:0}

const counterReducer = (state = initState, action)=>{
    if(action.type ==="increase"){
        return {...state,counter : state.counter + state.number}
    }
    if(action.type ==="increase"){
        return {...state, counter : state.counter - state.number}
    }
    return state
}

const store = Redux.createStore("counterReducer")

const counterApp = () => {
    document.getElementById("counter").innerText = store.getState().counter;
}
counterApp();

store.subscribe(counterApp)

document.getElementById("increase").addEventListener("click",()=>{
    const action = {type:"increase", number:5}
    store.dispatch(action)
    // OR: store.dispatch({type: "decrease", payload: {factor: 1} });
})
document.getElementById("increase").addEventListener("click",()=>{
    store.dispatch({type: "decrease", payload: {number: 1} });
})


