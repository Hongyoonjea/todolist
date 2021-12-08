import React, { Component } from 'react';
import Todolist from './component/Todolist';
import TodoInfolist from './component/TodoInfolist';


class App extends Component {

  //  데이터를 추가할때마다 각 데이터의 고유한 아이디 값이  들어가도록한것
  id = 4;


    // 배열을 다르는 방법 : 리액트에서는 불변성을 꼭 유지, 어떠한 값을 수정하게 될때 언제나 setstate사용, 
    // 내부에 있는 배열이나 객체를 바꾸게 될때 기존의 객체나 배열을 수정하지 않고 그것을 기반의로 새로운 객체나 배열을 만들어서 값을 주입해야한다
    // concat이라는 내장함수사용  this.setState({   imformaition: this.state.informaition.concat(data)  })
    // 기존의 있던 배열은 수정하지않고 새로운 배열을 만들어서 그 배열에 데이터를 집어넣고 그배열을 기존에있던 배열에 넣어주는 작업 


  state = {
    information: [
      {
        id: 0,
        time: '오전 7시',
        todolist: '일어나서 밥먹고 양치하기'
      },
      {
        id: 1,
        time: '오전 9시',
        todolist: '운동하기'
      },
      {
        id: 2,
        time: '오후 12시',
        todolist: '공부하기'
      },
      {
        id: 3,
        time: '오후 3시',
        todolist: '구미와 산책하기'
      }
    ],
    keyword:'',
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    })
  }

  handleCreate = (data) => {
    const { information } = this.state;
    // 비구조할당문법 코드를 더욱 짧고 보기 좋게 작성 할 수있음
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++
        //  데이터를 추가할때마다 각 데이터의 고유한 아이디 값이  들어가도록한것
      })
    });
  }
// 자식컴포넌트가 부모한테 값을전달하기  App컴포넌트 내부에서 
// handleCreate라는 매소드를 만들고 이 매소드를 자식컴포넌트한테 props값을 전달해주고 props로 전달한 함수를 호출시켜서 데이터값이 App한테 들어가게끔 작성을 해준다

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
 // 배열의 내장함수 map: 배열을 특정함수로 사용하여 전체적으로 변환해주고 싶을때 사용하는 함수
        info => {
          if (info.id === id) {
            return {
              id,
              ...data,
            };
          }
          return info;
        }
      )
    });
  }

  render() {
    return (
      <div>
        <Todolist onCreate={this.handleCreate} />
      
        <TodoInfolist 
        data={this.state.information.filter(
          info => info.time.indexOf(this.state.keyword) > -1
        )} 
        onRemove={this.handleRemove}
        onUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
