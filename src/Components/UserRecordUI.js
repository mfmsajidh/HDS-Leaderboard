import React, {Component} from "react";
import axios from 'axios';
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import UserRecordStyle from "../Styles/UserRecordStyle";


class UserRecordUI extends Component {
    state = {
        //User 1
        id1 : "1",
        Name1 : "",
        Eat1 : "",
        count1 : "1",

        //User 2
        id2 : "2",
        Name2 : "",
        Eat2 : "",
        count2 : "2",

        //User 3
        id3 : "3",
        Name3 : "",
        Eat3 : "",
        count3 : "3",

        //User 4
        id4 : "5",
        Name4 : "",
        Eat4 : "",
        count4 : "4",

        //User 5
        id5 : "6",
        Name5 : "",
        Eat5 : "",
        count5 : "5",

        //User 6
        id6 : "12",
        Name6 : "",
        Eat6 : "",
        count6 : "6",

        //User 7
        id7 : "23",
        Name7 : "",
        Eat7 : "",
        count7 : "7",

        //User 8
        id8 : "32",
        Name8 : "",
        Eat8 : "",
        count8 : "8",

        //User 9
        id9 : "33",
        Name9 : "",
        Eat9 : "",
        count9 : "9",

        //User10
        id10 : "34",
        Name10 : "",
        Eat10 : "",
        count10 : "10",

        //User11
        id11 : "35",
        Name11 : "",
        Eat11 : "",
        count11 : "11",

        //User12
        id12 : "41",
        Name12 : "",
        Eat12 : "",
        count12 : "12",

        //User13
        id13 : "43",
        Name13 : "",
        Eat13 : "",
        count13 : "13",

        //User14
        id14 : "45",
        Name14 : "",
        Eat14 : "",
        count14 : "14",

        //User15
        id15 : "52",
        Name15 : "",
        Eat15 : "",
        count15 : "15",

        //User16
        id16 : "54",
        Name16 : "",
        Eat16 : "",
        count16 : "16",

        //User17
        id17 : "56",
        Name17 : "",
        Eat17 : "",
        count17 : "17",

        //User18
        id18 : "67",
        Name18 : "",
        Eat18 : "",
        count18 : "18",

    };

    //GET Requests
    getName1() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?id=${this.state.id1}`)
            .then(response => {
                    this.setState({
                        Name1 : response.data.Fname + " " + response.data.Lname
                    });
                    console.log("Name", this.state.Name1);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getEat1() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?firstR=1&id=${this.state.id1}`)
            .then(response => {
                    this.setState({
                        Eat1 : response.data.round_1
                    });
                    console.log("Eat", this.state.Eat1);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getName2() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?id=${this.state.id2}`)
            .then(response => {
                    this.setState({
                        Name2 : response.data.Fname + " " + response.data.Lname
                    });
                    console.log("Name", this.state.Name2);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getEat2() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?firstR=1&id=${this.state.id2}`)
            .then(response => {
                    this.setState({
                        Eat2 : response.data.round_1
                    });
                    console.log("Eat", this.state.Eat2);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getName3() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?id=${this.state.id3}`)
            .then(response => {
                    this.setState({
                        Name3 : response.data.Fname + " " + response.data.Lname
                    });
                    console.log("Name", this.state.Name3);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getEat3() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?firstR=1&id=${this.state.id3}`)
            .then(response => {
                    this.setState({
                        Eat3 : response.data.round_1
                    });
                    console.log("Eat", this.state.Eat3);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getName4() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?id=${this.state.id4}`)
            .then(response => {
                    this.setState({
                        Name4 : response.data.Fname + " " + response.data.Lname
                    });
                    console.log("Name", this.state.Name4);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getEat4() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?firstR=1&id=${this.state.id4}`)
            .then(response => {
                    this.setState({
                        Eat4 : response.data.round_1
                    });
                    console.log("Eat", this.state.Eat4);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getName5() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?id=${this.state.id5}`)
            .then(response => {
                    this.setState({
                        Name5 : response.data.Fname + " " + response.data.Lname
                    });
                    console.log("Name", this.state.Name5);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getEat5() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?firstR=1&id=${this.state.id5}`)
            .then(response => {
                    this.setState({
                        Eat5 : response.data.round_1
                    });
                    console.log("Eat", this.state.Eat5);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getName6() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?id=${this.state.id6}`)
            .then(response => {
                    this.setState({
                        Name6 : response.data.Fname + " " + response.data.Lname
                    });
                    console.log("Name", this.state.Name6);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getEat6() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?firstR=1&id=${this.state.id6}`)
            .then(response => {
                    this.setState({
                        Eat6 : response.data.round_1
                    });
                    console.log("Eat", this.state.Eat6);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getName7() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?id=${this.state.id7}`)
            .then(response => {
                    this.setState({
                        Name7 : response.data.Fname + " " + response.data.Lname
                    });
                    console.log("Name", this.state.Name7);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getEat7() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?firstR=1&id=${this.state.id7}`)
            .then(response => {
                    this.setState({
                        Eat7 : response.data.round_1
                    });
                    console.log("Eat", this.state.Eat7);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getName8() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?id=${this.state.id8}`)
            .then(response => {
                    this.setState({
                        Name8 : response.data.Fname + " " + response.data.Lname
                    });
                    console.log("Name", this.state.Name8);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getEat8() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?firstR=1&id=${this.state.id8}`)
            .then(response => {
                    this.setState({
                        Eat8 : response.data.round_1
                    });
                    console.log("Eat", this.state.Eat8);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getName9() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?id=${this.state.id9}`)
            .then(response => {
                    this.setState({
                        Name9 : response.data.Fname + " " + response.data.Lname
                    });
                    console.log("Name", this.state.Name9);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getEat9() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?firstR=1&id=${this.state.id9}`)
            .then(response => {
                    this.setState({
                        Eat9 : response.data.round_1
                    });
                    console.log("Eat", this.state.Eat9);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getName10() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?id=${this.state.id10}`)
            .then(response => {
                    this.setState({
                        Name10 : response.data.Fname + " " + response.data.Lname
                    });
                    console.log("Name", this.state.Name10);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getEat10() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?firstR=1&id=${this.state.id10}`)
            .then(response => {
                    this.setState({
                        Eat10 : response.data.round_1
                    });
                    console.log("Eat", this.state.Eat10);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getName11() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?id=${this.state.id11}`)
            .then(response => {
                    this.setState({
                        Name11 : response.data.Fname + " " + response.data.Lname
                    });
                    console.log("Name", this.state.Name11);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getEat11() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?firstR=1&id=${this.state.id11}`)
            .then(response => {
                    this.setState({
                        Eat11 : response.data.round_1
                    });
                    console.log("Eat", this.state.Eat11);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getName12() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?id=${this.state.id12}`)
            .then(response => {
                    this.setState({
                        Name12 : response.data.Fname + " " + response.data.Lname
                    });
                    console.log("Name", this.state.Name12);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getEat12() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?firstR=1&id=${this.state.id12}`)
            .then(response => {
                    this.setState({
                        Eat12 : response.data.round_1
                    });
                    console.log("Eat", this.state.Eat12);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getName13() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?id=${this.state.id13}`)
            .then(response => {
                    this.setState({
                        Name13 : response.data.Fname + " " + response.data.Lname
                    });
                    console.log("Name", this.state.Name13);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getEat13() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?firstR=1&id=${this.state.id13}`)
            .then(response => {
                    this.setState({
                        Eat13 : response.data.round_1
                    });
                    console.log("Eat", this.state.Eat13);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getName14() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?id=${this.state.id14}`)
            .then(response => {
                    this.setState({
                        Name14 : response.data.Fname + " " + response.data.Lname
                    });
                    console.log("Name", this.state.Name14);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getEat14() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?firstR=1&id=${this.state.id14}`)
            .then(response => {
                    this.setState({
                        Eat14 : response.data.round_1
                    });
                    console.log("Eat", this.state.Eat14);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getName15() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?id=${this.state.id15}`)
            .then(response => {
                    this.setState({
                        Name15 : response.data.Fname + " " + response.data.Lname
                    });
                    console.log("Name", this.state.Name15);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getEat15() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?firstR=1&id=${this.state.id15}`)
            .then(response => {
                    this.setState({
                        Eat15 : response.data.round_1
                    });
                    console.log("Eat", this.state.Eat15);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getName16() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?id=${this.state.id16}`)
            .then(response => {
                    this.setState({
                        Name16 : response.data.Fname + " " + response.data.Lname
                    });
                    console.log("Name", this.state.Name16);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getEat16() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?firstR=1&id=${this.state.id16}`)
            .then(response => {
                    this.setState({
                        Eat16 : response.data.round_1
                    });
                    console.log("Eat", this.state.Eat16);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getName17() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?id=${this.state.id17}`)
            .then(response => {
                    this.setState({
                        Name17 : response.data.Fname + " " + response.data.Lname
                    });
                    console.log("Name", this.state.Name17);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getEat17() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?firstR=1&id=${this.state.id17}`)
            .then(response => {
                    this.setState({
                        Eat17 : response.data.round_1
                    });
                    console.log("Eat", this.state.Eat17);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getName18() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?id=${this.state.id18}`)
            .then(response => {
                    this.setState({
                        Name18 : response.data.Fname + " " + response.data.Lname
                    });
                    console.log("Name", this.state.Name18);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    getEat18() {
        axios
            .get(`https://rciit.org/hdscounter/assets/fonts/randomFonts/hdsapi.php?firstR=1&id=${this.state.id18}`)
            .then(response => {
                    this.setState({
                        Eat18 : response.data.round_1
                    });
                    console.log("Eat", this.state.Eat18);
                }
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidMount() {
        this.getName1();
        this.getEat1();

        this.getName2();
        this.getEat2();

        this.getName3();
        this.getEat3();

        this.getName4();
        this.getEat4();

        this.getName5();
        this.getEat5();

        this.getName6();
        this.getEat6();

        this.getName7();
        this.getEat7();

        this.getName8();
        this.getEat8();

        this.getName9();
        this.getEat9();

        this.getName10();
        this.getEat10();

        this.getName11();
        this.getEat11();

        this.getName12();
        this.getEat12();

        this.getName13();
        this.getEat13();

        this.getName14();
        this.getEat14();

        this.getName15();
        this.getEat15();

        this.getName16();
        this.getEat16();

        this.getName17();
        this.getEat17();

        this.getName18();
        this.getEat18();

        setInterval(() => {
            console.log('Timer Calling',);
            this.getEat1();
            this.getEat2();
            this.getEat3();
            this.getEat4();
            this.getEat5();
            this.getEat6();
            this.getEat7();
            this.getEat8();
            this.getEat9();
            this.getEat10();
            this.getEat11();
            this.getEat12();
            this.getEat13();
            this.getEat14();
            this.getEat15();
            this.getEat16();
            this.getEat17();
            this.getEat18();
        }, 500);

    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className={"split left"}>
                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={0}>
                            <Grid container wrap="nowrap" spacing={16}>
                                <Grid item>
                                    <Avatar className={classes.orangeAvatar}>{this.state.count1}</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant={"h4"} color={"textPrimary"}>{this.state.Name1}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"h4"} color={"textPrimary"}><i className='fas fa-hotdog'/> {this.state.Eat1}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={0}>
                            <Grid container wrap="nowrap" spacing={16}>
                                <Grid item>
                                    <Avatar className={classes.orangeAvatar}>{this.state.count2}</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant={"h4"} color={"textPrimary"}>{this.state.Name2}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"h4"} color={"textPrimary"}><i className='fas fa-hotdog'/> {this.state.Eat2}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={0}>
                            <Grid container wrap="nowrap" spacing={16}>
                                <Grid item>
                                    <Avatar className={classes.orangeAvatar}>{this.state.count3}</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant={"h4"} color={"textPrimary"}>{this.state.Name3}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"h4"} color={"textPrimary"}><i className='fas fa-hotdog'/> {this.state.Eat3}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={0}>
                            <Grid container wrap="nowrap" spacing={16}>
                                <Grid item>
                                    <Avatar className={classes.orangeAvatar}>{this.state.count4}</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant={"h4"} color={"textPrimary"}>{this.state.Name4}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"h4"} color={"textPrimary"}><i className='fas fa-hotdog'/> {this.state.Eat4}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={0}>
                            <Grid container wrap="nowrap" spacing={16}>
                                <Grid item>
                                    <Avatar className={classes.orangeAvatar}>{this.state.count5}</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant={"h4"} color={"textPrimary"}>{this.state.Name5}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"h4"} color={"textPrimary"}><i className='fas fa-hotdog'/> {this.state.Eat5}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={0}>
                            <Grid container wrap="nowrap" spacing={16}>
                                <Grid item>
                                    <Avatar className={classes.orangeAvatar}>{this.state.count6}</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant={"h4"} color={"textPrimary"}>{this.state.Name6}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"h4"} color={"textPrimary"}><i className='fas fa-hotdog'/> {this.state.Eat6}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={0}>
                            <Grid container wrap="nowrap" spacing={16}>
                                <Grid item>
                                    <Avatar className={classes.orangeAvatar}>{this.state.count7}</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant={"h4"} color={"textPrimary"}>{this.state.Name7}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"h4"} color={"textPrimary"}><i className='fas fa-hotdog'/> {this.state.Eat7}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={0}>
                            <Grid container wrap="nowrap" spacing={16}>
                                <Grid item>
                                    <Avatar className={classes.orangeAvatar}>{this.state.count8}</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant={"h4"} color={"textPrimary"}>{this.state.Name8}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"h4"} color={"textPrimary"}><i className='fas fa-hotdog'/> {this.state.Eat8}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={0}>
                            <Grid container wrap="nowrap" spacing={16}>
                                <Grid item>
                                    <Avatar className={classes.orangeAvatar}>{this.state.count9}</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant={"h4"} color={"textPrimary"}>{this.state.Name9}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"h4"} color={"textPrimary"}><i className='fas fa-hotdog'/> {this.state.Eat9}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={0}>
                            <Grid container wrap="nowrap" spacing={16}>
                                <Grid item>
                                    <Avatar className={classes.orangeAvatar}>{this.state.count10}</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant={"h4"} color={"textPrimary"}>{this.state.Name10}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"h4"} color={"textPrimary"}><i className='fas fa-hotdog'/> {this.state.Eat10}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={0}>
                            <Grid container wrap="nowrap" spacing={16}>
                                <Grid item>
                                    <Avatar className={classes.orangeAvatar}>{this.state.count11}</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant={"h4"} color={"textPrimary"}>{this.state.Name11}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"h4"} color={"textPrimary"}><i className='fas fa-hotdog'/> {this.state.Eat11}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={0}>
                            <Grid container wrap="nowrap" spacing={16}>
                                <Grid item>
                                    <Avatar className={classes.orangeAvatar}>{this.state.count12}</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant={"h4"} color={"textPrimary"}>{this.state.Name12}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"h4"} color={"textPrimary"}><i className='fas fa-hotdog'/> {this.state.Eat12}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={0}>
                            <Grid container wrap="nowrap" spacing={16}>
                                <Grid item>
                                    <Avatar className={classes.orangeAvatar}>{this.state.count13}</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant={"h4"} color={"textPrimary"}>{this.state.Name13}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"h4"} color={"textPrimary"}><i className='fas fa-hotdog'/> {this.state.Eat13}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={0}>
                            <Grid container wrap="nowrap" spacing={16}>
                                <Grid item>
                                    <Avatar className={classes.orangeAvatar}>{this.state.count14}</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant={"h4"} color={"textPrimary"}>{this.state.Name14}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"h4"} color={"textPrimary"}><i className='fas fa-hotdog'/> {this.state.Eat14}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={0}>
                            <Grid container wrap="nowrap" spacing={16}>
                                <Grid item>
                                    <Avatar className={classes.orangeAvatar}>{this.state.count15}</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant={"h4"} color={"textPrimary"}>{this.state.Name15}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"h4"} color={"textPrimary"}><i className='fas fa-hotdog'/> {this.state.Eat15}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={0}>
                            <Grid container wrap="nowrap" spacing={16}>
                                <Grid item>
                                    <Avatar className={classes.orangeAvatar}>{this.state.count16}</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant={"h4"} color={"textPrimary"}>{this.state.Name16}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"h4"} color={"textPrimary"}><i className='fas fa-hotdog'/> {this.state.Eat16}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={0}>
                            <Grid container wrap="nowrap" spacing={16}>
                                <Grid item>
                                    <Avatar className={classes.orangeAvatar}>{this.state.count17}</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant={"h4"} color={"textPrimary"}>{this.state.Name17}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"h4"} color={"textPrimary"}><i className='fas fa-hotdog'/> {this.state.Eat17}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                    <div className={classes.root}>
                        <Paper className={classes.paper} elevation={0}>
                            <Grid container wrap="nowrap" spacing={16}>
                                <Grid item>
                                    <Avatar className={classes.orangeAvatar}>{this.state.count18}</Avatar>
                                </Grid>
                                <Grid item xs>
                                    <Typography variant={"h4"} color={"textPrimary"}>{this.state.Name18}</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant={"h4"} color={"textPrimary"}><i className='fas fa-hotdog'/> {this.state.Eat18}</Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>

                </div>
            </div>
        )
    }

}

UserRecordUI.propTypes = {
    classes:PropTypes.object.isRequired
};

export default withStyles(UserRecordStyle)(UserRecordUI);