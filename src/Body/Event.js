import React from 'react';


class Event extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            detail: true
            , del: false,
            src:"https://i.snag.gy/UmN3Gf.jpg"

        };


    }

    show() {
        this.setState({
            detail: !this.state.detail
        });

    }
    dislike() {
        this.setState({ del: true });

    }

    change(){
        this.setState({src:this.state.src==="https://source.unsplash.com/random"?"https://source.unsplash.com/daily":"https://source.unsplash.com/random"});


    }

    render() {
        return (
            <div class="   text-center" hidden={this.state.del}>

                <div class="text-monospace">
                    {/* <div class="card"> */}
                    {/* <div class="card-header">
                            
                        </div> */}
                    {/* <div class="card-body"> */}
                    {/* <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    <img onMouseOut={this.change.bind(this)}  onMouseOver={this.change.bind(this)} hidden={!this.state.detail} onClick={this.dislike.bind(this)}
                     src={this.state.src} alt="team"
                     class="  rounded-circle img-fluid"></img>

                    {/* </div> */}
                    <h4 class=" text-monospace ">{this.props.name}
                    </h4>
                    <h5>{this.props.resp}</h5>
                    <div class="card-footer text-muted w-100  align-items-center bg-transparent">
                        <button type="button" class="btn btn-sm rounded rounded-circle">Mail</button>
                        <button type="button" class="btn btn-sm rounded rounded-circle">Telefon</button>
                        <button type="button" class="btn btn-sm rounded rounded-circle">Linkedin</button>
                        <button onClick={this.show.bind(this)} type="button" class="btn btn-sm rounded rounded-circle">Hakkında</button>
                    </div>
                    <div class="card card-body" hidden={this.state.detail}>
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
                    {/* </div> */}
                    <br />
                </div>









            </div>
        );



    }

}

// add Firebase firestore database
export default Event;