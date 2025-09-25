// import React, { useEffect } from 'react'
// import { useState } from 'react';
// import { addToPastes, updateToPastes } from '../redux/pasteSlice';
// import Navbar from './Navbar'
// import './home.css'
// import { useSearchParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// const Home = () => {
//   const [title, setTitle] = useState("");
//   const [value, setValue] = useState("");
//   const [searchParams,setSearchParams] = useSearchParams();
//   const pasteId = searchParams.get("pasteId");
//   const dispatch = useDispatch();
//   const allPastes = useSelector((state)=>state.paste.pastes);

//   const createPaste = ()=>{
//     const paste = {
//       title:title,
//       content:value,
//       _id:pasteId || Date.now().toString(36),created:new Date().toISOString(),
//     }

//     if(pasteId){
//       dispatch(updateToPastes(paste));
//     }
//     else{
//       dispatch(addToPastes(paste));

//     }
//     setTitle("");
//     setValue("");
//     setSearchParams({});

//   }
//   useEffect(() => {
//     console.log(allPastes)
//     if(pasteId){
//       const paste = allPastes.find((p)=>
//         p?._id===pasteId
//       );
//       setTitle(paste?.title || "");
//       setValue(paste?.content || "");
//     }

//   }, [pasteId])

//   return (
//     <div>
//       <Navbar/>
//       <div className='flex flex-row gap-7'>

//       <input className='p-2 rounded-2xl mt-2'
//        type="text" placeholder='enter title here ' value={title} onChange={(e) => setTitle(e.target.value)} />
//        <button onClick={createPaste}>
//         {
//           pasteId?"update":"create My paste"
//         }
//        </button>
//       </div>
//       <div>
//         <textarea name="" value={value} placeholder='enter content'  onChange ={(e)=>{setValue(e.target.value)}} rows={20} id=""></textarea>
//       </div>
//     </div>
//   )
// }

// export default Home

import React, { useEffect, useState } from 'react';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';
import Navbar from './Navbar';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Home.css';   // ✅ import css

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);
  const [link, setlink] = useState("")
  const navigate = useNavigate();

  const createPaste = () => {
    const paste = {
      title: title,
      content: value,
      link: link,
      _id: pasteId || Date.now().toString(36),
      created: new Date().toISOString(),
    };

    if (pasteId) {
      dispatch(updateToPastes(paste));
      toast.success("Note updates Successfully")
      setTimeout(() => {
        navigate("/pastes");
      }, 1000); // wait 1s

    } else {
      dispatch(addToPastes(paste));
      setTitle("");
      setValue("");
      setlink("");
      setSearchParams({});
      toast.success("Note Created Successfully")
      setTimeout(() => {
        navigate("/pastes");
      }, 1000); // wait 1s
    }



  };

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p?._id === pasteId);
      setTitle(paste?.title || "");
      setValue(paste?.content || "");
      setlink(paste.link)
    }
  }, [pasteId, allPastes]);

  return (
    <div className="home-container">
      <Navbar />
      <div className="input-section">
        <input
          className="title-input"
          type="text"
          placeholder="Enter title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="title-input"
          type="text"
          placeholder="Enter Question Link"
          value={link}
          onChange={(e) => setlink(e.target.value)}
        />
        <button className="create-btn" onClick={createPaste}>
          {pasteId ? "Update" : "Create Note"}
        </button>
      </div>
      <div className="textarea-container">
        <textarea
          className="content-textarea"
          value={value}
          placeholder="Enter your content here..."
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        ></textarea>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;

