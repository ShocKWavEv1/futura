import { Box, Text } from "@chakra-ui/react";
import { createClient } from "@sanity/client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { useNextSanityImage as sanityImages } from "next-sanity-image";
import Image from "next/image";
import { SlSocialInstagram } from "react-icons/sl";
import MotionAnimation from "@/components/motionAnimation/motionAnimation";
import Link from "next/link";
import { useWindowSize } from "@studio-freight/hamo";
import { getCrewScroll } from "@/constants/getCrewScroll";

const CrewScroll = ({ crew }) => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  const { width } = useWindowSize();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: getCrewScroll(width),
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "center center",
          end: "2000px bottom",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, [width]);

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
    <section className="scroll-section-outer">
      <div ref={triggerRef}>
        <Box
          ref={sectionRef}
          w={["400vw", "320vw", "250vw", "200vw", "200vw"]}
          className="scroll-section-inner"
        >
          {crew.map((item, i) => {
            return (
              <Box
                key={item.title}
                w={["100vw", "80vw", "50vw", "33vw", "33vw"]}
                className="scroll-section"
              >
                <MotionAnimation delay={0}>
                  <Box
                    w="100%"
                    m="10px 20px 0px 20px"
                    display="flex"
                    flexDirection="column"
                    cursor="pointer"
                    className="link"
                  >
                    <Link href={item.social_media} target="_blank">
                      <Image
                        src={renderImage(item.mainImage)}
                        alt={item.name}
                        placeholder="blur"
                        blurDataURL="https://my-company-images-prd.imgix.net/public/bg-desktop.png?auto=format&blur=200&px=24"
                        sizes="(max-width: 800px) 100vw, 800px"
                      />
                      <Box
                        w="100%"
                        p="10px"
                        display="flex"
                        flexDirection="column"
                      >
                        <Text variant="MDBOLD">{item.name}</Text>
                        <Text variant="SMREGULAR">{item.role}</Text>
                        <Box
                          width="100%"
                          display="flex"
                          flexDirection="row"
                          mt="10px"
                        >
                          <SlSocialInstagram color="white" fontSize="16px" />
                        </Box>
                      </Box>
                    </Link>
                  </Box>
                </MotionAnimation>
              </Box>
            );
          })}
        </Box>
      </div>
    </section>
  );
};

export default CrewScroll;
