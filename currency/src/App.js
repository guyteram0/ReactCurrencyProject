import React, { Component } from 'react'
import './App.css';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Exchange from './components/Exchange';
import Update from './components/Update';
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      View:[],
      Table:[{type:'Usd',rate:3.4},{type:'Euro',rate:4.1},{type:'ILS',rate:1}]
    }
  }
  Start2=(f,t,h,a)=>{
    this.setState({View:[...this.state.View,{From:f,To:t,HowMuch:h,Answer:a}]})
  }
  X2=(i)=>{
    let del=this.state.View.filter((e,index)=>(index!=i)) ;
    this.setState({View:[...del]})
  }
  Upd2=(t,r)=>{
    this.setState({Table:[...this.state.Table,{type:t,rate:r}]})
  }
  render() {
    return (
      <div>
        <Router>
          <div className='App2'>
          <h3>USD:3.4 / EURO:4.1</h3>
        <Link to='/'><button style={{backgroundColor:'green'}} className='btn1'>HomePage</button></Link>
        </div>
          <Switch>
          <Route exact path='/' component={()=>{return <Exchange Start1={this.Start2} view={this.state.View} X1={this.X2}/>}}/>
          {/* <Route exact path='/Update' component={()=>{return <Update table={this.state.Table} Upd1={this.Upd2}/>}}/> */}
          </Switch>
        </Router>
      </div>
    )
  }
}
