import "./Navbar.css";

import logo from "../../Images/Logo.png";
import { BiArrowToBottom } from "react-icons/bi";
import VaishnaviResume from "../../Images/VaishnaviResume.pdf";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <>
      <div className="wrapper">
        <div className="logo-side">
          <div className="name">
            <img src={logo} className="logo" />
          </div>
        </div>
        <div className="menu-side">
          <div className="list">
            <ul>
              <li>
                <a
                  href="#"
                  onClick={() => setActiveNav("#")}
                  className={activeNav === "#" ? "active" : ""}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => setActiveNav("#about")}
                  className={activeNav === "#about" ? "active" : ""}
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skill"
                  onClick={() => setActiveNav("#skill")}
                  className={activeNav === "#skill" ? "active" : ""}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  onClick={() => setActiveNav("#project")}
                  className={activeNav === "#project" ? "active" : ""}
                >
                  Project
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={() => setActiveNav("#contact")}
                  className={activeNav === "#contact" ? "active" : ""}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <button className="Down-button">
            <a
              href="https://drive.google.com/file/d/1NE0MsOgc5ooHnx_sb7i67ou82nDjGcjn/view?usp=sharing"
              target="_blank"
              download
              className="Download"
            >
              Resume
            </a>
            {/* onclick="window.open('https://drive.google.com/file/d/1f2VSd5rBXidiPWoI-Vs2Yu9hTbETaMRa/view?usp=sharing')" */}
            {/* <BiArrowToBottom />  Resume */}
            <BiArrowToBottom />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// import { ReactNode } from "react";
// import {
//   Box,
//   Flex,
//   Avatar,
//   HStack,
//   Link,
//   IconButton,
//   Button,
//   Menu,
//   MenuButton,
//   MenuList,
//   MenuItem,
//   MenuDivider,
//   useDisclosure,
//   useColorModeValue,
//   Stack,
// } from "@chakra-ui/react";
// import { HamburgerIcon, CloseIcon, DownloadIcon } from "@chakra-ui/icons";

// const Links = ["About Me", "Skills", "Project", "Contact Me"];

// const NavLink = ({ children }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>
// );

// export default function Navbar() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
//         <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
//           <IconButton
//             size={"md"}
//             icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//             aria-label={"Open Menu"}
//             display={{ md: "none" }}
//             onClick={isOpen ? onClose : onOpen}
//           />
//           <HStack spacing={8} alignItems={"center"}>
//             <Box></Box>
//             <HStack
//               as={"nav"}
//               spacing={4}
//               display={{ base: "none", md: "flex" }}
//             >
//               {Links.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))}
//             </HStack>
//           </HStack>
//           <Flex alignItems={"center"}>
//             <Button
//               variant={"solid"}
//               colorScheme={"teal"}
//               size={"sm"}
//               mr={4}
//               leftIcon={<DownloadIcon />}
//             >
//               Resume
//             </Button>
//             <Menu>
//               <MenuButton
//                 as={Button}
//                 rounded={"full"}
//                 variant={"link"}
//                 cursor={"pointer"}
//                 minW={0}
//               >
//                 <Avatar size={"sm"} src={logo} />
//               </MenuButton>
//               <MenuList>
//                 <MenuItem></MenuItem>
//                 <MenuItem>Link 2</MenuItem>
//                 <MenuDivider />
//                 <MenuItem>Link 3</MenuItem>
//               </MenuList>
//             </Menu>
//           </Flex>
//         </Flex>

//         {isOpen ? (
//           <Box pb={4} display={{ md: "none" }}>
//             <Stack as={"nav"} spacing={4}>
//               {Links.map((link) => (
//                 <NavLink key={link}>{link}</NavLink>
//               ))}
//             </Stack>
//           </Box>
//         ) : null}
//       </Box>

//       <Box p={4}></Box>
//     </>
//   );
// }
