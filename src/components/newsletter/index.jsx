import React from 'react'

const NewsLetter = () => {
    return (
        <div className="w-110 h-12 absolute bottom-28 left-[7%] bg-white rounded-3xl flex items-center news-letter__banner">
            <i className="fa fa-paper-plane-o ml-4 opacity-50" aria-hidden="true"></i>
            <input type="text" placeholder="Your email address" className="w-full h-full rounded-3xl  border-none outline-none pl-6 pr-6 text-sm" />
            <button className="bg-custom-green text-white py-3 px-5 rounded-3xl font-medium">Subscribe</button>
        </div>
    )
}

export default NewsLetter