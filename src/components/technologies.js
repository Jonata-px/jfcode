import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

import IcoApache from '../public/Icons/Tecnologias/apache.png';
import IcoAspnet from '../public/Icons/Tecnologias/aspnet.png';
import IcoAws from '../public/Icons/Tecnologias/aws.png';
import IcoCsharp from '../public/Icons/Tecnologias/c-sharp.png';
import IcoDotnet from '../public/Icons/Tecnologias/dotnet-core.png';
import IcoGoogleCloud from '../public/Icons/Tecnologias/google-cloud.png';
import IcoJs from '../public/Icons/Tecnologias/js.png';
import IcoMongodb from '../public/Icons/Tecnologias/mongodb.png';
import IcoMySql from '../public/Icons/Tecnologias/mysql.png';
import IcoNginx from '../public/Icons/Tecnologias/nginx.png';
import IcoNode from '../public/Icons/Tecnologias/nodejs.png';
import IcoPostgresql from '../public/Icons/Tecnologias/postgresql.png';
import IconReact from '../public/Icons/Tecnologias/react.png';
import IcoSocketIo from '../public/Icons/Tecnologias/socketio.png';
import IcoTypescript from '../public/Icons/Tecnologias/typescript.png';
import IcoVisualStudio from '../public/Icons/Tecnologias/visuals-tudio.png';
// import 'swiper/swiper-bundle.min.css'
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


// import Swiper core and required modules
import SwiperCore, {
  Pagination,
  Navigation,
  Autoplay
} from 'swiper';
SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function Technologies() {
  const [technologies,setTechnologies] = useState([]);
  useEffect(()=>{
    setTechnologies([
      IcoApache,
      IcoAws,
      IcoGoogleCloud,
      IcoJs,
      IconReact,
      IcoNode,
      IcoSocketIo,
      IcoMongodb,
      IcoMySql,
      IcoPostgresql,
      IcoCsharp,
      IcoAspnet,
      IcoDotnet,
      IcoNginx,
      IcoTypescript,
      IcoVisualStudio,
    ]);
  },[]);

    return (
      <section id="technologies">
        <div className="container paralax">
          <h1>Tecnologias que utilizamos</h1>
          <Swiper slidesPerView={7}
          // loop={true} loopFillGroupWithBlank={true}
          autoplay={{
            "delay": 3500,
            "disableOnInteraction": false
          }} spaceBetween={60} freeMode={true} pagination={{
                "clickable": true,
                "type":'none'
                }} navigation={true}  breakpoints={{
                    "300": {
                        "slidesPerView": 2,
                        "spaceBetween": 30
                    },
                    "400": {
                        "slidesPerView": 2,
                        "spaceBetween": 30
                    },
                    "500": {
                        "slidesPerView": 4,
                        "spaceBetween": 30
                    },
                    "640": {
                      "slidesPerView": 6,
                      "spaceBetween": 30
                    },
                    "868": {
                      "slidesPerView": 7,
                      "spaceBetween": 40
                    }}} className="mySwiper">
                      {
                         technologies.map((val,key)=>{
                           return(
                            <SwiperSlide key={key} className="slide" >
                              <img src={val} alt="technologie"/>
                            </SwiperSlide>  
                          )
                        })
                      }      
                </Swiper>
        </div>
      </section>
    );
}