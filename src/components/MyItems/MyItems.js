import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase/firebase.init'

const MyItems = () => {
  const [user] = useAuthState(auth)
  const [myItem, setMyItem] = useState([])

  useEffect(() => {
    fetch(`https://young-lowlands-94292.herokuapp.com/getMyItem/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyItem(data))
  }, [myItem])

  const itemDeleteHandler = (id) => {
    fetch(`https://young-lowlands-94292.herokuapp.com/item/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ itemId: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deleteCount > 0) {
          const remaining = myItem.filter((item) => item._id !== id)
          setMyItem(remaining)
        }
      })
  }
  return (
    <div className="container mt-10 mx-auto">
      <div className="text-left mb-4">
        <span className="text-orange-400">User's Email Address </span>:{' '}
        {user.email}
      </div>{' '}
      <table className=" mx-auto w-full table-fixed">
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
          {myItem.map((item, key) => (
            <tr key={key}>
              <td className="text-left">{item.name}</td>
              <td className="text-justify">
                {item.shortDes.substring(0, 45) + '...'}
              </td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.supplier}</td>
              <td>
                <button
                  onClick={() => {
                    if (window.confirm('Delete the item?')) {
                      itemDeleteHandler(item._id)
                    }
                  }}
                  className="bg-cyan-400 px-2 rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MyItems
