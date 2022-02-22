import React, { Component } from "react";
import PropTypes from 'prop-types';
import { getUUID, getName } from "../api/localstorage";
import {startConversion, downloadPackage} from "../api/index";

class Actions extends Component {
    constructor(props) {
        super(props);
    
        this.uuid = getUUID();
        this.name = getName();

        this.isConverted = false;

      }

    render() {
        let charPerSec = (this.props.totalCharLen / this.props.totalTime).toFixed(1);
        charPerSec = isNaN(charPerSec) ? 0 : charPerSec;
        return (
            <div className="actions-container">
                <div>
                    <center>
                        <a
                            className={`btn ${
                                this.isConverted
                                ? "btn-disabled"
                                : 'btn-next'
                            }`}
                            href="#"
                            onClick={this.convert}
                        >
                            Generate Training Dataset
                        </a>
                        &nbsp;
                        <a
                            className={`btn ${
                                !this.isConverted
                                ? "hidden"
                                : 'btn-next'
                            }`}
                            href="#"
                            onClick={this.download}
                        >
                            Downlaod Training Dataset
                        </a>
                    </center>
                        
                        
                    
                </div>
            </div>
        );
    }

    convert = () => {
        startConversion(this.uuid)
        this.isConverted = true;
    }

    download = () => {
        downloadPackage(this.uuid);
    }
}

export default Actions;
