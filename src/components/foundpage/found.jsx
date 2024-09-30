import React from 'react'
import './style.css'
const found = () => {
  return (
    <>
      <div className="FoundTitle">
        Add Found ‎‎ <span>Item</span>
      </div>
      <div className="Img"></div>
      <div className="PSelect"></div>
      <div className="IName">
        <label for="IName">Item Name</label>
        <input type="text" id="IName" className="NameField"></input>
      </div>
      <div className="IFound">
        <label for="ILocation">Found At</label>
        <input type="text" id="ILocation" className="FoundField"></input>
      </div>
      <div className="PhoneNumber">
        <label for="INumber">Phone Number</label>
        <input type="number" id="INumber" className="NumberField"></input>
      </div>
      <textarea className="description" id="IDescription" placeholder="Description"></textarea>
      <button className='PostBtn'>Post</button>
    </>
  )
}

export default found
