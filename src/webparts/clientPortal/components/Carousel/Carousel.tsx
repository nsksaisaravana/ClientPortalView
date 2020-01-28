import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {ICarouselProps} from './index';
export  class DynamicCarousel extends React.Component<ICarouselProps, {}> {

    public render(): JSX.Element {
        return (
            <Carousel>
                {this.props.propImageItems.map(item => (
                    <Carousel.Item  >
                        <img
                    className="d-block w-100"
                    src={item.blob}
                    alt="First slide"
                    style={{width:852,height:372}}
                    /> 
                    <Carousel.Caption>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
 
        );
    }
}