import React from 'react';
import Image from 'next/image';
import {WiDegrees} from 'react-icons/wi'

const  Weather = ({data}) => {
    
    
    return (
        <section className='relative flex flex-col justify-between max-w-[700px] w-full m-auto p-4'> 
            <div className='flex items-center justify-between'>
                <div className='flex flex-col items-center justify-center p-4'>
                     {data.current && <Image src={data.current.condition.icon.replace("//cdn.weatherapi.com","")} alt='' width={100} height={100}/>}
                     {data.current && <p className='text-3xl text-center text-white'>{data.current.condition.text}</p>}
                </div>
                {data.current && <p className='text-9xl text-white pr-4'>{data.current.temp_c}</p>}
            </div>
           {data.current && <div className='relative bg-black/70 rounded-lg px-2 py-10'>
                  <p className='text-5xl text-center text-white font-bold py-10'>Weather in {data.location.name}</p>   
                 <div className='flex items-center justify-between text-center text-white'>
                      <div className='flex flex-col items-center justify-center gap-3'>
                          <p className='text-center font-bold text-2xl'>{data.current.humidity}%</p>
                          <p className='text-xl'>Humadity</p>
                      </div>
                      <div className='flex flex-col items-center justify-center gap-3'>
                          <p className='text-center font-bold text-2xl'>{data.current.feelslike_c}</p>
                          <p className='text-xl'>Feels Like</p>
                      </div>
                      <div className='flex flex-col items-center justify-center gap-3'>
                           <p className='text-center font-bold text-2xl'>{data.current.wind_mph} MPH</p>
                           <p className='text-xl'>Winds</p>
                      </div>
                </div>
            </div>}
        </section>
    ); 
}

export default Weather;