import React, { useRef, useState, useEffect } from 'react'
import './ManageInventory.css'
import { toast } from 'react-toastify'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase/firebase.init'
import { css } from '@emotion/react'
import ClipLoader from 'react-spinners/ClipLoader'
import Loading from '../LoadingPage/Loading'
const ManageInventory = () => {
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([''])

  const [user] = useAuthState(auth)
  const nameRef = useRef('')
  const shortDescRef = useRef('')
  const priceRef = useRef('')
  const quantityRef = useRef('')
  const supplierRef = useRef('')

  const addItemHandler = (e) => {
    // setShowModal(false)
    const name = nameRef.current.value
    const shortDes = shortDescRef.current.value
    const price = priceRef.current.value
    const quantity = quantityRef.current.value
    const supplier = supplierRef.current.value
    const email = user?.email
    const item = { name, shortDes, price, quantity, supplier, email }

    if (
      name !== null ||
      shortDes !== null ||
      price !== null ||
      quantity !== null ||
      supplier !== null ||
      email !== null
    ) {
      fetch('http://localhost:5000/addItem', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(item),
      })
        .then((res) => res.json())
        .then((data) => {
          // alert('item posted')
          toast('Item added successfully')
          // e.target.reset();
        })
    }
  }

  useEffect(() => {
    fetch('http://localhost:5000/getItems')
      .then((res) => res.json())
      .then((data) => setItems(data))
    setLoading(false)
  }, [items])

  const itemDeleteHandler = (id) => {
    fetch(`http://localhost:5000/item/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ itemId: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deleteCount > 0) {
          const remaining = items.filter((item) => item._id !== id)
          setItems(remaining)
        }
      })
  }
  return (
    <div className=" container mx-auto mt-10">
      {loading === true ? (
        <Loading />
      ) : (
        <>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="bg-orange-400 py-1 px-3 rounded-md mb-2"
            >
              Add New Items
            </button>
          </div>
          <table class="mx-auto w-full table-fixed">
            <thead className="bg-cyan-400">
              <tr>
                <th className="py-2">Name</th>
                <th className="py-2 w-96 text-left">Short Desc</th>
                <th className="py-2">Price</th>
                <th className="py-2">Quantity</th>
                <th className="py-2">Suppliers</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody className="bg-orange-400">
              {items.map((item, key) => (
                <tr key={key}>
                  <td>{item.name}</td>
                  <td className="text-justify">{item.shortDes}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.supplier}</td>
                  <td>
                    <button
                      onClick={() => itemDeleteHandler(item._id)}
                      className="bg-cyan-400 px-2 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Add New Item to stock
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-2 flex-auto">
                  <div class="relative flex flex-row w-full flex-wrap items-stretch mb-3">
                    <label className="w-1/4 text-left">Name</label>
                    <input
                      ref={nameRef}
                      name="itemName"
                      type="text"
                      placeholder="Item name"
                      class="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-3/4 pr-10"
                    />
                  </div>
                  <div class="relative flex flex-row w-full flex-wrap items-stretch mb-3">
                    <label className="w-1/4 text-left">Short desc</label>
                    <textarea
                      ref={shortDescRef}
                      name="shortDesc"
                      type="text"
                      placeholder="Item short description"
                      class="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-3/4 pr-10"
                    />
                  </div>
                  <div class="relative flex flex-row w-full flex-wrap items-stretch mb-3">
                    <label className="w-1/4 text-left">Price</label>
                    <input
                      ref={priceRef}
                      name="price"
                      type="text"
                      placeholder="item price"
                      class="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-3/4 pr-10"
                    />
                  </div>
                  <div class="relative flex flex-row w-full flex-wrap items-stretch mb-3">
                    <label className="w-1/4 text-left">Quantity</label>
                    <input
                      ref={quantityRef}
                      name="quantity"
                      type="text"
                      placeholder="new quantity"
                      class="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-3/4 pr-10"
                    />
                  </div>
                  <div class="relative flex flex-row w-full flex-wrap items-stretch mb-3">
                    <label className="w-1/4 text-left">Supplier</label>
                    <input
                      ref={supplierRef}
                      name="supplier"
                      type="text"
                      placeholder="Supplier name"
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
                    onClick={() => addItemHandler()}
                  >
                    Save Item
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

export default ManageInventory
