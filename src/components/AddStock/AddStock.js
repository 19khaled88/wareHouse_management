import React from 'react'

const AddStock = () => {
  const handleAddStock = (event) => {
    event.preventDefault()
    const name = event.target.name.value
    const price = event.target.price.value
    const stock = { name, price }

    fetch('https://localhost:5000/stock', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(stock),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('success', data)
      })
  }
  return (
    <div>
      <form onSubmit={handleAddStock}>
        <input type="text" name="name" />
        <input type="number" name="price" />
        <button type="button" value="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddStock
