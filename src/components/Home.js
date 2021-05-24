import React, { Component } from 'react'

export class Home extends Component {

    render() {
        return (
            <div className="wrapper">
                <div className="app-container shadow-lg">
                    <form id="form">
                        <div className="max-w-sm">
                            <input id="location" className="form-control" type="text" placeholder="Enter city..." />
                            <button type="submit" className="btn btn-primary">Submit Query</button>
                        </div>
                    </form>

                    <div className="result">
                        <span className="result-text" id="city"></span>
                        <span> : </span>
                        <span className="result-text" id="weather-condition"></span>

                        <br />
                        <span className="result-text">Temperature: </span>
                        <span className="result-text" id="temp">-</span>
                        <span className="result-text">°F</span>

                        <br />
                        <span className="result-text">Coord: </span>
                        <span className="result-text" id="coord">-</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
