import React from 'react';

// Components
import { Todo } from './Todo';

export function TodoList(props) {
  return (
    <div>
      {props.state.map((item, index) => {
        return <Todo item={item} key={index} handleComplete={props.handleComplete} />
      })}
    </div>
  );
};