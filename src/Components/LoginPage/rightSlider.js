import Carousel from 'react-bootstrap/Carousel';
import '../../CSS/App.css'
import { IMG } from '../Functions/Services';

// import {
//     MDBCarousel,
//     MDBCarouselItem,
//   } from 'mdb-react-ui-kit';

function RightSlider() {

    console.log('RightSlider')

    return (
        <div className='RightSide'>
            <Carousel>

                {
                    IMG.map(
                        (data, index) => {
                            return (
                                <Carousel.Item key={index} className='carouselItems'>
                                    <img
                                        className="d-block w-100"
                                        src={data.url}
                                    />
                                    {/* <Carousel.Caption> */}
                                      <div className='CarousalCaption'>
                                        <div className='CarousalHeading'>
                                        <h3>{data.heading}</h3>
                                        </div>

                                        <div className='CarousalText'>
                                        <p>{data.text}</p>
                                        </div>

                                      </div>
                                    {/* </Carousel.Caption> */}
                                </Carousel.Item>
                            )
                        }
                    )
                }
                
            </Carousel>
        </div>
    );
}

export default RightSlider;