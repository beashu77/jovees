import { Box, Flex, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import style from "./HomeStyle.module.css";
import { BsPerson, BsCartDash } from "react-icons/bs";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://jovees.com/media/wysiwyg/slider/jovees-banner-desktop_1.png",
  },
  {
    url: "https://jovees.com/media/wysiwyg/slider/revita-ageing-desktop_1.png",
  },
  {
    url: "https://jovees.com/media/wysiwyg/slider/web-banner-acne-prone-skin.jpeg",
  },
  {
    url: "https://jovees.com/media/wysiwyg/slider/website-banner---diwali-parneeti-2.jpg",
  },
  { url: "https://jovees.com/media/wysiwyg/slider/prof-desktop_1.jpeg" },
];

const Homepage = () => {
  const NavBottomData = [
    {
      img: "https://jovees.com/media/wysiwyg/fbuilder/paraben-free.png",
      title: "Paraben Free",
      id: 1,
    },
    {
      img: "https://jovees.com/media/wysiwyg/fbuilder/cruelty-free.png",
      title: "Cruelty Free",
      id: 2,
    },
    {
      img: "https://jovees.com/media/wysiwyg/fbuilder/alcohol-free.png",
      title: "Alcohol Free",
      id: 3,
    },
    {
      img: "https://jovees.com/media/wysiwyg/fbuilder/clini-tested.png",
      title: "Clinically Tested",
      id: 4,
    },
    {
      img: "https://jovees.com/media/wysiwyg/fbuilder/natural.png",
      title: "Natural Ingredients",
      id: 5,
    },
  ];
  return (
    <Box className={style.Homecontainer}>
      <Box className={style.homeTopDiscountBanner}>
        <Text fontSize={"sm"}>
          Assured Gift worth Inr 299/- on purchase above 599/-. Free Delivery on
          orders more than 499/-
        </Text>
      </Box>
      {/* Navbar Starts */}
      <Box>
        <Flex h="80px">
          <Box
            p="4"
            // border="1px solid red"
            w="20%"
            display="flex"
            justifyContent="center"
          >
            <Image
              src="https://jovees.com/media/logo/default/Jovees_Logo.jpg"
              h="100%"
            />
          </Box>
          <Spacer />
          <Box
            p="4"
            // border="1px solid green"
            w="50%"
            className={style.navbarmid}
          >
            <Flex color={"#686165 "} gap={"20px"}>
              <Text fontSize={"sm"}> SKIN CARE</Text>
              <Text fontSize={"sm"}>HAIR CARE</Text>
              <Text fontSize={"sm"}>BODY CARE</Text>
              <Text fontSize={"sm"}>PROFESSIONAL RANGE</Text>
              <Text fontSize={"sm"}>AYURVEDA</Text>
              <Text fontSize={"sm"}>BEAUTY</Text>
              <Text fontSize={"sm"}>COMBOS</Text>
            </Flex>
          </Box>
          <Spacer />
          <Box
            className={style.navbarend}
            p="4"
            // border="1px solid green"
            w="20%"
          >
            <BsPerson />
            <BsCartDash />
          </Box>
        </Flex>
      </Box>
      <Box className={style.NavbarBottomStrip}>
        {NavBottomData.map((elem) => {
          return (
            <Flex gap={"5px"} key={elem.id}>
              <Image src={elem.img} h="70%" />
              <Text marginRight={"20px"} fontSize={"sm"}>
                {elem.title}
              </Text>
            </Flex>
          );
        })}
      </Box>
      <Box>
        <Box W={"100%"}    className={style.sliderImages}>
          <SimpleImageSlider
            width={"100%"}
            height={354}
            images={images}
            showBullets={true}
            showNavs={true}
         
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Homepage;
