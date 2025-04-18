import React from 'react'
import icon from '../Images/imissu.png'
import '../Components/Bounce.css'; 
import { ContactUs } from './ContactUs';
import { MdEmail } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";
import verifyy from '../Images/verified.png'



function Hero() {

  const openGmail = () => {
    const email = "mrhustle936@gmail.com";
    const subject = encodeURIComponent("Hello!");
    const body = encodeURIComponent("I want to connect with you.");
  
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`, '_blank');
  };
  

  const openDiscord = () => {
    window.open("https://discord.gg/vYXdt7Ss", "_blank");
  };
  
  
  return (
    <>
    <div className='grid gap-6'>
      <div>
        
      <div className="image-container ">
      <img className="bounce" src={icon} alt="I miss you" />
      </div>

      <hr className="border-t border-white my-8" />


      <div className='grid md:grid-cols-1 text-[#9A6DD7] text-center text-5xl sm:text-3xl md:text-5xl pb-20' >
        about ME 🥰
      </div>


      <div className='grid gap-2'>
      <div className='grid gap-2 md:grid-cols-2'>
        <div className='bg-[#454B4E4D] text-white'>
          <p className='flex justify-start px-5 py-5'>
          🔮 somehow i landed in electronics engineering
          </p>
          
        </div>
        <div className='bg-[#454B4E4D] text-white'>
        <p className='flex justify-start px-5 py-5'>
        🥋 i used to learn judo got 🥈 🥉 at states 
          </p>
        </div>


        <div className='bg-[#454B4E4D] text-white'>
          <p className='flex justify-start px-5 py-5'>
          👨‍💻 started programming in Jan 2025
          </p>
          
        </div>
        <div className='bg-[#454B4E4D] text-white'>
        <p className='flex justify-start px-5 py-5'>
        📣 actively participate in debates & MUNs
          </p>
        </div>
      </div>

      
      

      </div>



      <hr className="border-t border-white my-8" />





      
      <div className='grid md:grid-cols-1 text-[#9A6DD7] text-center text-5xl sm:text-3xl md:text-5xl pb-20' >
        cheese of TRUTH 🧀
      </div>

      <div className='grid gap-2'>
        <div className='bg-[#454B4E4D] text-white'>
          <p className='flex justify-start px-5 py-5'>
          i listen to kanye west, travis scott, kendrick lamar, weeknd & playboi carti 😈
          </p>
         
        </div>
        <div className='bg-[#454B4E4D] text-white'>
          <p className='flex justify-start px-5 py-5'>
          since my neighbour cat's scratched me i started hating em & swifites 😽
          </p>
          
        </div>
        <div className='bg-[#454B4E4D] text-white'>
          <p className='flex justify-start px-5 py-5'>
          i know fire style justsu & love watching anime ❤️‍🔥
          </p>
          
        </div>
        <div className='bg-[#454B4E4D] text-white'>
          <p className='flex justify-start px-5 py-5'>
          have a nate diaz poster on my vision board & i use to wakeup early i'm a gud boi 😚
          </p>
          
        </div>


        <hr className="border-t border-white my-8" />


        <div className='grid md:grid-cols-1 text-[#9A6DD7] text-center text-5xl sm:text-3xl md:text-5xl pb-20' >
        currently WORKIN ON 🧬
        </div>

        <div className='grid gap-2'>
          <div className='grid gap-2 md:grid-cols-3'>


          <div className='text-white'>
        <p className='flex justify-start px-5 py-5'>
          north&east<br/>
          a platform where ppl can use ai and crypto
          </p>
        </div>
       

        <div className='text-white'>
        <p className='flex justify-start px-5 py-5'>
          juniorME<br/>
          a link that will help collage students to
      network better
          </p>
        </div>



        <div className='text-white'>
        <p className='flex justify-start px-5 py-5'>
        skyyy<br/>
        a dating site that will replace tinder
          </p>
        </div>


        <div className='text-white'>
        <p className='flex justify-start px-5 py-5'>
        shortCUT<br/>
        a site for hiring ppl for daily work chores
          </p>
        </div>


        <div className='text-white'>
        <p className='flex justify-start px-5 py-5'>
          todoLIST<br/>
          yes an average todo list to prove ik mern stack
          </p>
        </div>

        <div className='text-white'>
        <p className='flex justify-start px-5 py-5'>
          dattebayo<br/>
          site where u can watch few anime and read manga
          </p>
        </div>


          </div>
          <hr className="border-t border-white my-8" />

      <div className='grid md:grid-cols-1 text-[#9A6DD7] text-center text-5xl sm:text-3xl md:text-5xl pb-15' >
        academics 📚
      </div>

      <div className='grid gap-6 p-10'>

<div className='grid gap-8 grid-cols-1 md:grid-cols-2'>

<div className='bg-[#2C2C6C] px-4 py-6 rounded-3xl border border-[#2C2C6C] text-white  hover:bg-[#272930] cursor-pointer transition-colors duration-300'>
<div className='grid gap-2 justify-center'>
      <div className='font-semibold text-2xl justify-start pb-5'>not cse major</div>
      <div className='flex justify-start'>
        <img
        src={verifyy}
        alt='verifyy'
        className='w-6 h-6 '
        />
        <div className='px-2'>Object Oriented Programming</div>
        
        </div>
      <div className='flex justify-start '>
      <img
        src={verifyy}
        alt='verifyy'
        className='w-6 h-6 '
        />
        <div className='px-2'>Data Structures and Algorithms</div>
        </div>
      <div className='flex justify-start '>
      <img
        src={verifyy}
        alt='verifyy'
        className='w-6 h-6 '
        />
        <div className='px-2'>Compiler Design</div>
        
        </div>
      <div className='flex justify-start '>
      <img
        src={verifyy}
        alt='verifyy'
        className='w-6 h-6 '
        />
        <div className='px-2'>Computer Network</div>
        </div>
      
      
    </div>
  </div>

  <div className='bg-[#2C2C6C] px-4 py-6 rounded-3xl border border-[#2C2C6C] text-white  hover:bg-[#272930] cursor-pointer transition-colors duration-300'>
    <div className='grid gap-2 justify-center'>
      <div className='font-semibold text-2xl justify-start pb-5'>web & database</div>
      <div className='flex justify-start '>
      <img
        src={verifyy}
        alt='verifyy'
        className='w-6 h-6 '
        />
        <div className='px-2'>React.js / Next.js</div>
        
        </div>
        <div className='flex justify-start '>
      <img
        src={verifyy}
        alt='verifyy'
        className='w-6 h-6 '
        />
        <div className='px-2'>Node.js</div>
        
        </div>
        <div className='flex justify-start '>
      <img
        src={verifyy}
        alt='verifyy'
        className='w-6 h-6 '
        />
        <div className='px-2'>Express.js</div>
        
        </div>
        <div className='flex justify-start '>
      <img
        src={verifyy}
        alt='verifyy'
        className='w-6 h-6 '
        />
        <div className='px-2'>Mongo DB</div>
        
        </div>
        
    </div>
  </div>

  <div className='bg-[#2C2C6C] px-4 py-6 rounded-3xl border border-[#2C2C6C] text-white  hover:bg-[#272930] cursor-pointer transition-colors duration-300'>
    <div className='grid gap-2 justify-center'>
      <div className='font-semibold text-2xl justify-start pb-5'>one concept everyday of</div>
      <div>
        
      </div>
      <div className='flex justify-start '>
      <img
        src={verifyy}
        alt='verifyy'
        className='w-6 h-6 '
        />
        <div className='px-2'>C / C++</div>
        
        </div>
        <div className='flex justify-start '>
      <img
        src={verifyy}
        alt='verifyy'
        className='w-6 h-6 '
        />
        <div className='px-2'>Java Script</div>
        
        </div>
        <div className='flex justify-start '>
      <img
        src={verifyy}
        alt='verifyy'
        className='w-6 h-6 '
        />
        <div className='px-2'>Type Script</div>
        
        </div>
        <div className='flex justify-start '>
      <img
        src={verifyy}
        alt='verifyy'
        className='w-6 h-6 '
        />
        <div className='px-2'>Python</div>
        
        </div>
      
      
    </div>
  </div>

  <div className='bg-[#2C2C6C] px-4 py-6 rounded-3xl border border-[#2C2C6C] text-white  hover:bg-[#272930] cursor-pointer transition-colors duration-300'>
    <div className='grid gap-2 justify-center'>
      <div className='font-semibold text-2xl justify-start pb-5'>i'm soft with skills</div>
      <div>
        
      </div>
      <div className='flex justify-start '>
      <img
        src={verifyy}
        alt='verifyy'
        className='w-6 h-6 '
        />
        <div className='px-2'>team building</div>
        
        </div>
        <div className='flex justify-start '>
      <img
        src={verifyy}
        alt='verifyy'
        className='w-6 h-6 '
        />
        <div className='px-2'>leadership</div>
        
        </div>
        <div className='flex justify-start '>
      <img
        src={verifyy}
        alt='verifyy'
        className='w-6 h-6 '
        />
        <div className='px-2'>management</div>
        
        </div>
        <div className='flex justify-start '>
      <img
        src={verifyy}
        alt='verifyy'
        className='w-6 h-6 '
        />
        <div className='px-2'>problem solving</div>
        
        </div>
      
      
    </div>
  </div>

</div>
</div>



        <hr className="border-t border-white my-8" />





        <div>
          <div className='grid col-span-1 justify-center'>
            <div className='text-2xl text-center text-white py-4'>get in touch</div>
            <div className='text-4xl text-center text-[#9A6DD7] font-semibold pb-5'>Contact Me ⛓️</div>

          </div>


          <div className='grid gap-4 md:grid-cols-2'>

          <div className='grid gap-2 md:grid-cols-1 m-5'>
            <div  onClick={openGmail}
            className='text-white text-2xl  text-center px-5 border-2 border-[#2C2C6C] rounded-lg bg-[#2C2C6C]  hover:bg-[#272930] cursor-pointer transition-colors duration-900'>
            <div className='text-3xl flex justify-center text-center p-4'><MdEmail /></div>
            <div>email<br/>Send a message</div>
              
            </div>

            <div onClick={openDiscord}
            className='text-white text-2xl  text-center px-5 border-2 border-[#2C2C6C] rounded-lg bg-[#2C2C6C]  hover:bg-[#272930] cursor-pointer transition-colors duration-900'>
            <div className='text-3xl flex justify-center text-center p-4'> <BsDiscord /></div>
            <div>discord<br/>Send a message</div>
              
            </div>
            


            
          </div>
          <div>
             <ContactUs/>
            </div>
         

          </div>
          

        </div>











        <hr className="border-t border-white my-8" />


        <div>
          
        </div>
        

        </div>




      </div>




      

      

     

      </div>

    




    </div>


    </>
  )
}

export default Hero
