import React from 'react'

const Banner = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide relative mb-16"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <img
            src="/images/book-1.jpg"
            className="block w-full"
            alt="/images/book-1.jpg"
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="/images/book-2.jpg"
            className="block w-full"
            alt="/images/book-2.jpg"
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="/images/book-3.jpg"
            className="block w-full"
            alt="/images/book-3.jpg"
          />
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="/images/book-4.jpg"
            className="block w-full"
            alt="/images/book-4.jpg"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Banner
