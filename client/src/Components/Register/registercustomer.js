import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import history from '../../history';
const Background = require("../images/particles4.jpg");
const BackgroundWhole = require("../images/particles3.jpg");

var Style = {
	className: "img-fluid",
	backgroundImage: `url(${Background})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: '100% 100%'
};

var StyleWhole = {
	className: "img-fluid",
	backgroundImage: `url(${BackgroundWhole})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: '100% 100%'
};

class Registercomp extends Component {
    constructor(props){
        super(props);
        this.state={
            first_name: '',
            last_name: '',
            email: '',
            address: '',
            mobile: '',
            password1: '',
            password2: '',
            show1: false,
            error: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            address: this.state.address,
            mobile: this.state.mobile,
            password1: this.state.password1,
            password2: this.state.password2,
          };

        fetch("http://localhost:5000/customer/register", {
            method: "POST",
            headers: {
                Accept: 'application/json','Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        }).then( res => {
            if(res.status === 200) {
                history.push('/Customer/Login');
            }
            else if(res.status === 401) {
                this.setState({show1:true, error: 'invalid credentials'});
            }
            else {
                this.setState({show1:true, error: 'password should match'});
            }

        }).catch( err => {
            console.log(err);
        });
    };
    render() {
        return (
            <div>
				<section className="container-fluid" style={StyleWhole}>
					<div style={{ height: '70px' }}>

					</div>

					<div className="row">
						<div className="col-1">
						</div>
						<div className="col-10" style={{backgroundColor:'white'}}>
							<div style={{height:'30px'}}>
							</div>
							<Button size="large" disabled>
                				<h2 style={{fontFamily:'Courier New', textAlign:'center', color:'#031dad', fontWeight:'bold', verticalAlign:'middle'}}>
                    				Welcome to Shopping Cart.
                				</h2>
                    		</Button>
						</div>
						<div className="col-1">
						</div>
					</div>

					<div className="row">
						<div className="col-1">
						</div>

						<div className="col-1" style={{backgroundColor:'white'}}>
						</div>

						<div className="col-3" style={Style}>
						</div>

						<div className="col-2" style={{backgroundColor:'white'}}>
						</div>

						<div className="col-3" style={{backgroundColor:'white'}}>
							<div style={{ height: '30px' }}>
							</div>
							<Button size="large" disabled>
                				<h2 style={{fontFamily:'Courier New', textAlign:'center', color:'#031dad', fontWeight:'bold'}}>
                    				Register.
                				</h2>
                    		</Button>

                            <div style={{ height: '30px' }}>
							</div>
						
							<form onSubmit={this.handleSubmit}> 
                            <TextField
                                id="first"
                                label="first Name"
                                variant="outlined"
                                autoFocus
                                required
                                fullWidth
                                onChange = {(event) => this.setState({first_name: event.target.value})}
                            />
                            <div style={{height:'30px' }}> 
                            </div>
                            <TextField
                                id="last"
                                label="last Name"
                                variant="outlined"
                                required
                                fullWidth
                                onChange = {(event) => this.setState({last_name: event.target.value})}
                            />
                            <div style={{height:'30px' }}> 
                            </div>
                            <TextField
                                id="email"
                                label="email"
                                variant="outlined"
                                required
                                fullWidth
                                onChange = {(event) => this.setState({email: event.target.value})}
                            />
                            <div style={{height:'30px' }}> 
                            </div>
                            <TextField
                                id="address"
                                label="address"
                                variant="outlined"
                                required
                                fullWidth
                                onChange = {(event) => this.setState({address: event.target.value})}
                            />
                            <div style={{height:'30px' }}> 
                            </div>
                            <TextField
                                id="mobile"
                                label="mobile number"
                                variant="outlined"
                                required
                                fullWidth
                                onChange = {(event) => this.setState({mobile: event.target.value})}
                            />
                            <div style={{height:'30px' }}> 
                            </div>
                            <TextField
                                id="password1"
                                label="Password"
                                type="password"
                                variant="outlined"
                                required
                                fullWidth
                                onChange = {(event) => this.setState({password1: event.target.value})}
                            />
                            <div style={{height:'30px' }}> 
                            </div>
                            <TextField
                                id="password2"
                                label="Password"
                                type="password"
                                variant="outlined"
                                required
                                fullWidth
                                onChange = {(event) => this.setState({password2: event.target.value})}
                            />
                            <div style={{height:'50px' }}> 
                            </div>
                            <Button color="primary" size="large" variant="contained" type="submit">
                    	        Register
                            </Button>
                        </form>
							{/* <div style={{ height: '50px' }}>
							</div> */}
						</div>

						<div className="col-1" style={{backgroundColor:'white'}}>
						</div>

						<div className="col-1">
						</div>
					</div>

					<div className="row">
						<div className="col-1">
						</div>
						<div className="col-10" style={{height:'70px', backgroundColor:'white'}}>
                            {this.state.show1 && <div style={{fontSize:'50px', color:'red'}}> 
								<h2 style={{fontFamily:'Courier New', textAlign:'center', fontWeight:'bold'}}>
									{this.state.error} 
								</h2>
							</div>}
						</div>
						<div className="col-1">
						</div>
					</div>

					<div style={{ height: '100px' }}>

					</div>
				</section>
			</div>

        );
    }
}

export default Registercomp;