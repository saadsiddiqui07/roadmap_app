import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import {FcExpand} from 'react-icons/fc'
import StarIcon from '@material-ui/icons/Star'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    justifyContent : 'center',
    alignItems : 'center'
  },
  heading: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: "bolder",
    color : 'black'
  },
}));

export default function WebCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel style={{ backgroundColor: "lightgray", maxWidth:'100%' }}>
        <ExpansionPanelSummary
          expandIcon={<FcExpand />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            What is web development ?
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography paragraph>
                Web development is the work involved in developing a website for the
                Internet (World Wide Web) or an intranet (a private network). Web
                development can range from developing a simple single static page of
                plain text to complex web-based internet applications (web apps),
                electronic businesses, and social network services.
            <Typography paragraph>
                Web development may be a collaborative effort
                between departments rather than the domain of a designated
                department. There are three kinds of web developer specialization: 
                <strong> front-end developer</strong>,<strong> back-end developer</strong>, and <strong>full-stack developer</strong>.
                Front-end developers are responsible for behavior and visuals that
                run in the user browser and the back-end developers deal with the
                servers, while the full-stack developers deals with the behaviour as well as
                the servers.<br/>
                <strong>So what are you waiting for?</strong> <br/>
                Learn the best picked languages to become a full stack develper.               
            </Typography> 
            <Typography variant='h4'>
                    <StarIcon style={{ color: "orange" }} /> -- Highly recommended.
            </Typography> 
            <Typography variant='h4'>
                    <StarIcon style={{ color: "royalblue" }} /> -- Must learn.
            </Typography> 
            <br/>
            <Typography paragraph>
              <strong>For complete guide </strong> --- <a rel="noopener noreferrer" target='_blank' href='https://roadmap.sh'>Developer Roadmaps</a>
              <br/>
              
            </Typography>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
