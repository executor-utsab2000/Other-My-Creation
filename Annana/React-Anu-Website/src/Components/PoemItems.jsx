import React from 'react'

const PoemItems = ({ title, poemArrayIndexFunction }) => {
    // console.log(fullPoem);

    return (
        <>
            <div className="poemItems">
                <div className=" d-lg-flex justify-content-between titleDiv px-4">
                    <div className="title my-auto mb-3 mb-md-0 ">{title}...</div>
                    <button className="btn btn-warning my-auto" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={poemArrayIndexFunction}>Read More..</button>
                </div>
            </div>
        </>
    )
}

export default PoemItems