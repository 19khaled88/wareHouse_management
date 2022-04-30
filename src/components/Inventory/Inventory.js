import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const Inventory = () => {
  const [item, setItem] = useState('')
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  const itemId = id
  useEffect(() => {
    fetch(`http://localhost:5000/getInventory/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
    setLoading(false)
  }, [])

  return (
    <div className="container text-2xl uppercase pt-10 mx-auto mb-10">
      Inventory :{id}
      {item}
    </div>
  )
}

export default Inventory
