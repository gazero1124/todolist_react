import React, { useMemo, useState, useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoContext } from '../App';

const TodoList = () => {
  const todo {onUpdate, onDelete } = useContext(TodoContext);

  const [search, setSearch] = useState('');
  const onChangeSearch = (event) => {
    setSearch(event.target.value)
  };
  const getSearchResult = () => {
    return search === '' ?
      todo : todo.filter(list => 
        list.content.toLowerCase().includes(search.toLowerCase()))
  };
  const analyzeTodo = useMemo(() => {
    console.log('analyzeTodo 함수 호출!!!');
    const totalCount = todo.length;
    const doneCount = todo.filter(list => list.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount
    }
  }, [todo]);

  const {totalCount, doneCount, notDoneCount} = analyzeTodo;

  return (
    <div className='TodoList'>
      <h4>Todo List 📌</h4>
      
      <div className='listCount'>
        <p>총 개수 : {totalCount}</p>
        <p>완료된 할 일 : {doneCount}</p>
        <p>아직 완료하지 못한 할 일 : {notDoneCount}</p>
      </div>

      <input 
        value={search}
        onChange={onChangeSearch}
        className='searchbar' 
        placeholder='검색어를 입력해 주세요!' 
      />
      <div className='list_wrapper'>
        { 
          getSearchResult()
          .map(list => {
            return <TodoItem 
              key={list.id} {...list} 
              onUpdate={onUpdate} 
              onDelete={onDelete}
            />
          })
        }
      </div>
    </div>
  )
}

export default TodoList;