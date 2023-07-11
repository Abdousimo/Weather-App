import React from 'react';
import Image from 'next/image';

const Spinner = (props) => {
    return (
        <section>
           <Image src={'/spinner.gif'} alt='' width={100} height={100}  className='m-auto  block'/>
     </section>
    );
}

export default Spinner;