import React from "react";

var ws = new WebSocket('ws://host.com/path');

ws.onopen = () => {
    ws.send('something');
};

ws.onmessage = (e) => {
    console.log(e.data);
};

ws.onerror = (e) => {
    console.log(e.message);
};

ws.onclose = (e) => {
    console.log(e.code, e.reason);
};