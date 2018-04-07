import React from 'react';
import ReactDOM from 'react-dom';

/**
 * [react description]
 * @return {[type]} [description]
 */
export function react() {
    $.ajax({
      url: 'src/offers.json',
      method: 'GET'
    }).then(function(data) {
        var list = '';

        for (let item of data) {

            list += `<li>${ item.company }<br />${ item.location}</li>`;


        }
    ReactDOM.render(
      <span>{ list }</span>,
      document.getElementById('list')
    )
    });
}
