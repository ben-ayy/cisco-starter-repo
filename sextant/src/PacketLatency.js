import React, { Component } from "react";

class PacketLatency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: props.url,
            packetLatency: null
        };
    }

    componentDidMount() {
        let webSocket = new WebSocket(this.state.url);
        webSocket.onmessage = (event) => {
            let currentPacket = event.data;
            let currentTime = new Date().getTime();
            let latency = currentTime - currentPacket;
            this.setState({ packetLatency: (latency === null) ? 0 : latency});
        }
    }

    render() {
        return(
            <span className="packet-latency"> 
                { this.state.packetLatency + "ms" }
            </span>
        );
    }
}

export default PacketLatency;