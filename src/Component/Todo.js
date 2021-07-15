import React, { Component } from 'react'
import  {appState} from './Data';
import './ToDo.css';
export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newlist:'',
            mylist:'',
            mysublist:'',
            dropdown:'',
            isShow: false,
            newData:[],
             appState:appState,
             sublist:'',
             isShow:false,
             checked:false
        }
    }
            onChangeHandler=(event)=>{
                this.setState({[event.target.name]:event.target.value});
                this.state.mylist=event.target.value
                this.state. mysublist=event.target.value
                console.log(event.target.value)
            }
            onClickHandler =(event)=>{
                            const list=this.state.mylist
                            const appState=this.state.appState
                            appState.push({name:list,todo:[]})
                            this.setState({appState:appState}) 
                            alert('NewList added successfully')
                    }
            onSubmitHandler=(event)=>{
                // event.preventDefault();
            }
            onSublistDropdown=(e)=>{
                const selectedList = e.target.value;
                var selectedListDetails=appState.filter( (element) => {
                    return element.name === selectedList;
                })[0]
                this.setState({newData:selectedListDetails})
            }
            onAddSubList=(e)=>{
            alert('sublist added successfully')
            const sublist=this.state.mysublist;
            const appState=this.state.appState;
        //     const myTodo=appState.map((a,b)=>{
        //       return  a.todo
        //   })
            // console.log(ww)
            // const todo=myTodo;
            // //  todo.push([{name:sublist}]);
            //  console.log(todo)
             const newData=this.state.newData
             console.log(newData)
            //  const myTodo=newData.map((a,b)=>{
            //     return  a.todo
            // })
            // console.log(myTodo)
            //  appState.push({todo:todo})
            //  this.setState({appState:appState}) 
            //     console.log(appState)  
            const display=  newData && newData.todo && Array.isArray(newData.todo ) && newData.todo.push({name:sublist})
                   console.log(display)
        }
    render() {
        const {newData}=this.state
        console.log(newData)
        const display=  newData && newData.todo && Array.isArray(newData.todo ) && newData.todo.map((a,b)=>{
            return <li key={b} style={{textAlign:'justify'}} type="none" > {' '}<input  type="checkbox" class="strikethrough"/>{' '}<span class="strikeThis">{a.name}</span></li>
        })
        return (
            <div >
             <div className="input-mid"><h1>Lists</h1></div>
             <form onSubmit={this. onSubmitHandler} >
                        <div class="input-group mb-3 ">
                            <input type="text" class="form-control" placeholder="New List" name="newlist" value={this.state.newlist}  onChange={this.onChangeHandler}/>
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" onClick={this.onClickHandler}>+Add</button>
                            </div>
                        </div>
                        <select  name="dropdown" multiple="" class="ui fluid dropdown" onChange={this.onSublistDropdown}>
                            {this.state.appState.map(
                                    function(data, key){  return (
                                        <option key={key} value={data.name}>{data.name}</option> )
                                        }
                            )
                            }
                         </select>
                    <ul>
                      {display}
                    </ul>
             </form>
             <div class="input-group mb-3 ">
                            <input type="text"  class="form-control" placeholder="sublist" name="sublist" value={this.state.sublist}  onChange={this.onChangeHandler} />
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" onClick={this.onAddSubList}>+AddSublist</button>
                            </div>
                    </div>
             {/* <button className="my-button" onClick={this.onAddSubList}>+ List item</button> */}
            </div>
        )
    }
}