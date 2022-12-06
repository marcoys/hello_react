import React, { Component, useState } from 'react'

const EventPracice = () => {
  const [ form, setForm ] = useState({
    username: '',
    message: ''
  })

  const { username, message } = form;
  const onChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  }

  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: ''
    })
  };
  const onKeyPress = e => {
    if( e.key === 'Enter' ) {
      onClick();
    }
  }

  return (
    <div>
       <input type="text" name="username" placeholder='사용자명' onChange={ onChange } value={ username }/>
      <input type="text" name="message" placeholder='아무거나 입력해 보세요' value={message} onKeyPress={ onKeyPress } onChange={onchange}  />
     
      <button onClick={ onClick }>확인</button>
    </div>
  );
};

export default EventPracice;