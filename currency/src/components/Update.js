// import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
// export default class Update extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              type:'',
//              rate:'',
//         }
//     }
//     Upd=()=>{
//         this.props.Upd1(this.state.type,this.state.rate)
//     }
//     render() {
//         return (
//             <div>
//                 <h2>Update</h2>
//                 {this.props.table.map((e)=>{
//                   return( <div>
//                       <h4>{e.type}-{e.rate}</h4>
//                   </div>)
//                 })}
//                 <input onChange={(v)=>{this.setState({type:v.target.value})}} placeholder='New Type'></input> <br/>
//                 <input onChange={(v)=>{this.setState({rate:v.target.value})}} placeholder='New Rate'></input> <br/><br/>
//                 <Link to='/'><button>Back</button></Link>
//                 <button onClick={this.Upd}>Update</button>
//             </div>
//         )
//     }
// }
