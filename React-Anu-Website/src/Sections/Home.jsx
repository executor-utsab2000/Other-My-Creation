import React from 'react'
import '../CSS/Sections/Home.scss'






const Home = () => {

  return (

    <div className="container landingContainer containerMain">
      <div className="row">
        <div className="col-lg-6 order-1 order-lg-0">
          <div className="text1">আমার প্রিয়তমা ❤️🫵🌹</div>
          <div className="text2">ইনি হলেন <span className="text-danger">অনন্যা , ভালোবেসে অনু বলি  , আমার প্রিয়তমা</span> ।  ইনি খুবই গুরুত্ত্বপূর্ণ আমার কাছে এবং বিশেষ আমার কাছে। 🫵🌹❤️  </div>

          <div className="imgContainer justify-content-center justify-content-lg-start">
            <img src="Images/special.png" alt="" className='img-fluid' />
          </div>
          <div className="socials mb-4">
            <a className='nav-link me-3' href="https://www.facebook.com/profile.php?id=100071143753720" target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-facebook"></i></a>
            <a className='nav-link' href="https://www.instagram.com/anannaseal/" target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-instagram"></i></a>
          </div>



        </div>
        <div className="col-lg-6 d-flex justify-content-center order-0 order-lg-1">
          <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" height="500">
            <defs>
              <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>
                <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>
              </linearGradient>
            </defs>
            <mask id="mask1" mask-type="alpha">
              <path fill="url(#sw-gradient)" d="M25.4,-31C31.2,-25.3,33.1,-15.7,33.9,-6.6C34.7,2.5,34.4,11.1,30.5,17.4C26.6,23.7,19.1,27.7,10.8,31.5C2.6,35.3,-6.4,38.8,-14.4,37C-22.3,35.2,-29.3,28.1,-32.8,19.9C-36.4,11.8,-36.5,2.7,-35.4,-6.7C-34.3,-16,-31.9,-25.6,-25.8,-31.3C-19.7,-36.9,-9.8,-38.7,0,-38.6C9.8,-38.6,19.5,-36.7,25.4,-31Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{ transition: "all 0.3s ease 0s" }}></path>
            </mask>
            <g mask="url(#mask1)">
              <path fill="url(#sw-gradient)" d="M25.4,-31C31.2,-25.3,33.1,-15.7,33.9,-6.6C34.7,2.5,34.4,11.1,30.5,17.4C26.6,23.7,19.1,27.7,10.8,31.5C2.6,35.3,-6.4,38.8,-14.4,37C-22.3,35.2,-29.3,28.1,-32.8,19.9C-36.4,11.8,-36.5,2.7,-35.4,-6.7C-34.3,-16,-31.9,-25.6,-25.8,-31.3C-19.7,-36.9,-9.8,-38.7,0,-38.6C9.8,-38.6,19.5,-36.7,25.4,-31Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{ transition: "all 0.3s ease 0s" }}></path>
              <image
                href="Images/She/she (5).jpg"
                x="-10"
                y="8"
                width="100"
                height="80"
                preserveAspectRatio="xMidYMid slice" />
            </g>
          </svg>




        </div>
      </div>
    </div>
  )
}

export default Home
