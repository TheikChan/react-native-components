import React from 'react';

export const fetchRecipes = (action) => {
    return (dispatch, getState) => {
        fetch('/recipes',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                recipeNae,
                instructions,
                ingredients
            })
        })
        .then ((res) => {
            if(res.ok) {
                res.json().then( (recipe) => { 
                    dispatch({
                        type: 'UPDATE_RECIPE',
                        recipe 
                    })
                });
            }else{
                res.json().then((err) => {
                    dispatch({
                        type: 'ERROR_RECIPE',
                        message: err.reason,
                        status: err.status
                    })
                })
            }
        })  
        .catch ( (err) => {
            dispatch(err('There was a problem with the request.'));
        })
    };
};

fetch('https://www.testing.com/json').then(json => console.log(json));
fetch('/login', {
    method: 'POST',
    body: form,
    mode: 'cors',
    cache: 'default',
}).then(session = > onLogin(session), failure => console.error(failure));