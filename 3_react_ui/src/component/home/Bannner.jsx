import React from 'react'
import Carousel from 'react-multi-carousel';
import { bannerData } from '../../constant/data';
import { styled } from '@mui/material';
import 'react-multi-carousel/lib/styles.css';
const Image = styled('img')({
    width: '100%',
    height: 280,
});
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    largeDesktop: {
        breakpoint: { max: 3000, min: 2400 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 2400, min: 1800 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1800, min: 1224 },
        items: 1
    },
    mobileLandscape: {
        breakpoint: { max: 1224, min: 768 },
        items: 1
    }
};

const Bannner = () => {
  return (
    <Carousel responsive={responsive}
    swipeable={false}
    draggable={false}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={3000}
    keyBoardControl={true}
    showDots={false}
    slidesToSlide={1}
    containerClass="carousel-container"
    dotListClass="custom-dot-list-style"
    itemClass="carousel-item-padding-40-px"
    >
        {bannerData.map(data=>(
            <Image src={data.url} alt="bannner" />
        ))}
    </Carousel>
  )
}

export default Bannner