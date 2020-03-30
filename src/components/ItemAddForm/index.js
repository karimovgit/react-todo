import React from 'react'
import './ItemAddForm.css'

const ItemAddForm = ({ onAddItem }) => {
  return (
    <div className="item-add-form">
      <button
        className="btn btn-outline-secondary"
        onClick={() => onAddItem('lol')}
      >
        Add Item
      </button>
    </div>
  )
}

export default ItemAddForm
