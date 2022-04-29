import React, { useState } from 'react'

const ManageInventory = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className=" container mx-auto mt-10">
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
            <th>Name</th>
            <th>Short Desc</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="bg-orange-400">
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>$1000</td>
            <td>100</td>
            <td>
              <button className="bg-cyan-400 px-2 rounded-md">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Witchy Woman</td>
            <td>The Eagles</td>
            <td>$2000</td>
            <td>170</td>
            <td>
              <button className="bg-cyan-400 px-2 rounded-md">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>$3000</td>
            <td>180</td>
            <td>
              <button className="bg-cyan-400 px-2 rounded-md">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>$1000</td>
            <td>130</td>
            <td>
              <button className="bg-cyan-400 px-2 rounded-md">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Shining Star</td>
            <td>Earth, Wind, and Fire</td>
            <td>$6000</td>
            <td>120</td>
            <td>
              <button className="bg-cyan-400 px-2 rounded-md">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

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
                      type="text"
                      placeholder="Item name"
                      class="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-3/4 pr-10"
                    />
                  </div>
                  <div class="relative flex flex-row w-full flex-wrap items-stretch mb-3">
                    <label className="w-1/4 text-left">Short desc</label>
                    <textarea
                      type="text"
                      placeholder="Item short description"
                      class="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-3/4 pr-10"
                    />
                  </div>
                  <div class="relative flex flex-row w-full flex-wrap items-stretch mb-3">
                    <label className="w-1/4 text-left">Price</label>
                    <input
                      type="text"
                      placeholder="item price"
                      class="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-3/4 pr-10"
                    />
                  </div>
                  <div class="relative flex flex-row w-full flex-wrap items-stretch mb-3">
                    <label className="w-1/4 text-left">Quantity</label>
                    <input
                      type="text"
                      placeholder="new quantity"
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
                    onClick={() => setShowModal(false)}
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
