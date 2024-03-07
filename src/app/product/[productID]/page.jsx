import React from 'react'
import { notFound } from 'next/navigation';

export default function ProductIDPPage({ params }) {
  console.log(params.productID);

  if (params.productID > 5) {
    notFound()
  }
  return (
    <div>
      <h1>Product Detail Page...</h1>
      <h3>Product : {params.productID}</h3>
    </div>
  )
}
