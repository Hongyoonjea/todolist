import React, { Component } from 'react';
import TodoInfo from './TodoInfo';

class TodoInfolist extends Component {
    static defaultProps = {
        data: []
    }

    render() {
        const { data, onRemove, onUpdate } = this.props;

        console.log('rendering list');
        const list = data.map(
            info => 
                (<TodoInfo 
                    onRemove={onRemove } 
                    onUpdate={onUpdate}
                    info={info} 
                    key={info.id} 
                    />
                )
            );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default TodoInfolist;