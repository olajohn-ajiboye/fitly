import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import { Avatar, Link, Slide, Paper, Typography } from "@material-ui/core";

import scale from "./../assets/scale.svg";
import height from "./../assets/height.svg";
import diet from "./../assets/healthy.svg";
import healthy from "./../assets/roast-turkey.svg";

import Icon from "./Styles/Icons";
import { CurrentUser } from "../services/firestore";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: "#DADAE0",
    "& img ": {
      width: 25,
      height: 25,
      margin: 10,
    },
    "& .MuiAvatar-img": {
      display: "inline-block",
      borderRadius: "50%",
      width: 45,
      height: 45,
    },
  },
  title: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px white solid",
    width: "calc(100% + 10px)",
  },
  typo: {
    textTransform: "capitalize",
    marginRight: 5,
  },
}));
const StyledLink = styled(Link)({
  display: "flex",
  color: "inherit",
  alignItems: "center",
  paddingLeft: "10px",
  lineHeight: "50px",
  borderBottom: "1px white solid",
  width: "calc(100% + 10px)",
});

interface AppBarProps {
  onMobileMenuClick: () => void;
  user?: CurrentUser;
}

const SideBar = ({ onMobileMenuClick, user }: AppBarProps) => {
  const { root, title, typo } = useStyles();

  return (
    <Slide direction="down" in={true} mountOnEnter unmountOnExit>
      <Paper onClick={onMobileMenuClick}>
        <nav className={root}>
          <div className={title}>
            <Typography variant="h6" className={typo}>
              {" "}
              {user?.displayName}{" "}
            </Typography>
            <Avatar src={user?.photoURL ?? ""} alt="user" />
          </div>
          <StyledLink href="#" variant="body2">
            <Icon src={scale} alt="scale" /> Weight
          </StyledLink>
          <StyledLink href="#" variant="body2">
            <Icon src={height} alt="body" /> Body
          </StyledLink>
          <StyledLink href="#" variant="body2">
            <Icon src={healthy} alt="healthy" />
            Body <Icon src={diet} alt="diet" />
          </StyledLink>
          <StyledLink href="#" variant="body2">
            <Icon src={scale} alt="scale" /> Weight
          </StyledLink>
          <StyledLink href="#" variant="body2">
            <Icon src={height} alt="body" /> Body
          </StyledLink>
          <StyledLink href="#" variant="body2">
            <Icon src={diet} alt="diet" /> Weight
          </StyledLink>
        </nav>
      </Paper>
    </Slide>
  );
};

export default SideBar;
