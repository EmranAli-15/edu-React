// import React from "react";
// import mentorshipPathImg from "../../images/mentorship-path.png";
// import HowItWorks from "./HowItWorks";

// export default function RoadMap() {
//   return (
//     <div>
//       <div className="xxs:mt-[5rem] xxs:text-center lg:mt-[10rem] lg:ml-9">
//         <h2 className="lg:text-left xxs:ml-2 lg:ml-5 mb-[3rem] pb-3 overflow-hidden whitespace-nowrap  animate-type font-raleway   font-bold xl:text-6xl lg:text-5xl md:text-5xl sm:text-[35px] xs:text-4xl xxs:text-3xl">
//           How it
//           <span className="text-webRed pl-1">Works?</span>
//         </h2>
//       </div>

//       <div className=" lg:mt-[5rem] overflow-hidden  items-center ">
//         <HowItWorks mentorshipPathImg={mentorshipPathImg} />
//       </div>
//     </div>
//   );
// }
import "./index.css";
import renderImg from "../../images/mentorship-path.png"

const RoadMap = () => {
  return (
    <div className="mentorship-image-container">
      <img src={renderImg} alt="Process Image" />
    </div>
  );
};

export default RoadMap;