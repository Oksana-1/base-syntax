import React from 'react';
const UserOutput = (props) => {
    const style = {
      backgroundColor: '#eee',
      padding: '25px',
      margin: '15px 0',
      width: '300px',
    }
    return (
      <div style={style}>
        <p>Your name is:</p>
        <p>{props.userName}</p>
      </div>
    );
}
export default UserOutput;