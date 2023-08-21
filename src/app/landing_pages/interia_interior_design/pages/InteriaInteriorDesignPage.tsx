import React, { useState } from 'react'
import hero_image from '@interiaInteriorDesign/assest/hero_image.jpeg'
import a1 from '@interiaInteriorDesign/assest/a1.jpeg'
import a2 from '@interiaInteriorDesign/assest/a2.jpeg'
import a3 from '@interiaInteriorDesign/assest/a3.jpeg'

import h1 from '@interiaInteriorDesign/assest/h1.jpeg'
import h3 from '@interiaInteriorDesign/assest/h3.jpeg'
import h2 from '@interiaInteriorDesign/assest/h2.png'
import h4 from '@interiaInteriorDesign/assest/h4.jpeg'
import h5 from '@interiaInteriorDesign/assest/h5.jpeg'

import h7 from '@interiaInteriorDesign/assest/h7.png'

import Ellipse_2 from '@interiaInteriorDesign/assest/Ellipse_2.jpeg'
import GaleryImage1 from '@interiaInteriorDesign/assest/galery/image1.jpeg'
import GaleryImage2 from '@interiaInteriorDesign/assest/galery/image2.jpeg'
import GaleryImage3 from '@interiaInteriorDesign/assest/galery/image3.jpeg'
import GaleryImage4 from '@interiaInteriorDesign/assest/galery/image4.jpeg'

import BlogImage1 from '@interiaInteriorDesign/assest/blog-images/blog_image_1.jpeg'
import BlogImage2 from '@interiaInteriorDesign/assest/blog-images/blog_image_2.jpeg'
import BlogImage3 from '@interiaInteriorDesign/assest/blog-images/blog_image_3.jpeg'

import { ReactComponent as StarSvg } from '@interiaInteriorDesign/assest/svg/star.svg'
import { ReactComponent as StarHalfSvg } from '@interiaInteriorDesign/assest/svg/star-half-alt.svg'
import { ReactComponent as VectorSvg } from '@interiaInteriorDesign/assest/svg/Vector.svg'
import { ReactComponent as Fudavector } from '@interiaInteriorDesign/assest/svg/Fudavector.svg'

import { ReactComponent as InstagramSvg } from '@interiaInteriorDesign/assest/svg/instagram.svg'
import { ReactComponent as FacebookSvg } from '@interiaInteriorDesign/assest/svg/facebook-f.svg'
import { ReactComponent as LinkedinSvg } from '@interiaInteriorDesign/assest/svg/linkedin-in.svg'
import { ReactComponent as TwitterSvg } from '@interiaInteriorDesign/assest/svg/twitter.svg'
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";


import { css } from '@emotion/react'
import tw from 'twin.macro'


const AboutSection: React.FC<{}> = () => {


  return (
    <div tw="mt-[100px] mb-[250px] max-w-6xl mx-auto px-4 w-full">
      <div tw="flex flex-col mb-[75px]">
        <div tw="text-gray-500 text-base font-normal tracking-[6.88px]">ABOUT</div>
        <div tw="text-white text-[40px] font-normal">We are the best interior design studio in london</div>
        <div tw=" text-white text-base font-normal break-words w-[350px] md:w-[500px] mt-[15px]">Posuere urna nec tincidunt praesent. Egestas maecenas pharetra convallis posuere. Ipsum nunc aliquet bibendum enim. Sem integer vitae justo eget magna fermentum iaculis eu non.</div>
      </div>

      <div tw="flex gap-[23px] w-full flex-col lg:flex-row">
        <div tw="flex gap-[23px] w-full flex-col sm:flex-row justify-center ">
          <img tw="w-[243px] h-[442px]" src={a1} />
          <img tw="w-[243px] h-[442px]" src={a2} />
        </div>
        <div tw="flex flex-col gap-[50px] w-full">
          <div tw="flex items-center md:items-end flex-col md:flex-row-reverse lg:flex-row justify-center md:justify-evenly">
            <img tw="w-[243px] h-[243px] lg:rounded-tr-[50px]" src={a3} />

            <a tw="mt-[15px] md:mt-0  text-white text-base font-normal tracking-[6.88px] border border-gray-500 hover:bg-white hover:text-black active:bg-gray-500  uppercase px-[25px] py-[8px] rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" href='#'>
              LEARN ABOUT
            </a>
          </div>

          <div tw="flex justify-evenly items-center flex-row">
            <div tw="flex flex-col">
              <div tw="text-gray-500 text-[40px] font-normal">2K+</div>
              <div tw="w-[125px] text-white text-base font-normal tracking-[6.88px] break-words">PROJECTSDONE</div>
            </div>
            <div tw="flex flex-col">
              <div tw="text-gray-500 text-[40px] font-normal">20+</div>
              <div tw="w-[125px] text-white text-base font-normal tracking-[6.88px] break-words">PRO
                TEAMS</div>
            </div>
            <div tw="flex flex-col">
              <div tw="text-gray-500 text-[40px] font-normal">300+</div>
              <div tw="w-[125px] text-white text-base font-normal tracking-[6.88px] break-words">GLOBALCLIENTS</div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}


const HeroSection: React.FC<{}> = () => {


  return (
    <>



      <div tw="flex flex-col self-center bg-no-repeat align-middle justify-center" css={{
        backgroundImage: `url(${hero_image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",

      }}>
        <div tw="max-w-6xl mx-auto px-4 w-full">


          <div tw="mt-[39px] flex flex-col md:flex-row justify-between items-center">

            <div tw="text-white  text-base font-normal tracking-[6.88px] ms-[15px]">INTERIA</div>

            <div tw="flex-row justify-between gap-[52px] my-md:flex">
              <div tw="justify-center items-start mt-[30px] md:mt-0 gap-[30px] lg:gap-[55px] md:gap-[30px] inline-flex">
                <a href='#' tw="text-white text-base font-normal hover:scale-150 ease-linear transition-all duration-150">home</a>
                <a href='#' tw="text-white text-base font-normal hover:scale-150 ease-linear transition-all duration-150">pages</a>
                <a href='#' tw="text-white text-base font-normal hover:scale-150 ease-linear transition-all duration-150">services</a>
                <a href='#' tw="text-white text-base font-normal hover:scale-150 ease-linear transition-all duration-150">team</a>
                <a href='#' tw="text-white text-base font-normal hover:scale-150 ease-linear transition-all duration-150">blog</a>
              </div>


            </div>



            <a tw=" mt-[30px] md:mt-0 text-white text-base font-normal tracking-[6.88px] border border-gray-500 hover:bg-white hover:text-black active:bg-gray-500  uppercase px-[10px] py-[8px] rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" href='#'>
              GET STARTED
            </a>

          </div>




          <div tw="h-[179px]"></div>


          <div tw=" flex flex-row justify-end w-full">

            <div tw="flex flex-col w-full md:w-auto">
              <div tw="text-white text-[25px] md:text-[40px] font-normal text-center md:text-end">We design your room aesthetic</div>
              <div tw="text-white text-base font-normal text-center md:text-start">Lectus quam id leo in vitae turpis nisi porta lorem mollis.</div>
            </div>

          </div>


          <div tw="h-[123px]"></div>
          <div tw="">
            <div tw="flex -rotate-90 text-white text-base font-normal tracking-[6.88px]  absolute" css={{
              transformOrigin: "46% 89px",

            }}>SWIPE DOWN</div>

          </div>


          <div tw="h-[68px]"></div>
          <div tw="h-[123px]"></div>
          <div tw="h-[20px]"></div>
        </div>

      </div>




    </>
  )
}

const TeamSection: React.FC<{}> = () => {



  return (
    <div tw="bg-[#131616] ">
      <div tw="max-w-6xl mx-auto px-4 w-full">


        <div tw="bg-[#212828]  -translate-y-36 flex flex-row overflow-hidden h-[200px] md:h-[300px]" style={{ borderRadius: "50px 50px 0px 50px " }}>

          <img tw="object-cover rounded-full relative left-[-70px] top-[-70px] w-[300px] h-[300px] md:w-[435px] md:h-[435px] " style={{ background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)' }} src={Ellipse_2} />

          <div tw="flex flex-col gap-[29px] justify-center translate-x-10">
            <div tw="w-[260px] md:w-[400px] lg:w-[519px] text-white text-[20px] md:text-[40px] font-normal">Blending creativity and functionality in every design</div>
            <a tw="w-[269px] mt-[15px] md:mt-0 text-white text-base text-center font-normal tracking-[6.88px] border border-gray-500 hover:bg-white hover:text-black active:bg-gray-500  uppercase px-[25px] py-[8px] rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" href='#'>
              HIRE US NOW
            </a>
          </div>

        </div>




        <div tw="grid grid-cols-4 gap-4 auto-cols-max mb-[75px]">

          <div tw="col-span-4 lg:col-span-2 row-span-2">


            <div tw="flex flex-col mb-[74px]">
              <div tw="text-gray-500 text-base font-normal tracking-[6.88px]">TEAMS</div>
              <div tw="text-white text-[40px] font-normal">Projects are handled by  professional certified teams</div>
              <div tw="text-white text-base font-normal w-[350px] md:w-[450px] break-words mt-[27px]">Posuere urna nec tincidunt praesent egestas maecenas pharetra convallis posuere ipsum nunc aliquet bibendum enim consectetur adipiscing.</div>

              <div tw="flex flex-col">
                <div tw="w-[180px] h-[55px] relative mb-[16px] mt-[74px]">
                  <img tw="w-[55px] h-[55px] left-0 top-0 absolute rounded-full border border-neutral-900 filter grayscale-[100%]" src={h4} />
                  <img tw="w-[55px] h-[55px] left-[42px] top-0 absolute rounded-full border border-neutral-900 filter grayscale-[100%]" src={h5} />
                  <img tw="w-[55px] h-[55px] left-[84px] top-0 absolute rounded-full border border-neutral-900 filter grayscale-[100%]" src={h2} />
                  <img tw="w-[55px] h-[55px] left-[125px] top-0 absolute rounded-full border border-neutral-900 filter grayscale-[100%]" src={h7} />
                </div>

                <div>

                  <div tw="h-4 justify-center items-start gap-1.5 inline-flex">
                    <div tw="w-4 h-4 bg-black bg-opacity-0 flex-col justify-start items-start flex" ><StarSvg /></div>
                    <div tw="w-4 h-4 bg-black bg-opacity-0 flex-col justify-start items-start flex" ><StarSvg /></div>
                    <div tw="w-4 h-4 bg-black bg-opacity-0 flex-col justify-start items-start flex" ><StarSvg /></div>
                    <div tw="w-4 h-4 bg-black bg-opacity-0 flex-col justify-start items-start flex" ><StarSvg /></div>
                    <div tw="w-4 h-4 bg-black bg-opacity-0 flex-col justify-start items-start flex" ><StarHalfSvg /></div>
                    <div tw="w-28 text-white text-base font-normal">(4.5 reviews)</div>

                  </div>
                </div>
                <div tw="text-gray-500 text-base font-normal tracking-[6.88px]">TRUSTED BY CUSTOMERS</div>
              </div>





            </div>
          </div>

          <div tw="col-span-2 lg:col-span-1"><img tw="w-full h-full object-cover" src={h3} /></div>
          <div tw="col-span-2 lg:col-span-1"><img tw="" src={h7} /></div>





          <div tw="col-span-2 lg:col-span-1 flex flex-col items-center justify-center">

            <a tw="mt-[15px] md:mt-0  text-white text-base font-normal tracking-[6.88px] border border-gray-500 hover:bg-white hover:text-black active:bg-gray-500  uppercase px-[25px] py-[8px] rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" href='#'>
              LEARN TEAMS
            </a>

          </div>
          <div tw="col-span-2 lg:col-span-1"><img tw="w-full h-[274px] object-cover rounded-br-[0px] md:rounded-br-[50px]" src={h1} /></div>


        </div>
        <div tw="flex flex-col lg:flex-row justify-between gap-[69px] items-center mb-[100px]">


          <div tw="flex flex-row justify-between items-center w-full">
            <div tw="flex flex-row justify-evenly items-center gap-[8px]">
              <div tw="bg-white bg-opacity-0 " >

              </div>
              <div tw="text-center text-gray-500 text-[32px] font-normal" style={{
                fontFamily: "Martel Sans"
              }}>Sparta .Inc</div>
            </div>
            <div tw="flex flex-row justify-center items-center gap-[8px]">
              <div tw="bg-white bg-opacity-0" >
                <VectorSvg />
              </div>
              <div tw="text-center text-gray-500 text-[32px] font-normal" style={{
                fontFamily: "Mitr"
              }}>Allianzy</div>
            </div>
          </div>
          <div tw="flex flex-row justify-between items-center  w-full">

            <div tw="flex flex-row justify-center items-center gap-[8px]">
              <div tw="bg-white bg-opacity-0" >

              </div>
              <div tw="text-center text-gray-500 text-[32px] font-normal" style={{
                fontFamily: "Alex Brush"
              }}>Reys Ceramics</div>
            </div>
            <div tw="flex flex-row justify-center items-center gap-[8px]">
              <div tw="bg-white bg-opacity-0" >
                <Fudavector />
              </div>
              <div tw=" text-gray-500 text-[32px] font-normal break-words " style={{
                fontFamily: "Almarai"
              }}>Fuda <br />Furniture
              </div>
            </div>
          </div>






        </div>


      </div>


    </div>
  )
}
const ArrorRightSvg: React.FC<{}> = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M9.6332 7.46475L5.91445 11.1835C5.65742 11.4405 5.2418 11.4405 4.9875 11.1835L4.36953 10.5655C4.1125 10.3085 4.1125 9.89287 4.36953 9.63857L7.00547 7.00264L4.36953 4.3667C4.1125 4.10967 4.1125 3.69404 4.36953 3.43975L4.98477 2.81631C5.2418 2.55928 5.65742 2.55928 5.91172 2.81631L9.63047 6.53506C9.89023 6.79209 9.89023 7.20771 9.6332 7.46475Z" fill="white" />
    </svg>
  )
}
const Services: React.FC<{}> = () => {



  return (
    <div tw="max-w-6xl mx-auto px-4 w-full mt-[100px] mb-[100px]">
      <div tw="flex flex-col gap-[47px]">
        <div tw="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between">
          <div>
            <div tw="text-white text-[25px] md:text-[30px] lg:text-[40px] font-normal">01. Interior design</div>

          </div>
          <div tw="flex flex-col">
            <div>
              <div tw="w-[350px] md:w-[412px] text-gray-500 text-base font-normal">
                Posuere urna nec tincidunt praesent egestas maecenas pharetra convallis posuere ipsum nunc aliquet bibendum enim consectetur adipiscing.
              </div>

            </div>
            <div>
              <a href='#' tw="justify-center items-center gap-4 inline-flex hover:scale-110 ease-linear transition-all duration-150">
                <div tw="text-white text-base font-normal tracking-[6.88px]">LEARN MORE</div>
                <div tw="w-3.5 h-3.5 relative bg-black bg-opacity-0 flex-col justify-start items-start flex" >
                  <ArrorRightSvg />
                </div>
              </a>
            </div>


          </div>
        </div>
        <div tw="w-full border divide-solid border-neutral-800"></div>
        <div tw="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between">
          <div>
            <div tw="text-white text-[25px] md:text-[30px] lg:text-[40px] font-normal">02. Furniture design</div>

          </div>
          <div tw="flex flex-col">
            <div>
              <div tw="w-[350px] md:w-[412px] text-gray-500 text-base font-normal">
                Posuere urna nec tincidunt praesent egestas maecenas pharetra convallis posuere ipsum nunc aliquet bibendum enim consectetur adipiscing.
              </div>
            </div>
            <div>
              <a href='#' tw="justify-center items-center gap-4 inline-flex hover:scale-110 ease-linear transition-all duration-150">
                <div tw="text-white text-base font-normal tracking-[6.88px]">LEARN MORE</div>
                <div tw="w-3.5 h-3.5 relative bg-black bg-opacity-0 flex-col justify-start items-start flex" >
                  <ArrorRightSvg />
                </div>
              </a>
            </div>
          </div>
        </div>
        <div tw="w-full border divide-solid border-neutral-800"></div>
        <div tw="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between">
          <div>
            <div tw="text-white text-[25px] md:text-[30px] lg:text-[40px] font-normal">03. Landscape design</div>

          </div>
          <div tw="flex flex-col">
            <div>
              <div tw="w-[350px] md:w-[412px] text-gray-500 text-base font-normal">
                Posuere urna nec tincidunt praesent egestas maecenas pharetra convallis posuere ipsum nunc aliquet bibendum enim consectetur adipiscing.
              </div>
            </div>
            <div>
              <a href='#' tw="justify-center items-center gap-4 inline-flex hover:scale-110 ease-linear transition-all duration-150">
                <div tw="text-white text-base font-normal tracking-[6.88px]">LEARN MORE</div>
                <div tw="w-3.5 h-3.5 relative bg-black bg-opacity-0 flex-col justify-start items-start flex" >
                  <ArrorRightSvg />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}


const ImagesGalery: React.FC<{}> = () => {


  return (
    <div tw="max-w-[350px] lg:max-w-[2200px]  mx-auto mb-[100px] flex  my-2xl:flex-row  flex-col   w-full">
      <div tw="flex flex-row w-full justify-center items-center">
        <img tw="w-[150px] h-[150px] md:w-full md:h-[515px] object-cover" src={GaleryImage1} />
        <img tw="w-[150px] h-[150px] md:w-full md:h-[515px] object-cover" src={GaleryImage2} />


      </div>
      <div tw="flex flex-row w-full justify-center items-center">

        <img tw="w-[150px] h-[150px] md:w-full md:h-[515px] object-cover" src={GaleryImage3} />
        <img tw="w-[150px] h-[150px] md:w-full md:h-[515px] object-cover" src={GaleryImage4} />

      </div>


    </div>
  );
}


const Blogs: React.FC<{}> = () => {



  return (
    <div tw="max-w-6xl mx-auto px-4 w-full mt-[100px] mb-[100px]">
      <div tw="flex flex-col justify-center items-center gap-[35px]">
        <div tw=" text-gray-500 text-base font-normal tracking-[6.88px]">BLOG</div>
        <div tw="text-center text-white text-[40px] font-normal">The latest article</div>

        <div tw="flex flex-col md:flex-row">

          <div tw="flex flex-col gap-[35px] justify-center items-center md:items-start w-full mb-[15px]">
            <img tw="w-[245px] h-[150px] lg:w-[363px] lg:h-[268px] object-cover" src={BlogImage1} />
            <div tw="text-gray-500 text-base font-normal">Posuere urna nec tincidunt praesent egestas maecenas.</div>
            <a href='#' tw="justify-center items-center gap-4 inline-flex hover:scale-110 ease-linear transition-all duration-150">
              <div tw="text-white text-base font-normal tracking-[6.88px]">LEARN MORE</div>
              <div tw="w-3.5 h-3.5 relative bg-black bg-opacity-0 flex-col justify-start items-start flex" >
                <ArrorRightSvg />
              </div>
            </a>
            <div tw="w-full border divide-solid border-neutral-800 md:hidden"></div>
          </div>

          
          <div tw="flex flex-col gap-[35px] justify-center items-center  md:items-start w-full mb-[15px]">
            <img tw="w-[245px] h-[150px] lg:w-[363px] lg:h-[268px] object-cover" src={BlogImage2} />
            <div tw="text-gray-500 text-base font-normal">Posuere urna nec tincidunt praesent egestas maecenas.</div>
            <a href='#' tw="justify-center items-center gap-4 inline-flex hover:scale-110 ease-linear transition-all duration-150" >
              <div tw="text-white text-base font-normal tracking-[6.88px]">LEARN MORE</div>
              <div tw="w-3.5 h-3.5 relative bg-black bg-opacity-0 flex-col justify-start items-start flex" >
                <ArrorRightSvg />
              </div>
            </a>
            <div tw="w-full border divide-solid border-neutral-800 md:hidden"></div>
          </div>
          <div tw="flex flex-col gap-[35px] justify-center  md:items-start items-center w-full mb-[15px]">
            <img tw="w-[245px] h-[150px] lg:w-[363px] lg:h-[268px] object-cover" src={BlogImage3} />
            <div tw="text-gray-500 text-base font-normal">Posuere urna nec tincidunt praesent egestas maecenas.</div>
            <a href='#' tw="justify-center items-center md:justify-normal gap-4 inline-flex hover:scale-110 ease-linear transition-all duration-150">
              <div tw="text-white text-base font-normal tracking-[6.88px]">LEARN MORE</div>
              <div tw="w-3.5 h-3.5 relative bg-black bg-opacity-0 flex-col justify-start items-start flex" >
                <ArrorRightSvg />
              </div>
            </a>
            <div tw="w-full border divide-solid border-neutral-800 md:hidden"></div>
          </div>
        </div>


 
      </div>
      

    </div>

  )
}

const Newsletter: React.FC<{}> = () => {
  return (
    <div tw="max-w-6xl mx-auto px-4 w-full mt-[75px] mb-[86px]">
      <div tw="flex flex-col lg:flex-row lg:justify-between justify-center    w-full">
        
      <div tw="text-white  font-normal mb-[15px] md:text-[40px] sm:text-[30px] text-[20px]">Newsletter</div>
        
        <div tw="flex flex-row items-center gap-[24px]">
          <input placeholder="Enter your email" type="text" tw="w-[200px] sm:w-[400px] md:w-[500px]  pb-[8px] border-solid focus:outline-none text-white focus:border-solid border-0 border-b focus:border-0 focus:border-b border-white focus:border-white bg-transparent" />
          <a tw="flex items-center h-[39px] text-center text-white  font-normal text-[14px]  tracking-[6.88px] md:mt-0   border border-gray-500 hover:bg-white hover:text-black active:bg-gray-500  uppercase px-[10px] py-[8px] rounded-full outline-none focus:outline-none  ease-linear transition-all duration-150" href='#'>
             SUBSCRIBE
            </a>
        </div>
      </div>


    </div>
  );
}

const Footer: React.FC<{}> = () => {


  return (
    <div tw="flex flex-col">
      <div tw="bg-[#131616]">
        <div tw="max-w-6xl mx-auto px-4 w-full mt-[75px] ">
          <div tw="flex flex-col mt-[127px]">
            <div tw="flex flex-col md:flex-row justify-between">
              <div tw="justify-center items-start mt-[30px] md:mt-0 gap-[30px] lg:gap-[55px] md:gap-[30px] inline-flex">
                <a href='#' tw="text-white text-base font-normal hover:scale-150 hover:text-gray-50 ease-linear transition-all duration-150">home</a>
                <a href='#' tw="text-white text-base font-normal hover:scale-150 hover:text-gray-50 ease-linear transition-all duration-150">pages</a>
                <a href='#' tw="text-white text-base font-normal hover:scale-150 hover:text-gray-50 ease-linear transition-all duration-150">services</a>
                <a href='#' tw="text-white text-base font-normal hover:scale-150 hover:text-gray-50 ease-linear transition-all duration-150">team</a>
                <a href='#' tw="text-white text-base font-normal hover:scale-150 hover:text-gray-50 ease-linear transition-all duration-150">blog</a>
              </div>

              <div tw="text-white  text-base font-normal tracking-[6.88px] ms-[15px] hidden md:block">INTERIA</div>


            </div>
            <div tw="w-full border divide-solid border-neutral-800 mt-[70px] mb-[70px]"></div>
            <div tw="flex flex-col md:flex-row justify-between items-center md:items-start mb-[149px]">
              <div tw="flex flex-row items-center gap-[20px] mb-[15px]">

                <a href='#' tw="inline-flex items-center justify-center align-middle p-[6px] rounded-[50%] w-[32px] h-[32px]  border-solid border-[2px] border-white hover:scale-150 ease-linear transition-all duration-150">
                <InstagramSvg tw="" />
                </a>
                
                <a href='#' tw="inline-flex items-center justify-center align-middle p-[6px] rounded-[50%] w-[32px] h-[32px]  border-solid border-[2px] border-white hover:scale-150 ease-linear transition-all duration-150">
                <TwitterSvg />
                </a>
                <a href='#' tw="inline-flex items-center justify-center align-middle p-[6px] rounded-[50%] w-[32px] h-[32px]  border-solid border-[2px] border-white hover:scale-150 ease-linear transition-all duration-150">
                <LinkedinSvg />
                </a>
                <a href='#' tw="inline-flex items-center justify-center align-middle p-[6px] rounded-[50%] w-[32px] h-[32px]  border-solid border-[2px] border-white hover:scale-150 ease-linear transition-all duration-150">
                <FacebookSvg />
                </a>
                <a href='https://github.com/ibrahemDev/landing-page-playground/tree/main/src/app/landing_pages/interia_interior_design' tw="inline-flex items-center justify-center align-middle p-[6px] rounded-[50%] w-[32px] h-[32px]  border-solid border-[2px] border-white hover:scale-150 ease-linear transition-all duration-150">
                <FaGithub tw="text-white" />
                </a>

                
                
                
                
  
              </div>
         

              <div tw="w-full border-b  divide-solid  border-neutral-800 md:w-0 md:divide-y md:border-l mb-[15px]"></div>
              <div tw="w-[350px] md:w-[479px] text-right text-white text-base font-normal">Posuere urna nec tincidunt praesent egestas maecenas pharetra convallis posuere ipsum nunc.</div>


            </div>
          </div>
        </div>
      </div>

      <div tw="max-w-6xl mx-auto px-4 w-full mt-[75px] mb-[75px] ">
        <div tw="flex flex-row justify-between">
          <div tw="text-white text-base font-normal">© Copyright by AltDesain-Studio – All right reserved.</div>

          <div tw="flex flex-row gap-[92px]">
          <a href='#'  tw="text-right text-gray-500 text-base font-normal tracking-[6.88px] hover:scale-150 hover:text-gray-50 ease-linear transition-all duration-150">TERMS</a>
          <a href='#' tw="text-right text-gray-500 text-base font-normal tracking-[6.88px] hover:scale-150 hover:text-gray-50 ease-linear transition-all duration-150">PRIVACY</a>

          </div>
        </div>

      </div>
    </div>
  );
}
const InteriaInteriorDesignPage: React.FC<{}> = () => {
  return (
    <>

      <HeroSection />

      <AboutSection />
      <TeamSection />
      <Services />
      <ImagesGalery />
      <Blogs />
      <div tw="w-full  border-[1px] divide-solid border-neutral-800"></div>
      <Newsletter />
      <Footer />
    </>
  )
}


export default InteriaInteriorDesignPage;