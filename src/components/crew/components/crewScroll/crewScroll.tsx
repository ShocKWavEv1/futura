import { Box, Text } from "@chakra-ui/react";
import { createClient } from "@sanity/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import CrewHeader from "../crewHeader/crewHeader";
import { CrewScrollProps } from "./model";
import { useNextSanityImage as sanityImages } from "next-sanity-image";
import Image from "next/image";
import { SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";

const CrewScroll: React.FC<CrewScrollProps> = ({ crew }) => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-110vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "1000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  const configuredSanityClient = createClient({
    projectId: "7fexp3pt",
    dataset: "production",
    useCdn: false,
  });

  const renderImage = (image: any) => {
    const imageProps: any = sanityImages(configuredSanityClient, image);
    return imageProps;
  };

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <Box ref={sectionRef} className="scroll-section-inner">
          {crew.map((item: any) => {
            return (
              <div key={item.title} className="scroll-section">
                <Box
                  w="100%"
                  m="0px 20px"
                  display="flex"
                  flexDirection="column"
                  cursor="pointer"
                >
                  <Image
                    src={renderImage(item.mainImage)}
                    alt={item.name}
                    placeholder="blur"
                    blurDataURL="https://my-company-images-prd.imgix.net/public/bg-desktop.png?auto=format&blur=200&px=24"
                    sizes="(max-width: 800px) 100vw, 800px"
                  />
                  <Box w="100%" p="10px" display="flex" flexDirection="column">
                    <Text variant="MDBOLD">{item.name}</Text>
                    <Text variant="SMREGULAR">{item.role}</Text>
                    <Box
                      width="100%"
                      display="flex"
                      flexDirection="row"
                      mt="10px"
                    >
                      <SlSocialInstagram color="white" fontSize="16px" />
                      <Box mx="10px">
                        <SlSocialLinkedin color="white" fontSize="16px" />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </div>
            );
          })}
        </Box>
      </div>
    </section>
  );
};

export default CrewScroll;
