import React from 'react'

const Blog = () => {
  return (
    <div className="text-left container mx-auto mt-10">
      <div>
        <h4>
          <span className="bg-rose-400">Question: 1)</span> Difference between
          javascript and nodejs
        </h4>
        <p>
          Answer: javascript is a programming language which runs in any
          javascript engine based browser and used for any client-side activity
          for one web application on the other hand node js, an interpreter or
          running environment for javascript language, is a runtime made by c,
          c++ etc language. basically node js used for accessing any operating
          system for non-blocking operation.{' '}
        </p>
      </div>
      <div>
        <h4>
          <span className="bg-rose-400">Question: 2)</span> When should you use
          nodejs and when should you use mongodb
        </h4>
        <p>
          Answer: Nodejs should be used in the condition, when any web server is
          necessary to communicate with the database. Node js help to create web
          server with port numbers . on the mongodb is used when data should be
          stored and retrieved that data from database.
        </p>
      </div>
      <div>
        <h4>
          <span className="bg-rose-400">Question: 3)</span> Differences between
          sql and nosql databases
        </h4>
        <p>
          Answer: sql programming language gives interface with relational
          database where data are stored as records in rows and table keeping
          logical links between them. sql is structured query language and have
          predefined schema. But nosql means, no conventional database relation
          is maintained and databases have dynamic schemas for unstructured
          data.
        </p>
      </div>
      <div>
        <h4>
          <span className="bg-rose-400">Question: 4)</span> What is the purpose
          of jwt and how does it work
        </h4>
        <p>
          Answer: JWT is validation mechanism so that unwanted access to
          database can be limited. it uses encryption method to safe data when
          travel through carrier.{' '}
        </p>
      </div>
    </div>
  )
}

export default Blog
