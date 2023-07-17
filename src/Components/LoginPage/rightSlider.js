import Carousel from 'react-bootstrap/Carousel';
import '../../CSS/App.css'

function RightSlider() {
    
    console.log('1111111111')

    const IMG = [
        {
            'url': require('../../Images/Learn.png'),
            'heading': 'Learn',
            'text': 'Kota\'s top IITian and Doctor faculties./n Amazing visualisation to understand any concept easily.'
        },
        {
            'url': require('../../Images/Practice.png'),
            'heading': 'Practice',
            'text': 'Chapter-wise sheets and PYQs with detailed solutions.'
        },
        {
            'url': require('../../Images/Revise.png') ,
            'heading': 'Revise',
            'text': 'Quickly revise the syllabus with crystallized videos, mind maps and notes.'
        },
        {
            'url': require('../../Images/Test.png'),
            'heading': 'Test',
            'text': 'Latest Pattern tests from expert faculties with detailed analysis.'
        }
    ]

    return (
        <div className='RightSide'>
        <Carousel>

{
    IMG.map(
        (data, index) => {
            return(
                <Carousel.Item  key={index} className='carouselItems'>
                <img
                    className="d-block w-100"
                    src= {data.url}
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