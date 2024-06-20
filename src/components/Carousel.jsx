// import React, { useEffect } from "react";
// import "./Carousel.css";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import Scrollbar from "smooth-scrollbar";

// gsap.registerPlugin(ScrollTrigger);

// const Carousel = () => {
//   useEffect(() => {
//     const bodyScrollBar = Scrollbar.init(document.body, {
//       damping: 0.1,
//       delegateTo: document,
//     });

//     ScrollTrigger.scrollerProxy(".scroller", {
//       scrollTop(value) {
//         if (arguments.length) {
//           bodyScrollBar.scrollTop = value;
//         }
//         return bodyScrollBar.scrollTop;
//       },
//     });

//     bodyScrollBar.addListener(ScrollTrigger.update);

//     gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

//     const images = gsap.utils.toArray(".panel:not(.purple)");

//     images.forEach((image, i) => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: "section.black",
//           scroller: ".scroller",
//           start: () => "top -" + window.innerHeight * (i + 0.5),
//           end: () => "+=" + window.innerHeight,
//           scrub: true,
//           toggleActions: "play none reverse none",
//           invalidateOnRefresh: true,
//         },
//       });

//       tl.to(image, { height: 0 });
//     });

//     gsap.set(".panel-text", { zIndex: (i, target, targets) => targets.length - i });

//     const texts = gsap.utils.toArray(".panel-text");

//     texts.forEach((text, i) => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: "section.black",
//           scroller: ".scroller",
//           start: () => "top -" + window.innerHeight * i,
//           end: () => "+=" + window.innerHeight,
//           scrub: true,
//           toggleActions: "play none reverse none",
//           invalidateOnRefresh: true,
//         },
//       });

//       tl.to(text, { duration: 0.33, opacity: 1, y: "50%" }).to(text, { duration: 0.33, opacity: 0, y: "0%" }, 0.66);
//     });

//     ScrollTrigger.create({
//       trigger: "section.black",
//       scroller: ".scroller",
//       scrub: true,
//       markers: true,
//       pin: true,
//       start: "top top",
//       end: () => "+=" + (images.length + 1) * window.innerHeight,
//       invalidateOnRefresh: true,
//     });
//   }, []);

//   return (
//     <div className="scroller">
//       <section className="orange">
//         <div className="text">This is some text inside of a div block.</div>
//       </section>
//       <section className="black">
//         <div className="text-wrap">
//           <div className="panel-text blue-text">Blue</div>
//           <div className="panel-text red-text">Red</div>
//           <div className="panel-text orange-text">Orange</div>
//           <div className="panel-text purple-text">Purple</div>
//         </div>
//         <div className="p-wrap">
//           <div className="panel blue"></div>
//           <div className="panel red"></div>
//           <div className="panel orange"></div>
//           <div className="panel purple"></div>
//         </div>
//       </section>
//       <section className="blue"></section>
//     </div>
//   );
// };

// export default Carousel;
