import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";
import { GrNode } from "react-icons/gr";
import { Button, Segment } from "semantic-ui-react";

import {
  Checkbox,
  Card,
  FormGroup,
  FormControlLabel,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Grid,
} from "@material-ui/core";
import { lightBlue, blueGrey, green } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StarIcon from "@material-ui/icons/Star";
import { IoLogoJavascript } from "react-icons/io";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 305,

  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  dj: {
    backgroundColor: green[500],
  },
  fl: {
    backgroundColor: blueGrey[500],
  },
  exp: {
    backgroundColor: lightBlue[400],
  },
}));

const node_key = "nodeLike";
const exp_key = "expLike";

export default function BackFrameCard() {
  const classes = useStyles();

  const [nodeExpanded, setNodeExpanded] = useState(false);
  const [expExpanded, setExpExpanded] = useState(false);

  const [nodeLike, setNodeLike] = useState(false);
  const [expLike, setExpLike] = useState(false);

  // NODE LIKE
  const handleNodeLike = (event) => {
    setNodeLike(event.target.checked);
  };

  useEffect(() => {
    const store_nodeLike = JSON.parse(localStorage.getItem(node_key));
    if (store_nodeLike) {
      setNodeLike(store_nodeLike);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(node_key, JSON.stringify(nodeLike));
  });

  // EXPRESS JS LIKE
  const handleExpLike = (event) => {
    setExpLike(event.target.checked);
  };

  useEffect(() => {
    const store_expLike = JSON.parse(localStorage.getItem(exp_key));
    if (store_expLike) {
      setExpLike(store_expLike);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(exp_key, JSON.stringify(expLike));
  });

  const handleNodeExpandClick = () => {
    setNodeExpanded(!nodeExpanded);
  };

  const handleExpExpandClick = () => {
    setExpExpanded(!expExpanded);
  };

  return (
    <div className="backcard">
      <h1 className="back-text">JavaScript Back-End Frameworks</h1>
      <h4 style={{ textAlign: "center", alignItems: "center", color: "blue" }}>
        (First learn <strong>Node.js</strong> then <strong>Express</strong>)
      </h4>
      <Grid container style={{ maxWidth: "100%" }} spacing={4}>
        <Grid item xs={12} sm={6}>
          <Card style={{ margin: "0 auto" }} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar className={classes.dj}>
                  <GrNode />
                </Avatar>
              }
              action={
                <IconButton>
                  <StarIcon style={{ color: "orange" }} />
                </IconButton>
              }
              title="Node JS"
              subheader="Released in 2009"
            />
            <CardMedia
              className={classes.media}
              image="https://www.techaroha.com/wp-content/uploads/2018/06/BEEVA-nodejs-1200x565-1.jpg"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Node.js is an open-source, cross-platform, JavaScript runtime
                environment that executes JavaScript code outside a web browser.
                Node.js lets developers use JavaScript to write command line
                tools and for server-side scripting—running scripts server-side
                to produce dynamic web page content before the page is sent to
                the user's web browser.
                <br />
                <strong>Created by: Ryan Dahl</strong>
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handleNodeLike}
                      checked={nodeLike}
                    />
                  }
                  label="Like!"
                />
              </FormGroup>

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: nodeExpanded,
                })}
                onClick={handleNodeExpandClick}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={nodeExpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <strong>About:</strong>
                </Typography>
                <Typography paragraph>
                  Consequently, Node.js represents a "JavaScript everywhere"
                  paradigm, unifying web-application development around a single
                  programming language, rather than different languages for
                  server- and client-side scripts.
                </Typography>
                <Typography paragraph>
                  Node.js has an event-driven architecture capable of
                  asynchronous I/O. These design choices aim to optimize
                  throughput and scalability in web applications with many
                  input/output operations, as well as for real-time Web
                  applications (e.g., real-time communication programs and
                  browser games).
                  <a
                    href="https://nodejs.dev/learn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more.
                  </a>
                </Typography>
                <Typography>
                  <strong>Companies using Node:</strong>
                  <ul>
                    <li>Netflix</li>
                    <li>Likesin</li>
                    <li>Uber</li>
                    <li>PayPal</li>
                    <li>eBay</li>
                    <li>NASA</li>
                  </ul>
                  <br />
                  <hr />
                  Watch a video tutorial !!
                  <br />
                  <Segment inverted>
                    <Button
                      target="_blank"
                      inverted
                      color="green"
                      href="https://www.youtube.com/watch?v=RLtyhwFtXQA&t=1609s"
                    >
                      Learn Node
                    </Button>
                  </Segment>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card style={{ margin: "0 auto" }} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar className={classes.fl}>
                  <IoLogoJavascript />
                </Avatar>
              }
              action={
                <IconButton>
                  <StarIcon style={{ color: "orange" }} />
                </IconButton>
              }
              title="Express JS"
              subheader="Released in 2010"
            />
            <CardMedia
              className={classes.media}
              image="https://w0.pngwave.com/png/545/451/node-js-express-js-javascript-solution-stack-web-application-others-png-clip-art.png"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Express, is a web application framework for Node.js, released as
                free and open-source software under the MIT License. It is
                designed for building web applications and APIs.
                <br />
                <strong>Created by: TJ Holowaychuk,</strong>
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handleExpLike}
                      checked={expLike}
                    />
                  }
                  label="Like"
                />
              </FormGroup>

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expExpanded,
                })}
                onClick={handleExpExpandClick}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={expExpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <strong>About:</strong>
                </Typography>
                <Typography paragraph>
                  It has been called the de facto standard server framework for
                  Node.js.
                </Typography>
                <Typography paragraph>
                  Express is the back-end component of the MEAN stack, together
                  with the MongoDB database software and AngularJS front-end
                  framework.
                  <a
                    href="https://expressjs.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more.
                  </a>
                </Typography>
                <Typography>
                  <strong>Companies using Express JS:</strong>
                  <ul>
                    <li>Twitter</li>
                    <li>Mytra</li>
                    <li>Uber</li>
                    <li>accenture</li>
                    <li>IBM</li>
                  </ul>
                  <br />
                  <hr />
                  Watch a video tutorial !!
                  <br />
                  <Segment inverted>
                    <Button
                      target="_blank"
                      inverted
                      color="teal"
                      href="https://www.youtube.com/watch?v=L72fhGm1tfE&t=2058s"
                    >
                      Learn Express
                    </Button>
                  </Segment>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
      <br />
    </div>
  );
}
