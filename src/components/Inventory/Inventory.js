import React, { useRef, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from '@coreui/react'
const Inventory = () => {
  const [showModal, setShowModal] = useState(false)
  const [item, setItem] = useState('')
  const [loading, setLoading] = useState(true)
  const [modifiedCount, setModifiedCount] = useState(0)
  const { id } = useParams()
  const inventRef = useRef('')
  useEffect(() => {
    fetch(`http://localhost:5000/getInventory/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
    setLoading(false)
  }, [modifiedCount])
  const inventoryDelivered = (id, quantity) => {
    fetch(`http://localhost:5000/updateInventory/${id}/${quantity}`, {
      method: 'PUT',
    })
      .then((res) => res.json())
      .then((data) => setModifiedCount(data.modifiedCount))
    // acknowledged: true
    // matchedCount: 1
    // modifiedCount: 1
  }
  const restockHandler = (id, quantity) => {
    const inventory = inventRef.current.value
    const item = { inventory }

    fetch(`http://localhost:5000/restock/${id}/${quantity}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then(
        (data) => setModifiedCount(data.modifiedCount),
        // {
        //   alert('item posted')
        //   toast('Inventory added successfully')
        //   e.target.reset();
        // }
      )
  }
  return (
    <div className="container uppercase pt-10 mx-auto mb-10">
      <CCard
        className=" mx-auto shadow-2xl shadow-cyan-400/50 rounded-md "
        style={{ width: '18rem' }}
      >
        <CCardImage
          className="mx-auto"
          orientation="top"
          src="/images/kids-book.jpg"
        />
        <CCardBody className="">
          <CCardTitle className=" pb-2 text-2xl">{item.name}</CCardTitle>
          <CCardText className="px-3 mb-2 text-1xl text-justify">
            {item.shortDes}
          </CCardText>
          <div className="text-sm">
            <div className="flex flex-row justify-between px-3 mb-2">
              <CCardText>
                <span className="text-orange-500">Price:</span> ${item.price}
              </CCardText>
              <CCardText>
                <span className="text-orange-500">Quantity:</span>{' '}
                {item.quantity}
              </CCardText>
            </div>
            <CCardText>Supplier's name :{item.supplier}</CCardText>
          </div>
          <div className="px-3 flex flex-row justify-between">
            <button
              onClick={() => setShowModal(true)}
              className="bg-teal-400 py-1  rounded-md px-1 my-2"
            >
              Restock Item
            </button>
            <button
              onClick={() => inventoryDelivered(item._id, item.quantity)}
              className="bg-cyan-400 py-1  rounded-md my-2 px-1"
            >
              Delivered
            </button>
          </div>
        </CCardBody>
      </CCard>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-4xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-100 bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Restock inventory</h3>
                </div>
                {/*body*/}
                <div className="relative p-2 flex-auto">
                  <div class="relative flex flex-row w-full flex-wrap items-stretch mb-3">
                    <label className="w-1/4 text-left">
                      Increase Inventory
                    </label>
                    <input
                      ref={inventRef}
                      name="inventoryincrease"
                      type="number"
                      placeholder="put inventory quantity number"
                      class="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-3/4 pr-10"
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => restockHandler(id, item.quantity)}
                  >
                    Restock
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}

export default Inventory
