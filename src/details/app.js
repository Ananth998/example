import React, { useState, Fragment } from 'react'
import AddItemForm from './additemform'
import EditItemForm from './edititemform'
import Table from './Table'
import './styles.css'


const App = () => {


  const columns = [
    { accessor: 'id', label: 'Id' },
    { accessor: 'name', label: 'Name' },
    { accessor: 'description', label: 'Description', },
    { accessor: 'price', label: 'Price' },
    { accessor: 'quantity', label: 'Quality' },
    { accessor: 'date', label: 'Date' },
    
   
    
  ]
  
	// Data
	const ItemData = [
		{ id: 1, name: 'SHIRT', description: 'LINEN' , price:2499 , quantity :5 ,date:'22/02/2021'},
		{ id: 2, name: 'JEANS', description: 'WRANGLER' , price:1899 , quantity :5 ,date:'22/02/2021'},
		{ id: 3, name: 'SHORTS', description: 'COTTON' , price:799 , quantity :5 ,date:'22/02/2021'},
    { id: 4, name: 'T-SHIRT', description: 'POLYCOTTON' , price:1499 , quantity :5 ,date:'22/02/2021'},
    { id: 5, name: 'SAREE', description: 'COTTON' , price:2499 , quantity :7 ,date:'22/02/2021'},
    { id: 6, name: 'DHOTI', description: 'COTTON' , price:499 , quantity :5 ,date:'22/02/2021'},
	]

	const initialFormState = { id: null, name: '', description: '' ,price:null, quantity:null,date:''}

	// Setting state
	const [ items, setItems ] = useState(ItemData)
	const [ currentItem, setCurrentItem ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addItem = item => {
		item.id = items.length + 1
		setItems([ ...items, item ])
	}

	const deleteItem = id => {
		setEditing(false)

		setItems(items.filter(item => item.id !== id))
	}

	const updateItem = (id, updatedItem) => {
		setEditing(false)

		setItems(items.map(item => (item.id === id ? updatedItem : item)))
	}

	const editRow = item => {
		setEditing(true)

		setCurrentItem({ id: item.id, name: item.name, description: item.description,price:item.price,quantity:item.quantity,date:item.date })
	}

	return (
		<div className="x">
      <div className="d1">
			<h1><i><center>High Fashions</center></i> </h1>
      </div>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Item</h2>
							<EditItemForm
								editing={editing}
								setEditing={setEditing}
								currentItem={currentItem}
								updateItem={updateItem}
							/>
						</Fragment>
					) : (
						<Fragment>
              <div className="d5">
							<h2>ADD DETAILS</h2>
              </div>
							<AddItemForm addItem={addItem} />
						</Fragment>
					)}
				</div>
				<div >
          <div className="d5">
					<h2>VIEW ITEMS</h2>
          </div>
					{/* <ItemTable items={items} editRow={editRow} deleteItem={deleteItem} /> */}
          <Table rows={items} columns={columns} editRow={editRow} deleteItem={deleteItem} />
				</div>
			</div>
		</div>
	)
}

export default App