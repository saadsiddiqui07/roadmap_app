import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import {Button, Segment} from 'semantic-ui-react'
import {
  Card, FormGroup, FormControlLabel,Checkbox,
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
import { blue, red, lightBlue,  green } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import {FaReact} from 'react-icons/fa'
import {FaAngular} from 'react-icons/fa'
import {FaVuejs} from 'react-icons/fa'

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
  react: {
    backgroundColor: lightBlue[500],
  },
  angular:{
    backgroundColor : red[700]
  },
  vue:{
    backgroundColor : green[500]
  }
}));

const react_key = 'reactLike'
const angular_key = 'angularLike'
const vue_key = 'vueLike'
 
export default function FrameCard() {
  const classes = useStyles();

  const [reactExpanded, setReactExpanded] = useState(false);
  const [angularExpanded, setAngularExpanded] = useState(false);
  const [vueExpanded, setVueExpanded] = useState(false);

  const [reactLike, setReactLike] = useState(false)
  const [angularLike, setAngularLike] = useState(false)
  const [vueLike, setVueLike] = useState(false)

// REACT LIKE
  const handleReactLike = (event) => {
    setReactLike(event.target.checked)
  }
  useEffect(() => {
    const store_reactLike = JSON.parse(localStorage.getItem(react_key))
    if(store_reactLike){
      setReactLike(store_reactLike)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(react_key, JSON.stringify(reactLike))
  })

  // ANGULAR LIKE
  const handleAngularLike = (event) => {
    setAngularLike(event.target.checked)
  }
  useEffect(() => {
    const store_angularLike = JSON.parse(localStorage.getItem(angular_key))
    if(store_angularLike){
      setAngularLike(store_angularLike)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(angular_key, JSON.stringify(angularLike))
  })
  
  // VUE LIKE
  const handleVueLike = (event) => {
    setVueLike(event.target.checked)
  }
  useEffect(() => {
    const store_vueLike = JSON.parse(localStorage.getItem(vue_key))
    if(store_vueLike){
      setVueLike(store_vueLike)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(vue_key, JSON.stringify(vueLike))
  })
  

  const handleVueExpanded = () => {
    setVueExpanded(!vueExpanded);
  };

  const handleAngularExpanded = () => {
    setAngularExpanded(!angularExpanded);
  };

  const handleReactExpand = (event) => {
    setReactExpanded(!reactExpanded);
  };

  return (
    <div className="frontcard" >
      <h1 className="frame-text">Frameworks</h1>
      <h2 style={{ textAlign: "center" }}>JavaScript Front-End Frameworks</h2>
      <h4 style={{textAlign:'center', color:'darkblue'}}>(Pick one)</h4>
      <Grid container style={{maxWidth : '100%'}} spacing='auto'>
        <Grid item xs={12} sm={4}>
          <Card style={{ margin: "0 auto" }} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar className={classes.react}>
                  <FaReact />
                </Avatar>
              }
              action={
                <IconButton  aria-label="settings">
                  <StarIcon style={{color:'orange'}} />
                </IconButton>
              }
              title="React JS"
              subheader="Released on May 29 2013"
            />

            <CardMedia
              className={classes.media}
              image="https://www.freecodecamp.org/news/content/images/size/w2000/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                React (also known as React.js or ReactJS) is an open-source
                JavaScript library for building user interfaces. It is
                maintained by Facebook and a community of individual developers
                and companies.
                <br />
                <strong>Created by: Facebook and Community</strong>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
            <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handleReactLike}
                      checked={reactLike}
                    />
                  }
                  label="Like"
                />
              </FormGroup>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: reactExpanded,
                })}
                onClick={handleReactExpand}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={reactExpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <strong>About:</strong>
                </Typography>
                <Typography paragraph>
                  React. js is an open-source JavaScript library that is used
                  for building user interfaces specifically for single-page
                  applications. It's used for handling the view layer for web
                  and mobile apps. React also allows us to create reusable UI
                  components
                </Typography>
                <Typography paragraph>
                  React can be used as a base in the development of single-page
                  or mobile applications. However, React is only concerned with
                  rendering data to the DOM, and so creating React applications
                  usually requires the use of additional libraries for state
                  management and routing.
                  <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
                    Learn more.
                  </a>
                </Typography>
                <Typography>
                  <strong>Companies using React JS:</strong>
                  <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Spotify</li>
                    <li>Netflix</li>
                    <li>Dropbox</li>
                    <li>Yahoo</li>
                  </ul>
                  <br/><hr/>
                  Watch a video tutorial!!
                  <br />

                  <Segment inverted>
                    <Button
                      href="https://www.youtube.com/watch?v=DLX62G4lc44&t=16489s"
                      target="_blank"
                      inverted
                      color="blue"
                    >
                      Learn React
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
                <Avatar className={classes.angular}>
                  <FaAngular />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <StarIcon style={{color:'orange'}} />
                </IconButton>
              }
              title="Angular JS"
              subheader="Released in 2010"
            />

            <CardMedia
              className={classes.media}
              image="https://angular.io/assets/images/logos/angular/angular.png"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                AngularJS is a JavaScript-based open-source front-end web
                framework. The AngularJS framework works by first reading the
                HTML page, which has an additional
                custom HTML attributes embedded into it.
                <br />
                <strong>Created by: Google</strong>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
            <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handleAngularLike}
                      checked={angularLike}
                    />
                  }
                  label="Like"
                />
              </FormGroup>

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: angularExpanded,
                })}
                onClick={handleAngularExpanded}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={angularExpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <strong>About:</strong>
                </Typography>
                <Typography paragraph>
                  It aims to simplify both the development and the testing of
                  such applications by providing a framework for client-side
                  model–view–controller (MVC) and model–view–viewmodel (MVVM)
                  architectures, along with components commonly used in rich
                  Internet applications.
                </Typography>
                <Typography paragraph>
                  AngularJS is built on the belief that declarative programming
                  should be used to create user interfaces and connect software
                  components, while imperative programming is better suited to
                  defining an application's business logic.
                  <a href='https://docs.angularjs.org/guide/introduction' target="_blank" rel="noopener noreferrer" >Learn more.</a>
                </Typography>
                <Typography>
                  <strong>Companies using Angular JS:</strong>
                  <ul>
                    <li>Google</li>
                    <li>Udemy</li>
                    <li>Amazon</li>
                    <li>Lyft</li>
                    <li>Snapchat</li>
                  </ul>
                  <br/><hr/>
                  Watch a video tutorial!!
                  <br />

                  <Segment inverted>
                    <Button
                      href="https://www.youtube.com/watch?v=2OHbjep_WjQ"
                      target="_blank"
                      inverted
                      color="red"
                    >
                      Learn Angular
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
                <Avatar className={classes.vue}>
                  <FaVuejs />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <StarBorderIcon />
                </IconButton>
              }
              title="Vue JS"
              subheader="Released in 2014"
            />

            <CardMedia
              className={classes.media}
              image="https://cdn-media-1.freecodecamp.org/images/1*-8AAdexfOAK9R-AIha_PBQ.png"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                Vue JS is an open-source JavaScript
                framework for building user interfaces and single-page
                applications. Vue.js features an incrementally adaptable
                architecture that focuses on declarative rendering and component
                composition.
                <br />
                <strong>Created by: Evan You</strong>
              </Typography>
            </CardContent>

            <CardActions disableSpacing>
            <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      onChange={handleVueLike}
                      checked={vueLike}
                    />
                  }
                  label="Like"
                />
              </FormGroup>

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: vueExpanded,
                })}
                onClick={handleVueExpanded}
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>

            <Collapse in={vueExpanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>
                  <strong>About:</strong>
                </Typography>
                <Typography paragraph>
                  The core library is focused on the view layer only. Advanced
                  features required for complex applications such as routing,
                  state management and build tooling are offered via officially
                  maintained supporting libraries and packages.
                </Typography>
                <Typography paragraph>
                  Vue components extend basic HTML elements to encapsulate
                  reusable code. At a high level, components are custom elements
                  to which the Vue’s compiler attaches behavior. In Vue, a
                  component is essentially a Vue instance with pre-defined
                  options.
                  <a href='https://vuejs.org/' target='_blank' rel="noopener noreferrer" >Learn more.</a>
                </Typography>
                <Typography>
                  <strong>Companies using Vue JS:</strong>
                  <ul>
                    <li>Facebook</li>
                    <li>Netflix</li>
                    <li>Adobe</li>
                    <li>Alibaba</li>
                    <li>Gitlab</li>
                  </ul>
                  <br/><hr/>
                  Watch a video turorial !!<br/>
                  {/* <Button href='https://www.youtube.com/watch?v=4deVCNJq3qc' target="_blank" style={{color:'white', backgroundColor:'green'}}>Learn VueJS</Button> */}
                  <Segment inverted>
                    <Button
                      href="https://www.youtube.com/watch?v=4deVCNJq3qc"
                      target="_blank"
                      inverted
                      color="green"
                    >
                      Learn VueJS
                    </Button>
                  </Segment>               
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>
      <hr />
    </div>
  );
}
