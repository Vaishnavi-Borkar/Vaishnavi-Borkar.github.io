import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Link,
  HStack,
} from "@chakra-ui/react";
import { FaUsers, FaLinkedin, FaGithub } from "react-icons/fa";
import resume from "../Images/resume.png";
function About() {
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              //   position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                // bg: "#f9f1ac",
                zIndex: -1,
              }}
            >
              I Am
            </Text>
            <br />
            <Text as={"span"} color={"#f09e06"}>
              Vaishnavi Borkar
            </Text>
          </Heading>
          <Text color={"gray.500"} fontSize="3xl">
            Full Stack Web Developer
          </Text>
          {/* <HStack padding={7}>
            <Link
              boxShadow={
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
              }
              // href={git}
              isExternal
              w={"auto"}
              border="1px"
              padding={"8px 15px"}
              borderRadius="10px"
              borderColor="#f09e06"
              bg={"#f09e06"}
              fontWeight={"bold"}
              _hover={{ color: "#f09e06", bg: "white" }}
            >
              Github
            </Link>

            <Link
              boxShadow={
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
              }
              // href={link}
              isExternal
              w={"auto"}
              border="1px"
              padding={"8px 15px"}
              borderRadius="10px"
              borderColor="#f09e06"
              bg={"#f09e06"}
              fontWeight={"bold"}
              _hover={{ color: "#f09e06", bg: "white" }}
            >
              Deploy link
            </Link>
          </HStack> */}
          {/* <Flex
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
            aline={"center"}
            flex={1}
            justify={"center"}
          >
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={"#f09e06"}
              mr={5}
              _hover={{ bg: "#f9f1ac", color: "black" }}
            >
              <FaGithub mx="4px" />
            </Button>
            <Button
              rounded={"full"}
              size={"lg"}
              fontWeight={"normal"}
              px={6}
              colorScheme={"red"}
              bg={"#f09e06"}
              _hover={{ bg: "#f9f1ac", color: "black" }}
            >
              <FaLinkedin />
            </Button>
          </Flex> */}
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          //   position={"relative"}
          w={"full"}
        >
          <Box
            // position={"relative"}
            height={"300px"}
            rounded={"2xl"}
            boxShadow={"2xl"}
            width={"70%"}
            overflow={"hidden"}
          >
            <Image
              alt={"Hero Image"}
              fit={"cover"}
              align={"center"}
              justify={"center"}
              w={"100%"}
              h={"100%"}
              src={resume}
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
}

export default About;
