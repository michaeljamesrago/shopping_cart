import React, {useState} from 'react'
import EditForm from './EditForm'

const ProductActions = () => {
  const [editFormVisible, setEditFormVisible] = useState(false)
  const toggleEditFormVisibility = () => {
    setEditFormVisible(!editFormVisible)
  }
  return (
    <div class="actions product-actions">
    {!editFormVisible ?
        <>
          <a class="button add-to-cart">Add to Cart</a>
          <a class="button edit" onClick={toggleEditFormVisibility}>Edit</a>
        </>
        : <EditForm toggleEdit={toggleEditFormVisibility}/>
      }
    </div>
  )
}

export default ProductActions
