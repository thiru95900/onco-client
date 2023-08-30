import React from 'react';
import Carousel from "react-material-ui-carousel";
import { BsCircleFill } from 'react-icons/bs';


const Carousal = (props: any) => {
    const { slides, setCurrentSlide } = props;
    return (
      <Carousel
        IndicatorIcon={<BsCircleFill/>}
        indicatorIconButtonProps={{ style: { padding: '10px', color: '#B0B0B0' }}}
        activeIndicatorIconButtonProps={{ className: "carousal-active" }}
        interval={4000}
        onChange={(e) => setCurrentSlide(e)}
        animation={'slide'}
      >
        {slides}
      </Carousel>
  );
}

export default Carousal