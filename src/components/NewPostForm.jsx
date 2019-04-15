import React from 'react';

function NewPostForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='title'
          placeholder='Post Title'/>
        <input
          type='text'
          id='author'
          placeholder='Post Author'/>
        <textarea
          id='details'
          placeholder='Post details'/>
        <button type='submit'>Submit post</button>
      </form>
    </div>
  );
}

export default NewPostForm;
