import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import {Button , Segment} from 'semantic-ui-react'

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Checkbox,
  Grid,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";
import { blue, yellow } from "@material-ui/core/colors";
import StarIcon from "@material-ui/icons/Star";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import CodeIcon from "@material-ui/icons/Code";

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
  avatar: {
    backgroundColor: blue[500],
  },
  py: {
    backgroundColor: yellow[800],
  },
}));

const local_key = "python_like";
const localKey = "js_like";

export default function LanguageReviewCard() {
  const classes = useStyles();

  const [Pythonexpanded, setPythonExpanded] = useState(false);
  const [Javaexpanded, setJavaExpanded] = useState(false);
  
  const [like, setLike] = useState(false);
  const [javaLike, setJavaLike] = useState(false);

  // JavaScript LIKE
  useEffect(() => {
    const store_jslike = JSON.parse(localStorage.getItem(localKey));
    if (store_jslike) {
      setJavaLike(store_jslike);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(localKey, JSON.stringify(javaLike));
  });

  // PYTHON Like
  useEffect(() => {
    const store_like = JSON.parse(localStorage.getItem(local_key));
    if (store_like) {
      setLike(store_like);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(local_key, JSON.stringify(like));
  });

  const handleJavaLike = (event) => {
    setJavaLike(event.target.checked);
  };
  const handleLike = (event) => {
    setLike(event.target.checked);
  };

  const handleJavaExpandClick = (event) => {
    setJavaExpanded(!Javaexpanded);
  };

  const handlePythonExpandClick = () => {
    setPythonExpanded(!Pythonexpanded);
  };

  return (
    <div className="card">
      <h1 className="main-text">Top Languages</h1>
      <Grid container style={{maxWidth : '100%'}} spacing={4}>
        <Grid item xs={12} sm={6}>
          <Card style={{ margin: "0 auto" }} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar className={classes.py}>
                  <CodeIcon />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <StarIcon style={{ color: "orange" }} />
                </IconButton>
              }
              title="Python"
              subheader="Released in 1991"
            />

            <CardMedia
              className={classes.media}
              image="https://www.itl.cat/pngfile/big/259-2597329_coding-background-python-wallpaper.jpg"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Python is an interpreted, high-level, general-purpose
                programming language. This language constructs and
                object-oriented approach aim to help programmers write clear,
                logical code for small and large-scale projects.
                <br />
                <strong>Created by: Guido van Rossum</strong>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handleLike}
                      checked={like}
                    />
                  }
                  label="Like"
                />
              </FormGroup>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: Pythonexpanded,
                })}
                onClick={handlePythonExpandClick}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={Pythonexpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <strong>About:</strong>
                </Typography>
                <Typography paragraph>
                  Python is dynamically typed and garbage-collected. It supports
                  multiple programming paradigms, including structured
                  (particularly, procedural), object-oriented, and functional
                  programming.
                </Typography>
                <Typography paragraph>
                  Python is a beautiful language. It’s easy to learn and fun,
                  and its syntax (the rules) is clear and concise. Python is a
                  popular choice for beginners, yet still powerful enough to
                  back some of the world’s most popular products and
                  applications.
                  <a
                    href="https://www.python.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                </Typography>
                <Typography>
                  <strong>Companies using python:</strong>
                  <ul>
                    <li>Instagram</li>
                    <li>Google</li>
                    <li>Spotify</li>
                    <li>Netflix</li>
                    <li>Uber</li>
                    <li>Pinterest</li>
                  </ul>
                  <br />
                  <hr />
                  Watch a video tutorial!!
                  <br />
                  <Segment inverted>
                    <Button
                      href="https://www.youtube.com/watch?v=rfscVS0vtbw&t=13903s"
                      target="_blank"
                      inverted
                      color="blue"
                    >
                      Learn Python
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
                <Avatar className={classes.avatar}>
                  <DeveloperModeIcon />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <StarIcon style={{ color: "orange" }} />
                </IconButton>
              }
              title="JavaScript"
              subheader="Released in 1995"
            />

            <CardMedia
              className={classes.media}
              image="https://ncoughlin.com/wp-content/uploads/2018/10/js.png"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                JavaScript is high-level, often just-in-time compiled, and
                multi-paradigm. It has curly-bracket syntax, dynamic typing,
                prototype-based object-orientation, and first-class functions.
                JavaScript is one of the core technologies of the World Wide
                Web.
                <br />
                <strong>Created by: Brendan Eich</strong>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
            <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handleJavaLike}
                      checked={javaLike}
                    />
                  }
                  label="Like"
                />
              </FormGroup>

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: Javaexpanded,
                })}
                onClick={handleJavaExpandClick}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={Javaexpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <strong>About:</strong>
                </Typography>
                <Typography paragraph>
                  The vast majority of websites use it for client-side page
                  behavior, and all major web browsers have a dedicated
                  JavaScript engine to execute it.{" "}
                </Typography>
                <Typography paragraph>
                  As a multi-paradigm language, JavaScript supports
                  event-driven, functional, and imperative programming styles.
                  It has application programming interfaces (APIs) for working
                  with text, dates, regular expressions, standard data
                  structures, and the Document Object Model (DOM).
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Learn more
                  </a>
                </Typography>
                <Typography>
                  <strong>Companies using JavaScript:</strong>
                  <ul>
                    <li>Google</li>
                    <li>Netflix</li>
                    <li>Uber</li>
                    <li>Facebook</li>
                    <li>PayPal</li>
                    <li>eBay</li>
                  </ul>
                  <br />
                  <hr />
                  Watch a video tutorial!!
                  <br />
                  <Segment inverted>
                    <Button
                      href="https://www.youtube.com/watch?v=PkZNo7MFNFg&t=9600s"
                      target="_blank"
                      inverted
                      color="yellow"
                    >
                      Learn JS
                    </Button>
                  </Segment>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
