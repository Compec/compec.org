import React from "react";
import { CardActions, Container, Grid, Paper, Typography, Button, Card, CardMedia, CardContent, CardActionArea } from '@material-ui/core';
import { db ,storage } from "../Services/firebase";
class MainPageEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            title: "",
            web:"",
            image:"",
            insta:"",
            detail:""
        };
    }

    componentDidMount() {
        const itemsRef = db.collection("2019-2020").doc("MainPage").collection("Events");
        itemsRef.onSnapshot(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            this.setState({ events: data });
            console.log(data);
        }

        );
    }

    handleChange(event) {
        this.setState({[event.target.id]:event.target.value });
       
    }

    handleSubmit(event) {
        const itemsRef = db.collection("2019-2020").doc("MainPage").collection("Events");
        itemsRef.add({
            title: this.state.title,
            web:this.state.web,
            image:this.state.image,
            insta:this.state.insta

        });
        alert('A name was submitted: '+this.state.title);
        event.preventDefault();
        this.setState({
                title: "",
                web:"",
                image:"",
                insta:"",
                detail:""
        });
    }

    upload(event){
        var storageRef = storage.ref();
        var imagesRef = storageRef.child('events');
        var fileName = this.state.title;
        var spaceRef = imagesRef.child(fileName);
        var path = spaceRef.fullPath;
        var name = spaceRef.name;
        var link="62";
        var self=this;
        console.log(event.target.files[0]);
        spaceRef.put(event.target.files[0]).then(function(snapshot) {
            console.log('Uploaded a blob or file!');
            alert("yüklendi");
            snapshot.ref.getDownloadURL().then(function(url) {
                self.setState({image:url});  
                console.log(url); 
            });
          });
        
    }

    render() {
        return (
            <div>
            <section>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    Name:
                <input type="text" value={this.state.title} id="title" onChange={this.handleChange.bind(this)} />
                </label>
                <label>
                web:
                <input type="text" value={this.state.web} id="web" onChange={this.handleChange.bind(this)} />
                </label>
                <label>
                image:
                <input type="file" id="image" onChange={this.upload.bind(this)} />
                </label>
                <label>
                insta:
                <input type="text" value={this.state.insta} id="insta" onChange={this.handleChange.bind(this)} />
                </label>
                <label>
                detail:
                <input type="text" value={this.state.detail} id="detail" onChange={this.handleChange.bind(this)} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <br/>
            </section>
            <Container>
            <Grid spacing="3" container>
                {this.state.events.map(event => (
                    <Grid item xs={6} sm={4} md={3} lg={2}>
                        <Card>
                            <CardMedia style={{height:"150px"}} image={event.image} title={event.title} />
                            
                                <h2>{event.title}</h2>
                                <p>{event.detail}</p>
                            <CardActions>
                                <Button href={event.web} size="small" color="primary">
                                    Etkinlik Sayfasına Git
                                </Button>
                                <Button href={event.insta} size="small" color="primary">
                                    Instagram
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            </Container>
            </div>
        );

    }
}

export default MainPageEvent;