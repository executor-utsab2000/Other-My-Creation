import React, { useEffect, useState } from 'react'
import { poems } from '../Data/Poems'
import '../CSS/Sections/DedicatedPoems.scss'
import PoemItems from '../Components/PoemItems'
import { PoemCustomise } from '../JS/PoemCustomise'


const DedicatedPoems = () => {
    const [poemArrayIndex, setPoemArrayIndex] = useState(null)
    const [poemData, setPoemData] = useState(null)


    useEffect(() => {
        if (poemArrayIndex !== null) {
            const data = PoemCustomise(poems[poemArrayIndex]);
            setPoemData(data); // <--- THIS was missing
            // console.log(data);

        }
    }, [poemArrayIndex]);
    return (
        <>
            <div className="dedicatedPoems container containerMain">
                <div className="header">আমার প্রিয়তমাকে❤️🫵 নিয়ে  আমার কিছু সৃষ্টি ✒️ </div>

                <div className="contentContainer">
                    {
                        poems.map((elm, index) => {
                            // console.log(elm.split('\n'));

                            return (
                                <>
                                    <PoemItems key={index} title={elm.split('\n')[0 || 1]} poemArrayIndexFunction={() => setPoemArrayIndex(index)} />
                                </>
                            )
                        })
                    }
                </div>
            </div>






            <div class="modal fade poemModel" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">❤️🫵✒️✒️🫠</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body text-center">
                            <div dangerouslySetInnerHTML={{ __html: poemData }} />
                            <div>❤️❤️❤️❤️❤️❤️❤️❤️🌹🌹❤️❤️❤️❤️❤️❤️❤️</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default DedicatedPoems