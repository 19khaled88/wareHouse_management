import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from '@coreui/react'

const HomeInventory = () => {
  const [inventorys, setInventorys] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const inventoryUpdate = (id) => {
    if (id !== null) {
      navigate(`/inventory/${id}`)
    }
  }
  useEffect(() => {
    fetch('http://localhost:5000/getHomeItems')
      .then((res) => res.json())
      .then((data) => setInventorys(data))
    setLoading(false)
  }, [])
  return (
    <>
      <div className="container text-2xl uppercase pt-10 mx-auto mb-10">
        <h4>Stock Sample</h4>
      </div>
      <div className="container mx-auto grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 pb-10 gap-y-10">
        {inventorys.map((inventory, key) => (
          <CCard
            key={key}
            className=" mx-auto shadow-2xl shadow-cyan-400/50 rounded-md "
            style={{ width: '18rem' }}
          >
            <CCardImage
              className="mx-auto"
              orientation="top"
              src="/images/kids-book.jpg"
            />
            <CCardBody className="">
              <CCardTitle className=" pb-2 text-2xl">
                {inventory.name}
              </CCardTitle>
              <CCardText className="px-3 mb-2 text-justify">
                {inventory.shortDes}
              </CCardText>
              <div className="">
                <div className="flex flex-row justify-between px-3 mb-2">
                  <CCardText>
                    <span className="text-orange-500">Price:</span> $
                    {inventory.price}
                  </CCardText>
                  <CCardText>
                    <span className="text-orange-500">Quantity:</span>{' '}
                    {inventory.quantity}
                  </CCardText>
                </div>
                <CCardText>Supplier's name :{inventory.supplier}</CCardText>
              </div>
              <div className="grid justify-items-end">
                <button
                  onClick={() => inventoryUpdate(inventory._id)}
                  className="bg-cyan-400 py-1 px-3 mr-2 rounded-md my-2"
                >
                  Update Info
                </button>
              </div>
            </CCardBody>
          </CCard>
        ))}
      </div>
      <div className="my-5">
        <Link
          to="/manageInventory"
          className="bg-pink-400 px-2 rounded-md py-1"
        >
          Manage Inventories
        </Link>
      </div>
    </>
  )
}

export default HomeInventory
