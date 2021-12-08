import React, { Component } from 'react';


class Todolist extends Component {
    input = React.createRef();

    state = {
        time: '',
        todolist:'',
    }

  handleChange = (e) => {
    console.log('e.target.value', e.target.value)
    this.setState({
      [e.target.name]: e.target.value
      // input의 네임값
    });
  }

  handleSubmit = (e) => {
     e.preventDefault();
     this.props.onCreate(this.state);
     this.setState({
         time:'',
         todolist:'',
     });
     this.input.current.focus();
  }
  // submit버튼을 누를때 페이지가 리로딩되는걸 방지하기위해서(e.preventDefault 함수호출)

  render() {
    const style = {
      border: '1px solid black',
      padding: '10px',
      margin: '8px',
      backgroundColor: 'gray',
      fontSize: '50px',
      color: 'white',
    
    };
  
    return (
      <form onSubmit={this.handleSubmit}>
        <div style={style} > To do list 
        <br/>
          <input 
            name="time"
            placeholder="시간" 
            onChange={this.handleChange} 
            value={this.state.time} 
            ref={this.input}
          />
          
          <input
            name="todolist" 
            placeholder="할일"
            onChange={this.handleChange} 
            //이벤트값 state에서 받음
            value={this.state.todolist}
          />
          <button type="submit">만들기</button> 
        </div>
      </form>
     
        );
    }
}

export default Todolist;

// 자식컴포넌트가 부모한테 값을전달하기  App컴포넌트 내부에서 
// handleCreate라는 매소드를 만들고 이 매소드를 자식컴포넌트한테 props값을 전달해주고 props로 전달한 함수를 호출시켜서 데이터값이 App한테 들어가게끔 작성을 해준다