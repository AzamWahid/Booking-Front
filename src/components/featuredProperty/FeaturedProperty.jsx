import React from 'react'
import './featuredProperty.css'
import useFetch from '../../hooks/useFetch';

const FeaturedProperty = () => {

    const { data, loading, error } = useFetch("/api/hotels?featured=true&limit=4");

    return (
        <div className='fp'>
            {loading ? "Loading" :
                <>
                    {data.map((item,idx) => {
                        return <div className="fpItem" key={idx}>
                            <img
                                src={item.photos[0]}
                                alt=""
                                className="fpImg"
                            />
                            <span className="fpName">{item.name}</span>
                            <span className="fpCity">{item.city}</span>
                            <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                           {item.rating &&  <div className="fpRating">
                                <button>{item.rating}</button>
                                <span>Excellent</span>
                            </div>}
                        </div>
                    })}
                </>}

        </div>
    )
}

export default FeaturedProperty