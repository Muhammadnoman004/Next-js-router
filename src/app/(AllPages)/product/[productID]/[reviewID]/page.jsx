import React from 'react'

export default function reviewPage({ params }) {
    return (
        <div>
            <h1>Review Pages...</h1>
            <h2>Product {params.productID} and Review {params.productID}...</h2>
        </div>
    )
}
