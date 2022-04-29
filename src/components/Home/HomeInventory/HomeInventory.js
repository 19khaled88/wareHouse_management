import React from 'react'
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from '@coreui/react'
import { Link } from 'react-router-dom'
const HomeInventory = () => {
  const inventoryUpdate = (id) => {
    console.log(id)
  }
  
  return (
    <>
      <div className="container text-2xl uppercase pt-10 mx-auto mb-10">
        <h4>Stock Sample</h4>
      </div>
      <div className="container mx-auto grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 pb-10 gap-y-10">
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
            <CCardTitle className=" pb-2 text-2xl">Kids World</CCardTitle>
            <CCardText className="px-3 mb-2 text-justify">
              Whether or not you write a picture book or a middle-grade chapter
              book, a well written children’s book is incredibly important.
            </CCardText>
            <div className="">
              <div className="flex flex-row justify-between px-3 mb-2">
                <CCardText>Price: $200</CCardText>
                <CCardText>Quantity: 150</CCardText>
              </div>
              <CCardText>Supplier Name: All Kids Shop</CCardText>
            </div>
            <div className="grid justify-items-end">
              <button
                onClick={() => inventoryUpdate(5)}
                className="bg-cyan-400 py-1 px-3 mr-2 rounded-md my-2"
              >
                Update Info
              </button>
            </div>
          </CCardBody>
        </CCard>
        <CCard
          className=" mx-auto shadow-2xl shadow-cyan-400/50 rounded-md "
          style={{ width: '18rem' }}
        >
          <CCardImage
            className="mx-auto"
            orientation="top"
            src="/images/novel-book.jpg"
          />
          <CCardBody className="">
            <CCardTitle className=" pb-2 text-2xl">All Novels</CCardTitle>
            <CCardText className="px-3 mb-2 text-justify">
              Whether or not you write a picture book or a middle-grade chapter
              book, a well written children’s book is incredibly important.
            </CCardText>
            <div className="">
              <div className="flex flex-row justify-between px-3 mb-2">
                <CCardText>Price: $200</CCardText>
                <CCardText>Quantity: 150</CCardText>
              </div>
              <CCardText>Supplier Name: All Kids Shop</CCardText>
            </div>
            <div className="grid justify-items-end">
              <button className="bg-cyan-400 py-1 px-3 mr-2 rounded-md my-2">
                Update Info
              </button>
            </div>
          </CCardBody>
        </CCard>
        <CCard
          className=" mx-auto shadow-2xl shadow-cyan-400/50 rounded-md "
          style={{ width: '18rem' }}
        >
          <CCardImage
            className="mx-auto"
            orientation="top"
            src="/images/poem-book.jpg"
          />
          <CCardBody className="">
            <CCardTitle className=" pb-2 text-2xl">Only Poems</CCardTitle>
            <CCardText className="px-3 mb-2 text-justify">
              Whether or not you write a picture book or a middle-grade chapter
              book, a well written children’s book is incredibly important.
            </CCardText>
            <div className="">
              <div className="flex flex-row justify-between px-3 mb-2">
                <CCardText>Price: $200</CCardText>
                <CCardText>Quantity: 150</CCardText>
              </div>
              <CCardText>Supplier Name: All Kids Shop</CCardText>
            </div>
            <div className="grid justify-items-end">
              <button className="bg-cyan-400 py-1 px-3 mr-2 rounded-md my-2">
                Update Info
              </button>
            </div>
          </CCardBody>
        </CCard>
        <CCard
          className=" mx-auto shadow-2xl shadow-cyan-400/50 rounded-md "
          style={{ width: '18rem' }}
        >
          <CCardImage
            className="mx-auto"
            orientation="top"
            src="/images/science-book.jpg"
          />
          <CCardBody className="">
            <CCardTitle className=" pb-2 text-2xl">Solving Science</CCardTitle>
            <CCardText className="px-3 mb-2 text-justify">
              Whether or not you write a picture book or a middle-grade chapter
              book, a well written children’s book is incredibly important.
            </CCardText>
            <div className="">
              <div className="flex flex-row justify-between px-3 mb-2">
                <CCardText>Price: $200</CCardText>
                <CCardText>Quantity: 150</CCardText>
              </div>
              <CCardText>Supplier Name: All Kids Shop</CCardText>
            </div>
            <div className="grid justify-items-end">
              <button className="bg-cyan-400 py-1 px-3 mr-2 rounded-md my-2">
                Update Info
              </button>
            </div>
          </CCardBody>
        </CCard>
        <CCard
          className=" mx-auto shadow-2xl shadow-cyan-400/50 rounded-md "
          style={{ width: '18rem' }}
        >
          <CCardImage
            className="mx-auto"
            orientation="top"
            src="/images/story-book.jpg"
          />
          <CCardBody className="">
            <CCardTitle className=" pb-2 text-2xl">Read Story</CCardTitle>
            <CCardText className="px-3 mb-2 text-justify">
              Whether or not you write a picture book or a middle-grade chapter
              book, a well written children’s book is incredibly important.
            </CCardText>
            <div className="">
              <div className="flex flex-row justify-between px-3 mb-2">
                <CCardText>Price: $200</CCardText>
                <CCardText>Quantity: 150</CCardText>
              </div>
              <CCardText>Supplier Name: All Kids Shop</CCardText>
            </div>
            <div className="grid justify-items-end">
              <button className="bg-cyan-400 py-1 px-3 mr-2 rounded-md my-2">
                Update Info
              </button>
            </div>
          </CCardBody>
        </CCard>
        <CCard
          className=" mx-auto shadow-2xl shadow-cyan-400/50 rounded-md "
          style={{ width: '18rem' }}
        >
          <CCardImage
            className="mx-auto"
            orientation="top"
            src="/images/comedy-book.jpg"
          />
          <CCardBody className="">
            <CCardTitle className=" pb-2 text-2xl">Lets Fun</CCardTitle>
            <CCardText className="px-3 mb-2 text-justify">
              Whether or not you write a picture book or a middle-grade chapter
              book, a well written children’s book is incredibly important.
            </CCardText>
            <div className="">
              <div className="flex flex-row justify-between px-3 mb-2">
                <CCardText>Price: $200</CCardText>
                <CCardText>Quantity: 150</CCardText>
              </div>
              <CCardText>Supplier Name: All Kids Shop</CCardText>
            </div>
            <div className="grid justify-items-end">
              <button className="bg-cyan-400 py-1 px-3 mr-2 rounded-md my-2">
                Update Info
              </button>
            </div>
          </CCardBody>
        </CCard>
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
