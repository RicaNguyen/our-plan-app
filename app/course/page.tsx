"use server";
import * as React from "react";
import Container from "@mui/material/Container";
import { PageProps } from "@/components/type";
import { MySearch } from "@/components/MySearch";
import { Typography } from "@mui/material";
import SortBy from "./components/sortby";

export default async function GroupPage(props: PageProps) {
  const targetViewGroup = props.searchParams.targetViewGroup;
  return (
    <Container maxWidth={false} sx={{ mt: 3, mb: 3 }}>
      <Typography variant={"h2"} align="center">
        asdsa sdfsf
      </Typography>
      <Container maxWidth="md">
        <MySearch />
      </Container>
      <SortBy></SortBy>
    </Container>
  );
}
