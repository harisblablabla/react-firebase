import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fire from './fire'
import { connect } from 'react-redux'


function mapStateToProps(state) {
  return {
    count: state.count
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages:[],
      count: 0
    }
  }

  componentWillMount(){
    let messagesRef = fire.database().ref('data_lin').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
    let message = { text: snapshot.val(), id: snapshot.key };
    this.setState({ messages: [message].concat(this.state.messages)
    });
   })
   }

  addMessage(e){
    e.preventDefault();
    fire.database().ref('data_lin').push( this.inputEl.value );
    this.inputEl.value = '';
   }

   increment = () => {
     this.setState({count: this.state.count + 1})
   }

   decrement = () => {
     this.setState({count: this.state.count - 1})
   }

   increment_redux = () => {
    this.props.dispatch({type:'INCREMENT'})
   }

   decrement_redux = () => {
    this.props.dispatch({type:'DECREMENT'})
   }

  render() {
    return(
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Ready deploy to firebase
        </p>
      </header>
      <div>
      <h2>{this.state.count}</h2>
      <button onClick={this.increment}>tambah</button>
      <button onClick={this.decrement}>kurang</button>
      <p>--------------contoh dibawah pake redux--------------------</p>
      <h2>{this.props.count}</h2>
      <button onClick={this.increment_redux}>tambah</button>
      <button onClick={this.decrement_redux}>kurang</button>
    <h3>React ♥ Firebase Database</h3>
   <form onSubmit={this.addMessage.bind(this)}>
    <input type="text" ref={ el => this.inputEl = el }/>
    <input type="submit"/>
    <ul>
     {
      this.state.messages.map( message => <li
      key={message.id}>{message.text}</li> )
     }
    </ul>
   </form>
   </div>
    </div>
    )
  }
}

export default connect(mapStateToProps)(App);
