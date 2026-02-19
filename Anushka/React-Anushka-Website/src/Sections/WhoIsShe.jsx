import React, { useEffect, useState } from 'react'
import '../CSS/Sections/WhoIsShe.scss'
import WhoSheIsGallary from '../Components/WhoSheIsGallary'
import { nameArray } from '../Data/nameArray'

const WhoIsShe = () => {

    const [name, setName] = useState('💝💝🌹🌹🫠🫵🫵')
    useEffect(() => {

        let count = 0
        setInterval(() => {

            if (count == nameArray.length) {
                count = 0
            }
            setName(nameArray[count])
            count++
        }, 1500)
    }, [])




    return (
        <div className="containerMain container whoIsShe">
            <div className="header">कौन है ये? 💝</div>
            <div className="content">{name}</div>


            <div className="imgContainer">
                <WhoSheIsGallary />
            </div>
        </div>
    )
}

export default WhoIsShe