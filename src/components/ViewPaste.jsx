// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import Navbar from './Navbar';
// import { useParams } from 'react-router-dom';


// const ViewPaste = () => {
//   const allPastes = useSelector((state)=>state.paste.pastes);
//   const {id} = useParams();
//   const paste  = allPastes.filter((p)=>p._id===id)[0];
//   console.log(paste)
//   return (
//     <div>
//       <Navbar/>
//       <div className='flex flex-row gap-7'>

//       <input className='p-2 rounded-2xl mt-2'
//        type="text" placeholder='enter title here ' disabled value={paste.title} onChange={(e) => setTitle(e.target.value)} />
       
//       </div>
//       <div>
//         <textarea disabled name="" value={paste.content} placeholder='enter content'  onChange ={(e)=>{setValue(e.target.value)}} rows={20} id=""></textarea>
//       </div>
//     </div>
//   )
// }

// export default ViewPaste

import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import "./viewpaste.css"; // ✅ import css

const ViewPaste = () => {
  const allPastes = useSelector((state) => state.paste.pastes);
  const { id } = useParams();
  const paste = allPastes.find((p) => p._id === id);

  if (!paste) {
    return (
      <div>
        <Navbar />
        <div className="not-found">⚠️ Paste not found!</div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="view-container">
        <h2 className="view-title">{paste.title}</h2>
        <h2 className="view-title">link - <Link to={paste.link} target="_blank">visit question</Link></h2>
        <div className="view-meta">
          <small>Created: {new Date(paste.created).toLocaleString()}</small>
        </div>
        <textarea
          className="view-content"
          disabled
          value={paste.content}
          rows={20}
        />
        <div className="view-actions">
          <button
            className="btn copy-btn"
            onClick={() => {
              navigator.clipboard.writeText(paste.content);
              alert("Copied to clipboard!");
            }}
          >
            📋 Copy
          </button>
          <Link to={paste.link}><button className="btn share-btn">🔗 Link</button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default ViewPaste;

