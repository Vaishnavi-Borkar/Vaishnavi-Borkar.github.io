import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Link,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { SiHackerrank } from "react-icons/si";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";

function Contact() {
  return (
    <Container
      bg="white"
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
      id="contact"
    >
      <Heading mb={20} mt={20} color={"rgb(240, 158, 6)"}>
        Contact me
      </Heading>
      <Flex>
        <Box
          bg="#f9f1ac"
          color="black"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>Contact</Heading>
                  {/* <Text mt={{ sm: 3, md: 3, lg: 5 }} color={"gray.500"}>
                    Fill up the form below to contact
                  </Text> */}
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color={"gray.500"}
                        // _hover={{ border: '2px solid black' }}
                        leftIcon={<MdPhone color={"#f09e06"} size="20px" />}
                      >
                        +91-8668671404
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="auto"
                        variant="ghost"
                        color={"gray.500"}
                        _hover={{ border: "2px solid black" }}
                        leftIcon={<MdEmail color={"#f09e06"} size="20px" />}
                      >
                        vaishnaviborkar29@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color={"gray.500"}
                        _hover={{ border: "2px solid black" }}
                        leftIcon={
                          <MdLocationOn color={"#f09e06"} size="20px" />
                        }
                      >
                        Nagpur, Maharashtra
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <Link
                      label={"Github"}
                      href="https://github.com/Vaishnavi-Borkar"
                      isExternal
                    >
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        color={"#f09e06"}
                        // _hover={{ bg: '#0D74FF' }}
                        icon={<BsGithub size="28px" />}
                      />
                    </Link>
                    <Link
                      label={"linkedin"}
                      href="https://www.linkedin.com/in/vaishnavi-borkar21/"
                      isExternal
                    >
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        color={"#f09e06"}
                        // _hover={{ bg: '#0D74FF' }}
                        icon={<BsLinkedin size="28px" />}
                      />
                    </Link>
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <form
                        action="https://formspree.io/f/mnqydozr"
                        method="POST"
                      >
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" name="name" size="md" required />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Mail</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input
                              type="email"
                              name="email"
                              size="md"
                              required
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                            name="message"
                            required
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            type="submit"
                            variant="solid"
                            // bg={"#f09e06"}
                            bgImage={
                              "linear-gradient(to right, #f09e06 , #fc490b )"
                            }
                            color="white"
                            _hover={{}}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
export default Contact;
