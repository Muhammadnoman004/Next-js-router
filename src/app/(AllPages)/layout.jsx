import React from 'react'
import Header from '../_Lib/Header';
import Footer from '../_Lib/Footer';

export default function Childlayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
