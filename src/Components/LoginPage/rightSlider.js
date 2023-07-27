import Carousel from 'react-bootstrap/Carousel';
import '../../CSS/App.css'
import { IMG } from '../Functions/Services';
import { interval } from '../../Constants/Constants';


function RightSlider() {

    console.log('RightSlider')

    return (
        <div className='RightSide'>
            <Carousel controls={false}>

                {
                    IMG.map(
                        (data, index) => {
                            return (
                                <Carousel.Item interval={interval} key={index} className='carouselItems'>
                                    <img
                                        className="d-block w-100 carousalImage"
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