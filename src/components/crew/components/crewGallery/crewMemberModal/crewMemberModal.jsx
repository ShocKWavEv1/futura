import React, { useEffect, useRef } from "react";
import { CrewMemberModalProps } from "./model";
import gsap from "gsap";
import { motion } from "framer-motion";
import { scaleAnimation } from "./constants";
import Image from "next/image";
import { Box } from "@chakra-ui/react";
import { createClient } from "@sanity/client";
import { useNextSanityImage as sanityImages } from "next-sanity-image";

const CrewMemberModal = ({ modal, crew }) => {
  const { active, index } = modal;
  const modalContainer = useRef(null);

  useEffect(() => {
    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
    });
  }, []);

  const configuredSanityClient = createClient({
    projectId: "7fexp3pt",
    dataset: "production",
    useCdn: false,
  });

  const renderImage = (image) => {
    const imageProps = sanityImages(configuredSanityClient, image);
    return imageProps;
  };

  return (
    <motion.div
      ref={modalContainer}
      variants={scaleAnimation}
      initial="initial"
      animate={active ? "enter" : "closed"}
      className="modalContainer"
    >
      <div style={{ top: index * -100 + "%" }} className="modalSlider">
        {crew.map((item, index) => {
          return (
            <Box className="modal" bg="black" key={`modal_${index}`}>
              <Box w="300px" h="350px" bg="black" className="link">
                <Image
                  src={renderImage(item.mainImage)}
                  alt={item.name}
                  style={{ width: "100%", height: "100%" }}
                  placeholder="blur"
                  blurDataURL="https://my-company-images-prd.imgix.net/public/bg-desktop.png?auto=format&blur=200&px=24"
                />
              </Box>
            </Box>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CrewMemberModal;
