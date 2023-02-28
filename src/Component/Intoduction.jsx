import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Button,
  Box,
  Link,
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { HamburgerIcon, CloseIcon, DownloadIcon } from "@chakra-ui/icons";
import Vaishnavi_Borkar_Resume from "../Images/Vaishnavi_Borkar_Resume.pdf";
import { ReactElement } from "react";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

function Intoduction() {
  return (
    <Container maxW={"5xl"} py={12} id="intro">
      <Heading mb={20} color={"rgb(240, 158, 6)"}>
        About Me
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          {/* <Text
            textTransform={"uppercase"}
            color={"blue.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("blue.50", "blue.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            Our Story
          </Text> */}
          {/* <Heading>A digital Product design agency</Heading> */}
          <Text color={"gray.500"} fontSize={"lg"}>
            Strong in design and integration with intuitive problem-solving
            skills. Proficient in JavaScript, React.js, HTML and CSS. Passionate
            about implementing and launching new projects. Looking to start my
            career as an entry-level web developer with a reputed firm driven by
            technology.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.100", "gray.700")}
              />
            }
          >
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("yellow.100", "yellow.900")}
              text={"Coding Practice of 1000+ Hours"}
            />
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={"green.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("green.100", "green.900")}
              text={"5+  Projects Completed"}
            />
            <Feature
              icon={
                <Icon as={IoAnalyticsSharp} color={"purple.500"} w={5} h={5} />
              }
              iconBg={useColorModeValue("purple.100", "purple.900")}
              text={"DSA Practice of 700+ Hours"}
            />
          </Stack>
          <Button
            variant={"solid"}
            bg={"#f09e06"}
            size={"sm"}
            mr={4}
            color={"black"}
            _hover={{ color: "#f09e06", bg: "white" }}
            // fontSize={"lg"}
            // fontWeight={"bold"}
            // textDecoration={"none"}
            bgImage={"linear-gradient(to right, #f09e06 , #fc490b )"}
            leftIcon={<DownloadIcon />}
          >
            <a
              href={Vaishnavi_Borkar_Resume}
              download
              smooth="true"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1NE0MsOgc5ooHnx_sb7i67ou82nDjGcjn/view?usp=sharing"
                )
              }
              target="_blank"
            >
              Resume
            </a>
          </Button>
        </Stack>
        <Flex>
          <Image
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://www.wyzowl.com/wp-content/uploads/2019/07/13-of-the-Best-Animated-Resumes-We%E2%80%99ve-Ever-Seen.png"
            }
            objectFit={"cover"}
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
export default Intoduction;
