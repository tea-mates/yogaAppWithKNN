import React from "react";

const poses = [
  {
    name: "Garland",
    imageUrl: "https://i.imgur.com/16JLzA4.png",
    highlight: "https://i.imgur.com/bhP3AYN.png"
  },
  {
    name: "Tree",
    imageUrl:
      "https://live.staticflickr.com/65535/33935797398_279eda570c_z.jpg",
    highlight:
      "https://live.staticflickr.com/65535/33935797398_279eda570c_z.jpg"
  },
  {
    name: "Half Moon",
    imageUrl:
      "https://live.staticflickr.com/65535/47812849101_0fba3078a6_z.jpg",
    highlight:
      "https://live.staticflickr.com/65535/47812849101_0fba3078a6_z.jpg"
  },
  {
    name: "Half Moon",
    imageUrl:
      "https://st4.depositphotos.com/5130171/19866/v/1600/depositphotos_198661934-stock-illustration-child-doing-yoga-half-moon.jpg",
    highlight:
      "https://st4.depositphotos.com/5130171/19866/v/1600/depositphotos_198661934-stock-illustration-child-doing-yoga-half-moon.jpg"
  }
];

class AllPoses extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      poses: poses
    };
  }

  render() {
    return (
      <div className="allPoseImages">
        <div className="poseContainer">
          <img className="posesImage" src={poses[0].imageUrl} />
          <img />
          <img />
          <img />

          <img className="posesImage" src={poses[1].imageUrl} />
        </div>
        <br />
        <br />
        <div className="poseContainer2">
          <img className="posesImage" src={poses[2].imageUrl} />
          <img />
          <img />
          <img />

          <img className="posesImage" src={poses[3].imageUrl} />
        </div>
      </div>
    );
  }
}

export default AllPoses;
