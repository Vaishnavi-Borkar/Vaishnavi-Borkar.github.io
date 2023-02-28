import {
  Avatar,
  Box,
  chakra,
  Container,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  useColorModeValue,
  Heading,
  Grid,
  VStack,
} from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";
const image = [
  "https://github-readme-activity-graph.cyclic.app/graph?username=Vaishnavi-Borkar&color=f09e06&theme=react-dark&custom_title=Vaishnavi-Borkar%20's%20contribution%20Graph&hide_border=true",
  "https://github-readme-streak-stats.herokuapp.com/?user=Vaishnavi-Borkar&show_icons=true&locale=en&theme=gruvbox&count_private=true",
  "https://github-readme-stats.vercel.app/api?username=Vaishnavi-Borkar&theme=algolia&hide_border=false&include_all_commits=true&count_private=true",
];

function Gits() {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 5;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear ||
        monthOfDay > currentMonth - shownMonths ||
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <Flex
      textAlign={"center"}
      pt={10}
      justifyContent={"center"}
      direction={"column"}
      width={"full"}
      overflow={"hidden"}
    >
      <Box width={{ base: "full", sm: "lg", lg: "xl" }} margin={"auto"}>
        <Heading mb={20} color={"rgb(240, 158, 6)"}>
          Github
        </Heading>
      </Box>
      <VStack
        gap={{ base: "8", sm: "12", md: "16" }}
        padding={"20px"}
      
      >
        <Image
          justify={"center"}
          aline={"center"}
          src="https://github-readme-activity-graph.cyclic.app/graph?username=Vaishnavi-Borkar&color=f09e06&theme=react-dark&custom_title=Vaishnavi-Borkar%20's%20contribution%20Graph&hide_border=true"
          alt="contribution"
        />
        <GitHubCalendar
          justify={"center"}
          aline={"center"}
          username="Vaishnavi-Borkar"
          transformData={selectLastHalfYear}
          // year={new Date().getFullYear()}
          color="rgb(240, 158, 6)"
          width="100vw"
        />
        {/* <Image
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Vaishnavi-Borkar&layout=compact&theme=react-dark&color=rgb(240, 158, 6)"
          alt="language"
        /> */}
        <Image
          justify={"center"}
          aline={"center"}
          src="https://github-readme-streak-stats.herokuapp.com/?user=Vaishnavi-Borkar&show_icons=true&locale=en&theme=gruvbox&count_private=true"
          alt="starts"
        />
        <Image
          justify={"center"}
          padding={"10px"}
          aline={"center"}
          src="https://github-readme-stats.vercel.app/api?username=Vaishnavi-Borkar&theme=algolia&hide_border=false&include_all_commits=true&count_private=true"
          alt="stats"
        />
      </VStack>
      {/* <Box>
        <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={"purple.400"}>
          <path
            fill={"currentColor"}
            d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
          />
        </Icon>
      </Box> */}
    </Flex>
  );
}
export default Gits;
