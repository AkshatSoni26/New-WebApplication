import Carousel from 'react-bootstrap/Carousel';
import '../../CSS/App.css'
import { IMG } from '../Functions/Services';

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
                                    <Carousel.Caption>
                                        <h3>{data.heading}</h3>
                                        <p>{data.text}</p>
                                    </Carousel.Caption>
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