import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { byBook, byBooks } from '../../redux/book/bookAction';

export const Book = () => {

    const count = useSelector((state) => state.book.countOfBook);
    const dispatch = useDispatch();
    const bookRef = useRef();


  return (
    <div>
        <h3>Book : {count}</h3>
        <button onClick={() => dispatch(byBook())}>Buy book</button>
        <div style={{marginTop: '10px'}}>
            <input type='text' ref={bookRef} placeholder='How many books' />
            <button onClick={() => dispatch(byBooks(bookRef.current.value))}>Add +</button>
        </div>
    </div>
  )
}
