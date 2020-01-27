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
                    src={item}
                    alt="First slide"
                    style={{width:852,height:372}}
                    /> 
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Item>
                ))}
            </Carousel>
 
        );
    }
}