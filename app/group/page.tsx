"use server";
import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Divider } from "@mui/material";
import SideBarGroup from "./components/SideBarGroup";
import TitleGroup from "./components/TitleGroup";
import JoinedGroup from "./components/JoinedGroup";
import Invitation from "./components/Invitations";
import { PageProps } from "@/components/type";

export default async function GroupPage(props: PageProps) {
  const targetViewGroup = props.searchParams.targetViewGroup;

  return (
    <Container maxWidth={false} sx={{ mt: 3, mb: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <SideBarGroup></SideBarGroup>
        </Grid>
        <Grid item xs={9}>
          <TitleGroup></TitleGroup>
          <Divider />
          {targetViewGroup === "joined-group" ? (
            <JoinedGroup></JoinedGroup>
          ) : (
            <Invitation></Invitation>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
