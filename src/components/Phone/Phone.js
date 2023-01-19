import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyPhone, buyPhones } from '../../redux/phone/phoneAction';

export const Phone = () => {

  const phone = useSelector((state) => state.phone.countOfPhone);
  const dispatch = useDispatch();
  const phoneRef = useRef();

  return (
    <div>
      <h3>Phone: {phone}</h3>
      <button onClick={() => dispatch(buyPhone())}>Buy phone</button>

      <div style={{marginTop: '10px'}}>
        <input ref={phoneRef} type="text" placeholder='How many phone' />
        <button onClick={() => dispatch(buyPhones(phoneRef.current.value))}>Add +</button>
      </div>
    </div>
  )
}
