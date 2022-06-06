import React from 'react'
import {
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CButton,
} from '@coreui/react'
const NewBranch = () => {
  return (
    <div className=" container mx-auto">
      <div className="text-3xl text-center mt-10 mb-10">Upcoming Surprise</div>
      <div className="flex flex-row justify-evenly">
        <div>
          {' '}
          <CCard
            className=" mx-auto shadow-2xl shadow-cyan-400/50 rounded-md "
            style={{ width: '18rem' }}
          >
            <CCardImage
              className="mx-auto"
              orientation="top"
              src="/images/GrandOpening.jpg"
            />
            <CCardBody className="">
              <CCardTitle className=" pb-2 text-2xl">
                Opening Time : Will be announce soon.
              </CCardTitle>
              <CCardText className="px-3 mb-2 text-justify"></CCardText>
              <div className="">
                <div className="flex flex-row justify-between px-3 mb-2">
                  <CCardText></CCardText>
                  <CCardText></CCardText>
                </div>
                <CCardText></CCardText>
              </div>
            </CCardBody>
          </CCard>
        </div>
        <div>
          {' '}
          <CCard
            className=" mx-auto shadow-2xl shadow-cyan-400/50 rounded-md "
            style={{ width: '18rem' }}
          >
            <CCardImage
              className="mx-auto"
              orientation="top"
              src="/images/New-Branch-Opening-Announcement.jpg"
            />
            <CCardBody className="">
              <CCardTitle className=" pb-2 text-2xl">
                {' '}
                Opening Time : Will be announce soon.
              </CCardTitle>
              <CCardText className="px-3 mb-2 text-justify"></CCardText>
              <div className="">
                <div className="flex flex-row justify-between px-3 mb-2">
                  <CCardText></CCardText>
                  <CCardText></CCardText>
                </div>
                <CCardText></CCardText>
              </div>
            </CCardBody>
          </CCard>
        </div>
      </div>
    </div>
  )
}

export default NewBranch
