import React from "react";

var request = new XMLHttpRequest();
request.onreadystatechange = (e) => {
    if ( request.readyState !== 4) {
        return;
    }

    if (request.status == 200) {
        console.log('success', request.responseText);
    }else{
        console.warn('error');
    }
};

request.open('GET', 'https://www.testing.com/endpoint/');
request.send();