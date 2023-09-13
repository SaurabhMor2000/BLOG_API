import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import { Navigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
function CreatePost() {
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState('');
    const   modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      };
      const formats  = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ];
      const[files,setFiles] =useState('')
      
      const [redirect,setRedirect] = useState(false);


      async function createNewPost(ev){
         const data = new FormData();
         data.set('title',title);
         data.set('summary',summary);
         data.set('content',content);
         data.set('file',files[0]);
        ev.preventDefault();
        const response = await fetch('https://codapi.onrender.com/post',{
            method:'POST',
            body : data,
            credentials:'include',
        })
        if(response.ok){
    setRedirect(true);
        }
      }
      if(redirect){
        return <Navigate to = {'/'}/>
      }
    return (
      <div className="containers">

        <form  onSubmit={createNewPost}>



          				<div className="login__field">
					<i className="login__icon fas fa-user"></i>

            <input type='title' placeholder={'Title'} className='login__input'
            value={title} onChange={ev => {
                setTitle(ev.target.value)
            }}/>
            </div>





            				<div className="login__field">

					<i className="login__icon fas fa-user"></i>

            <input type='summary' placeholder={'Summary'}
            className='login__input'
            value={summary} onChange={ev =>
                setSummary(ev.target.value)} />
                
              </div>




                				<div className="login__field">
					<i className="login__icon fas fa-user"></i>

            <input type='file'  className='login__input'
            onChange={ev =>setFiles(ev.target.files)} />
            </div>


            <ReactQuill  value={content} onChange={newValue => setContent(newValue)} module ={modules} formats={formats}/>



            <button className="button login__submit">
					<span className="button__text">POST</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>
        </form>
        </div>
        

  )
}

export default CreatePost
