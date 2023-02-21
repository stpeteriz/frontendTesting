import React from 'react';



class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }
    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }
    onSubmitRegister = () => {
        fetch('https://backendpractice-production.up.railway.app/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            })
        })
            .then(response => response.json())
            .then(user => { //if we get a user we will route change
                if (user.id) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('signin');
                } 
            })

    }
    render(){
        return (
            <article className="other light-gray br3 shadow-5 ba b--white-10 mv6 w-100 w-50-m w-25-l mw6 center">
            <main className="pa4">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input 
                            className="otherForm pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" 
                            name="name" 
                            id="name"
                            onChange={this.onNameChange}/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                            className="otherForm pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address" 
                            id="email-address"
                            onChange={this.onEmailChange}/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                            className="otherForm b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password" 
                            id="password"
                            onChange={this.onPasswordChange}/>
                        </div>
                    </fieldset>
                    <div className="">
                        <button 
                        className="b ph3 pv2 input-reset ba b--light-gray bg-transparent grow pointer f6 dib" 
                        onClick={this.onSubmitRegister} 
                        type="button">
                            <em className='light-gray'>Register</em></button>
                    </div>
                </div>
            </main>
            </article>
        )
    }
}

export default Register;