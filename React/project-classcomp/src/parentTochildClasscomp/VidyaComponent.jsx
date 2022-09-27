import { Component } from "react";

export class VidyaComponent extends Component{
    constructor(){
        super();
        this.state={
            myName:"Srividya",
            person:{
                fname:"Srinivas",
                lname:"Srividya"
            },
            users:["Vasu","Vidya","Ram","Sai"]
        }
    }
    render(){
        return <div>
            <h2>Hello - {this.state.myName}</h2>
            <p>{this.state.fname}-{this.state.lname}</p>
            <ul>
                {this.state.users.map((user)=>{
                    return <li>{user}</li>
                })}
            </ul>
            <h2>Hello form Calss Component</h2>
            <h2>Welcome to Class Component</h2>
            <img src="./assets/myimage.jpg" alt="" />
        </div>
    }
}