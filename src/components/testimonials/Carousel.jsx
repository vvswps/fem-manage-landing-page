import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import Anisha from "../../assets/avatar-anisha.png";
import Ali from "../../assets/avatar-ali.png";
import Richard from "../../assets/avatar-richard.png";
import Shanai from "../../assets/avatar-shanai.png";

const DATA = [
  {
    avatar: Anisha,
    name: "Anisha Li",
    review:
      "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
  },
  {
    avatar: Ali,
    name: "Ali Bravo",
    review:
      "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
  },
  {
    avatar: Richard,
    name: "Richard Watts",
    review:
      "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
  },
  {
    avatar: Shanai,
    name: "Shanai Gough",
    review:
      "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
  },
];

const Carousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        mousewheel={true}
        keyboard={true}
        slidesPerView={3}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {DATA.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="slider">
              <div className="avatar">
                <img src={avatar} alt="client avatar" />
              </div>
              <h5>{name}</h5>
              <p>{review}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
