import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  Image,
  HStack,
  Text,
  Link,
  Heading,
} from "@chakra-ui/react";
import beautybebo from "../Images/beauty-bebo.png";
import bewakoof from "../Images/bewakoof.png";
import sastadeal from "../Images/sastadeal.png";
import urban from "../Images/urban.png";
import { SiRedux, SiNodedotjs, SiExpress, SiChakraui } from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { MdMilitaryTech } from "react-icons/md";
import { DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";

const Allproject = [
  {
    img: sastadeal,
    title: "Snapdeal-Clone",
    description:
      "Snapdeal is an Indian e-commerce website Snapdeal was one of the largest online marketplaces in India. Snapdeal targets the value e-commerce segment.It was a Collaborative Project built in 5 days.",
    git: "https://github.com/bhaveshkumar96/Snapdeal.com-Clone",
    link: "https://snapdeal-project.vercel.app/",
    // tech: " CSS | React | Redux | Chakra-Ui  ",
    tech: [
      <FaCss3Alt size={"44px"} />,
      <FaReact size={"44px"} />,
      <SiRedux size={"44px"} />,
      <SiChakraui size={"44px"} />,
    ],
  },
  {
    img: beautybebo,
    title: "Beauty Bebo-Clone",
    description:
      "Beauty Bebo is India’s fastest growing online retail store for the day to day and special occasion need of the Makeup, Skin care, Hair care, Personal care, Mom and Baby care, Fragrance and Ayurveda products. ",
    git: "https://github.com/lokesh-dc/Beauty-Bebo-Clone",
    link: "https://bright-puppy-c195ee.netlify.app/",
    tech: [
      <FaCss3Alt size={"44px"} />,
      <FaReact size={"44px"} />,
      <SiJavascript size={"44px"} />,
      <FaHtml5 size={"44px"} />,
    ],
  },
  {
    img: bewakoof,
    title: "Bewakoof-Clone",
    description:
      " Bewakoof is a lifestyle fashion brand that makes creative and top-notch apparel for trendy, contemporary Indians.Online Shopping Site for Men, Women & Accessories. Choose from the best in Men Clothing and Women Fashion Wear.",

    git: "https://github.com/akaushik509/brainy-deer-5360",
    link: "https://trendy-treasures.netlify.app/",
    // tech: " CSS | React | Mongodb | Chakra-Ui ",
    tech: [
      <FaCss3Alt size={"44px"} />,
      <FaReact size={"44px"} />,
      <DiMongodb size={"44px"} />,
      <SiChakraui size={"44px"} />,
    ],
  },
  {
    img: urban,
    title: "UrbanCompany-Clone",
    description:
      "Urban Company is your one-stop destination for expert local services. Get dozens of trusted professionals near you to take care of all your home",
    git: "https://github.com/Vaishnavi-Borkar/UrbanCompany",
    link: "https://helpinghand-gamma.vercel.app/",
    // tech: "HTML | CSS | React | Chakra-Ui",
    tech: [
      <FaHtml5 size={"44px"} />,
      <FaCss3Alt size={"44px"} />,
      <FaReact size={"44px"} />,
      <SiChakraui size={"44px"} />,
    ],
  },
];

function Projects() {
  return (
    <Box as={Container} maxW="8xl" mt={14} p={4} id="project">
      <Heading mb={20} color={"rgb(240, 158, 6)"}>
        Projects
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
        }}
        gap={4}
      ></Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3,1fr)",
        }}
        gap={{ base: "8", sm: "9", md: "12" }}
      >
        {Allproject.map(({ img, title, tech, description, git, link }) => (
          <VStack
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            key={title}
            // w={"500px"}
            // m={"50px"}
            w={{ base: "250px", sm: "300px", md: "300px", lg: "400px" }}
            aline={"center"}
            justify={"center"}
            margin={"auto"}
          >
            <Image
              padding="10px"
              boxShadow={
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
              }
              src={img}
              alt={title}
              w={{ base: "200px", sm: "250px", md: "280px", lg: "350px" }}
            />
            <Text color={"#f09e06 "} fontSize="3xl" mt="100px">
              {title}
            </Text>
            <Text
              w={{ base: "230px", sm: "300px", md: "280px" }}
              h={{ base: "280px", sm: "300px", md: "240px" }}
              color={"gray.500"}
              fontSize={"lg"}
            >
              {description}
            </Text>
            <HStack color={"#f09e06"}>
              <Box>{tech[0]}</Box>
              <Box>{tech[1]}</Box>
              <Box>{tech[2]}</Box>
              <Box>{tech[3]}</Box>
            </HStack>
            <HStack padding={7}>
              <Link
                boxShadow={
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                }
                href={git}
                isExternal
                w={"auto"}
                border="1px"
                padding={"8px 15px"}
                borderRadius="10px"
                borderColor="#f09e06"
                bg={"#f09e06"}
                fontWeight={"bold"}
                fontSize={{ base: "12px", sm: "12px", md: "15px" }}
                _hover={{ color: "#f09e06", bg: "white" }}
                bgImage={"linear-gradient(to right, #f09e06 , #fc490b )"}
              >
                Github
              </Link>

              <Link
                boxShadow={
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
                }
                href={link}
                isExternal
                w={"auto"}
                fontSize={{ base: "12px", sm: "12px", md: "15px" }}
                border="1px"
                padding={"8px 15px"}
                borderRadius="10px"
                borderColor="#f09e06"
                // bg={"#f09e06"}
                fontWeight={"bold"}
                bgImage={"linear-gradient(to right, #f09e06 , #fc490b )"}
                _hover={{ color: "#f09e06", bg: "white" }}
              >
                Deploy link
              </Link>
            </HStack>
          </VStack>
        ))}
      </Grid>
    </Box>
  );
}
export default Projects;
