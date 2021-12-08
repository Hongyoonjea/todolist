import React, { Component, Fragment } from 'react';

class TodoInfo extends Component {

    state = {
        editing: false,
        time: '',
        todolist:''
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state !== nextState) {
            return true;
        }
        return this.props.info !== nextProps.info;
    }

    handleRemove = () => {
        const { info, onRemove } = this.props;
        onRemove(info.id);
    }

    handleToggleEdit = () => {
        const { info, onUpdate } = this.props;
        if (this.state.editing) {
            onUpdate(info.id, {
                time: this.state.time,
                todolist: this.state.todolist
            });
        } else {
            this.setState({
                time: info.time,
                todolist: info.todolist,
            });
        }
        this.setState({
            editing: !this.state.editing,
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.time]: e.target.value,
        });
    }
    // 이벤트 객체 앞으로 어떻게 수정할지

    render() {
        const { time, todolist } = this.props.info;
        // App에 props를 비구조할당을 통해서 받아옴
        const { editing } = this.state;

        const style = {
            border: '3px solid gray',
            padding: '10px',
            margin: '8px',
            color: 'pink',
            backgroundColor: 'black',
        };

    

        console.log(time);

        return (
            <div style={style}>
                {
                    editing ? (
                        <Fragment>
                            <div> 
                                <input 
                                name="time"
                                onChange={this.handleChange} 
                                value={this.state.time}
                            />
                            </div>
                            <div>
                                <input 
                                name="todolist"
                                onChange={this.handleChange}
                                value={this.state.todolist} 
                            />
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div><b>{time}</b></div>
                            <div>{todolist}</div>
                        </Fragment>
                    )
                } 
                <button onClick={this.handleRemove}>X</button>
            
            </div>
        );
    }
}

export default TodoInfo;