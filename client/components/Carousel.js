import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const poses = [
  {
    name: 'Garland',
    imageUrl:
      'https://media.istockphoto.com/vectors/manga-style-cartoon-yoga-garland-pose-vector-id1093813776?k=6&m=1093813776&s=612x612&w=0&h=YcZSUe1Sr-tiYGpQ7JZ6F2NY4ducTjl5GpcSs4UpfaA=',
  },
  {
    name: 'Tree',
    imageUrl:
      'https://media.istockphoto.com/vectors/cartoon-yoga-couple-vector-id979681068?k=6&m=979681068&s=612x612&w=0&h=n4XmgEKy54gXVxp045621dq37eAF6fHD7X1umcl65gM=',
  },
  {
    name: 'Half Moon',
    imageUrl:
      'https://st4.depositphotos.com/5130171/19866/v/1600/depositphotos_198661934-stock-illustration-child-doing-yoga-half-moon.jpg',
  },
];

class PoseCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <div className="carousel bg-primary w-75 mx-auto mt-5">
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          interval={false}
        >
          {poses.map((pose, i) => {
            return (
              <Carousel.Item>
                <img
                  className="carousel slide carousel-fade carouselImage"
                  src={pose.imageUrl}
                />
                <Carousel.Caption>
                  {/* <h3>{pose.name}</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default PoseCarousel;
