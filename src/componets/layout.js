import React from "react";
import Header from "./header";
import { Link } from "gatsby";
import { HStack, Box } from "@chakra-ui/react";

const ListLink = (props) => (
  <Box
    as="li"
    sx={{
      "a[aria-current=page]": { color: "red" },
      "a:hover": { textDecoration: "underline" },
    }}
  >
    <Link to={props.to}>{props.children}</Link>
  </Box>
);

export default function Layout({ children }) {
  return (
    <div>
      <Header>
        <Link to="/">
          <h3>MySweetSite</h3>
        </Link>

        <HStack as="ul" listStyleType="none" spacing="24px">
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </HStack>
      </Header>

      {children}
    </div>
  );
}
