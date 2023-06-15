import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";




//spinner loading
import { PulseLoader } from 'react-spinners'

//components
import Arrivals from "./Arrivals";
import Carousel from "./Carousel";
import Discount from "./Discount";

// importing components


export default function Home() {

  const BASE_URL = "https://fronttask.techeyeco.com";


  const {SliceIsLoading, Slice_data, SliceError} = useSelector(state => state.slider)


    //button
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if(window.scrollY > 100) {
          setShowButton(true)
        } else {
          setShowButton(false)
        }
      })
    }, []);
  

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    };
    


  return (
    <div>

    {SliceIsLoading ? 
      <div className='flex justify-center items-center w-screen h-screen'>
        <PulseLoader size={30} color='#E11D48' loading={SliceIsLoading} />
      </div>
      :
      <div>
        {!SliceError && 
          <div>

            {Slice_data.length > 0 &&
              <Carousel autoSlide="true">
                {Slice_data.map(data => (
                  <div className="min-w-full" key={data.name} >
                    {data.useSeparateAttachment ? <img className="rounded-md w-full h-full object-cover" src="/notfound.png" alt={data.name} /> : <img className="rounded-md w-full h-full object-cover" src={`${BASE_URL}${data.attachment}`} alt={data.name} />}
                  </div>
                ))}
              </Carousel>
            }

          </div>
        }
      </div>
    }



    <Arrivals />

    <Discount />

    <div>
        {/*the button*/}
        {showButton && (
          <button className='inline fixed right-8 bottom-32 py-2 px-3 rounded-[100%] bg-rose-800' onClick={scrollToTop}>
            <i className="fa-sharp fa-solid fa-chevron-up m-0 p-0" style={{color: "#ffffff"}}></i>
          </button>
        )}
      </div>

    </div>
  )
}
