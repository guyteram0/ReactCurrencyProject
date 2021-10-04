import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Exchange extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             From:'',
             To:'',
             HowMuch:'',
             Usd:'3.4',
             Euro:'4.1',
             Ils:'1',
             flag:false,
             answer:'',
             index:props.index
        }
    }
    Start=()=>{
        this.props.Start1(this.state.From,this.state.To,this.state.HowMuch,this.state.answer)
        if (this.state.From == 'USD' && this.state.To == 'ILS') {
            var answer = this.state.Usd * this.state.HowMuch
            alert(answer)
        }
        else if (this.state.From == 'ILS' && this.state.To == 'USD') {
            let answer = this.state.HowMuch / this.state.Usd
            alert(answer)
        }
        else if (this.state.From == 'EURO' && this.state.To == 'ILS') {
            let answer = this.state.HowMuch * this.state.Euro
            alert(answer)
        }
        else if (this.state.From == 'ILS' && this.state.To == 'EURO') {
            var answer = this.state.HowMuch / this.state.Euro
            alert(answer)
        }
    }
    View=()=>{
      this.setState({flag:!this.state.flag})
    }
    X=()=>{
        this.props.X1(this.state.index)
    }
    Show=()=>{
        if (this.state.flag == true) {
          return( <div>
                   {this.props.view.map((e)=>{
                return( <div> 
                    <h2>From:{e.From} To:{e.To}</h2>
                    <h2>{e.HowMuch}</h2>
                    <button className='btn1' style={{backgroundColor:'red'}} onClick={this.X}>X</button>
                </div>)
            })}
          </div>)
        }
    }
    render() {
        return (
            <div className='App'>
                <h2>Exchange:</h2>
                <label>From:  </label>
                <select placeholder='type' onChange={(v)=>{this.setState({From:v.target.value})}}>
                    <option>Coin Type:</option>
                    <option>USD</option>
                    <option>ILS</option>
                    <option>EURO</option>
                </select>
                <label> : </label>
                <input placeholder='How Much' onChange={(v)=>{this.setState({HowMuch:v.target.value})}}/><br/><br/>
                <label>To:  </label>
                <select placeholder='type' onChange={(v)=>{this.setState({To:v.target.value})}}>
                <option>Coin Type:</option>
                <option>USD</option>
                <option>ILS</option>
                <option>EURO</option>
                </select><br/><br/>
                <button style={{backgroundColor:'blue'}} className='btn1' onClick={this.Start}>Start</button><br/><br/>
                {/* <Link to='/Update'><button>Update</button></Link> */}
                {/* <Link to='https://www.facebook.com/'><button>Share</button></Link> */}
                <button style={{backgroundColor:'blue'}} className='btn1' onClick={this.View}>View</button>
                 {this.Show()}
            </div>
        )
    }
}
