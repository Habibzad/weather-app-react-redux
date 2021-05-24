import React, { Component } from 'react'
import 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand >Weather App</Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}

export default Navigation
