import React from 'react'

const Filter = ({ sortedPrice, setSortedPrice, sortedAll, setSortedAll, sortedTitle, setSortedTitle }) => {
    return (
        <div className="filter">
            <p>Sort by:</p>
            <div className="sort">
                <input checked={sortedAll} onChange={(e) => setSortedAll(e.target.checked)} type="checkbox" />
                <span>All</span>
            </div>
            <div className="sort">
                <input checked={sortedPrice} onChange={(e) => setSortedPrice(e.target.checked)} type="checkbox" />
                <span>Price</span>
            </div>
            <div className="sort">
                <input checked={sortedTitle} onChange={(e) => setSortedTitle(e.target.checked)} type="checkbox" />
                <span>Title</span>
            </div>
        </div>
    )
}

export default Filter