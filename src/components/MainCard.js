import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Button, Segment } from "semantic-ui-react";
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
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import { blue, yellow, red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import StarIcon from "@material-ui/icons/Star";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Favorite from "@material-ui/icons/Favorite";

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
  html: {
    backgroundColor: red[800],
  },
  css: {
    backgroundColor: blue[500],
  },
  js: {
    backgroundColor: yellow[600],
  },
}));

const html_key = "htmlLike";
const css_key = "cssLike";
const js_key = "jsLike";

export default function MainCard() {
  const classes = useStyles();

  const [htmlExpanded, setHtmlExpanded] = useState(false);
  const [cssExpanded, setCssExpanded] = useState(false);
  const [jsExpand, setJsExpanded] = useState(false);

  const [htmlLike, setHtmlLike] = useState(false);
  const [cssLike, setCssLike] = useState(false);
  const [jsLike, setJsLike] = useState(false);

  //HTML
  const handleHtmlLike = (event) => {
    setHtmlLike(event.target.checked);
  };
  useEffect(() => {
    const store_htmlLike = JSON.parse(localStorage.getItem(html_key));
    if (store_htmlLike) {
      setHtmlLike(store_htmlLike);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(html_key, JSON.stringify(htmlLike));
  });

  //CSS
  const handleCssLike = (event) => {
    setCssLike(event.target.checked);
  };
  useEffect(() => {
    const store_csslike = JSON.parse(localStorage.getItem(css_key));
    if (store_csslike) {
      setCssLike(store_csslike);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(css_key, JSON.stringify(cssLike));
  });

  //JAVASCRIPT LIKE
  const handleJsLike = (event) => {
    setJsLike(event.target.checked);
  };
  useEffect(() => {
    const store_jslike = JSON.parse(localStorage.getItem(js_key));
    if (store_jslike) {
      setJsLike(store_jslike);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(js_key, JSON.stringify(jsLike));
  });

  const handleJsExpandClick = () => {
    setJsExpanded(!jsExpand);
  };

  const handleHtmlExpandClick = (event) => {
    setHtmlExpanded(!htmlExpanded);
  };

  const handleCssExpandClick = () => {
    setCssExpanded(!cssExpanded);
  };

  return (
    <div className="maincard">
      <br/>
      <h1 className="text">
        Start with <strong>HTML, CSS & JavaScript</strong>
      </h1>
      <Grid container  style={{ maxWidth: "100%" }} spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card style={{ margin: "0 auto" }} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar className={classes.html}>
                  <AiOutlineHtml5 />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <StarIcon style={{ color: "royalblue" }} />
                </IconButton>
              }
              title="HTML"
              subheader="Released in 1991"
            />

            <CardMedia
              className={classes.media}
              image="https://ih1.redbubble.net/image.542873620.9580/st,small,845x845-pad,1000x1000,f8f8f8.u2.jpg"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Hypertext Markup Language (HTML) is the standard markup language
                for documents designed to be displayed in a web browser. Web
                browsers receive HTML documents from a web server or from local
                storage and render the documents into multimedia web pages.
                <br />
                <strong>Created by a community: WHATWAG</strong>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handleHtmlLike}
                      checked={htmlLike}
                    />
                  }
                  label="Like"
                />
              </FormGroup>

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: htmlExpanded,
                })}
                onClick={handleHtmlExpandClick}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={htmlExpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <strong>About:</strong>
                </Typography>
                <Typography paragraph>
                  HTML describes the structure of a web page semantically and
                  originally included cues for the appearance of the document.
                  programming. HTML elements are the building blocks of HTML
                  pages.
                </Typography>
                <Typography paragraph>
                  With HTML constructs, images and other objects such as
                  interactive forms may be embedded into the rendered page. HTML
                  provides a means to create structured documents by denoting
                  structural semantics for text such as headings, paragraphs,
                  lists, links, quotes and other items.
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                  </a>
                </Typography>
                <Typography>
                  <br />
                  <hr />
                  Watch a video tutorial!!
                  <br />

                  <Segment inverted>
                    <Button
                      href="https://www.youtube.com/watch?v=pQN-pnXPaVg&t=6642s"
                      target="_blank"
                      inverted
                      color="red"
                    >
                      Learn HTML
                    </Button>
                  </Segment>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card style={{ margin: "0 auto" }} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar className={classes.css}>
                  <FaCss3Alt />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <StarIcon style={{ color: "royalblue" }} />
                </IconButton>
              }
              title="Cascading Style Sheets (CSS)"
              subheader="Released in 1996"
            />

            <CardMedia
              className={classes.media}
              image="https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Cascading Style Sheets (CSS) is a style sheet language used for
                describing the presentation of a document written in a markup
                language like HTML. CSS is a cornerstone technology of the World
                Wide Web, alongside HTML and JavaScript.
                <br />
                <strong>Created by: Håkon Wium Lie</strong>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handleCssLike}
                      checked={cssLike}
                    />
                  }
                  label="Like"
                />
              </FormGroup>

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: cssExpanded,
                })}
                onClick={handleCssExpandClick}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={cssExpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <strong>About:</strong>
                </Typography>
                <Typography paragraph>
                  CSS is designed to enable the separation of presentation and
                  content, including layout, colors, and fonts.
                </Typography>
                <Typography paragraph>
                  This separation can improve content accessibility, provide
                  more flexibility and control in the specification of
                  presentation characteristics, enable multiple web pages to
                  share formatting by specifying the relevant CSS in a separate
                  .css file, and reduce complexity and repetition in the
                  structural content.
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Learn more
                  </a>
                </Typography>
                <Typography>
                  <br />
                  <hr />
                  Watch a video tutorial!!
                  <br />
                  {/* <Button
                    style={{ color: "black", backgroundColor: "lightBlue" }}
                    variant="contained"
                    href="https://www.youtube.com/watch?v=1Rs2ND1ryYc&t=1961s"
                    target="_blank"
                  >
                    Learn CSS
                  </Button> */}
                  <Segment inverted>
                    <Button href="https://www.youtube.com/watch?v=1Rs2ND1ryYc&t=1961s" target="_blank" inverted color="blue">
                      Learn CSS
                    </Button>
                  </Segment>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card style={{ margin: "0 auto" }} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar className={classes.js}>
                  <DiJavascript />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <StarIcon style={{ color: "royalblue" }} />
                </IconButton>
              }
              title="JavaScript"
              subheader="For front-end"
            />

            <CardMedia
              className={classes.media}
              image="https://synergyframeworks.com/wp-content/uploads/2017/05/javascript-logo.png"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                A front-end web developer’s role is to create the code and
                mark-up that is rendered by a web browser when you visit a site.
                There are three main components when it comes to front-end
                development: HTML, CSS and JavaScript.
                <br />
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handleJsLike}
                      checked={jsLike}
                    />
                  }
                  label="Like"
                />
              </FormGroup>

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: jsExpand,
                })}
                onClick={handleJsExpandClick}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={jsExpand} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <strong>About:</strong>
                </Typography>
                <Typography paragraph>
                  Each are critical for making a webpage what it is. HTML is the
                  structure and content of the site, CSS (Cascading Style
                  Sheets) makes it look pretty, and, lastly, JavaScript is what
                  powers its interactivity. Each work hand-in-hand when it comes
                  to building websites, but the focus of this blog post is on
                  JavaScript and how it’s used.
                </Typography>
                <Typography paragraph>
                  JavaScript is a very powerful tool that can do many things for
                  a website. For one, it powers the site’s general
                  interactivity. JavaScript makes it possible to build rich UI
                  components such as image sliders, pop-ups, site navigation
                  mega menus, form validations, tabs, accordions, and much more.
                  <a
                    href="https://www.hilemangroup.com/Thought-Leadership/Hilelights-Blog/JavaScript-and-Front-end-Development"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Learn more
                  </a>
                </Typography>
                <Typography>
                  <br />
                  <hr />
                  Watch a video tutorial!!
                  <br />
                  {/* <Button
                    style={{ color: "black", backgroundColor: "yellow" }}
                    variant="contained"
                    href="https://www.youtube.com/watch?v=W6NZfCO5SIk&t=1175s"
                    target="_blank"
                  >
                    Learn JS
                  </Button> */}
                  <Segment inverted>
                    <Button href="https://www.youtube.com/watch?v=W6NZfCO5SIk&t=1175s "target="_blank" inverted color="yellow">
                      Learn JavaScript
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
