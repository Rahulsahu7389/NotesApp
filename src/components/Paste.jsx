// import React from 'react'
// import { useState } from 'react';
// import { removeFromPastes } from '../redux/pasteSlice';
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

// const Paste = () => {
//   const pastes = useSelector((state)=> state.paste.pastes);
//   console.log(pastes)

//   const [searchTerm, setsearchTerm] = useState("");
//   const dispatch = useDispatch();

//   const filteredData = pastes.filter(
//     (paste)=> paste.title.toLowerCase().includes(searchTerm.toLowerCase())
//   )

//   const handleDelete = (pasteId)=>{
//     dispatch(removeFromPastes(pasteId));
//   }
  

//   return (
//     <div>
//       <input type="text" placeholder='search here' value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)} />
//       <div>
//         {
//           filteredData.length > 0 && 
//           filteredData.map((paste)=>{
            
            
//             return(
//               <div className='border' key={paste.created}>

//                 <div >{paste.title}</div>
//                 <div >{paste.content}</div>
//                 <div  className='flex flex-row gap-4 place-content-evenly'>
//                   <button>

//                   <Link to={`/?pasteId=${paste?._id}`}>Edit</Link>
//                   </button>
//                   <button >

//                   <Link to={`/pastes/${paste?._id}`}>View</Link>
//                   </button>
//                   <button onClick={()=>{handleDelete(paste?._id)}}>

//                   Delete
//                   </button>
//                   <button onCanPlay={()=>{navigator.clipboard.writeText(paste?.content)}}>

//                   Copy
//                   </button>
//                   <button>

//                   Share
//                   </button>
//                 </div>
//                 <div >
//                   {paste.created}
//                 </div>
//               </div>
          
//             )
          
//           })
//         }
//       </div>
      
//     </div>
//   )
// }

// export default Paste;

import React, { useState } from 'react';
import { removeFromPastes } from '../redux/pasteSlice';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import './Paste.css';   // ✅ import css

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (pasteId) => {
    dispatch(removeFromPastes(pasteId));
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <>
    <Navbar/>
    <div className="paste-container">
      <input
        className="search-input"
        type="text"
        placeholder="🔍 Search pastes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="paste-list">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div className="paste-card" key={paste._id}>
              <h3 className="paste-title">{paste.title}</h3>
              <p className="paste-content">{paste.content}</p>

              <div className="paste-actions">
                <Link className="btn edit-btn" to={`/?pasteId=${paste?._id}`}>
                  ✏️ Edit
                </Link>
                <Link className="btn view-btn" to={`/pastes/${paste?._id}`}>
                  👁️ View
                </Link>
                <button
                  className="btn delete-btn"
                  onClick={() => handleDelete(paste?._id)}
                >
                  🗑️ Delete
                </button>
                <button
                  className="btn copy-btn"
                  onClick={() => handleCopy(paste?.content)}
                >
                  📋 Copy
                </button>
                <Link to={paste.link}><button className="btn share-btn">🔗 Link</button></Link>
                
              </div>

              <div className="paste-date">
                <small>Created: {new Date(paste.created).toLocaleString()}</small>
              </div>
            </div>
          ))
        ) : (
          <p className="no-results">No pastes found.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default Paste;

