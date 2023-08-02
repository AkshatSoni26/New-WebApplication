import Carousel from 'react-bootstrap/Carousel';
import '../../CSS/App.css'
import { IMG } from '../Functions/Services';
import { interval } from '../../Constants/Constants';


function RightSlider() {

    console.log('RightSlider')

    return (
        <>
            <Carousel controls={false} fade slide={false}>

                {
                    IMG.map(
                        (data, index) => {
                            return (
                                <Carousel.Item interval={interval} key={index} >

                                    <div className='carouselItems'>

                                        <div className='coursoImg' >
                                            <img
                                              className="carousalImage" 
                                                src={data.url}
                                            />
                                        </div>

                                        <div className='CarousalCaption'>
                                            <div className='CarousalHeading'>
                                                <h3>{data.heading}</h3>
                                            </div>

                                            <div className='CarousalText'>
                                                <p>{data.text}</p>
                                            </div>

                                        </div>

                                    </div>
                                </Carousel.Item>
                            )
                        }
                    )
                }

            </Carousel>
        </>
    );
}

export default RightSlider;