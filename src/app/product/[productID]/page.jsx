import React from 'react'

export default function ProductIDPPage({ params }) {
  console.log(params.productID);
  return (
    <div>
      <h1>Product ID is : {params.productID}</h1>
    </div>
  )
}
