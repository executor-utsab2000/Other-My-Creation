import React from 'react'
import { imgGallary } from '../Data/imgGallary'

const WhoSheIsGallary = () => {




    return (
        <>
            <div className="imgGallary">
                <div className="masonry">
                    {
                        imgGallary.map((elm) => {
                            return (
                                <>
                                    <img src={elm} alt="" />
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default WhoSheIsGallary