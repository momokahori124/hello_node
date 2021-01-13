/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   async-http-collect.js                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mhori <mhori@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/01/13 14:00:45 by mhori             #+#    #+#             */
/*   Updated: 2021/01/13 15:21:56 by mhori            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

if (process.argv.length !== 5)
{
	console.log("Error : Wrong number of arguments.");
	return (1);
}

let http = require('http');
const { resolve } = require('promise');

function promiseOne()
{
    return new Promise(resolve => {
        const req1 = http.get(process.argv[2].toString(), (res) => {
            let string = '';
            res.on('data', (chunk) => {
                string += `${chunk}`;
            });
            res.on('end', () => {
                resolve(string);
                // resolve("1");
            });
        })
    })
}

function promiseTwo()
{
    return new Promise(resolve => {
        const req2 = http.get(process.argv[3].toString(), (res) => {
            let string = '';
            res.on('data', (chunk) => {
                string += `${chunk}`;
            });
            res.on('end', () => {
                resolve(string);
                // resolve("2");
            });
        })
    })
}

function promiseThree()
{
    return new Promise(resolve => {
        const req3 = http.get(process.argv[4].toString(), (res) => {
            let string = '';
            res.on('data', (chunk) => {
                string += `${chunk}`;
            });
            res.on('end', () => {
                resolve(string);
                // resolve("3");
            });
        })
    })
}

promiseOne().then(one => {
    console.log(one);
    return promiseTwo()
}).then(two => {
    console.log(two);
    return promiseThree()
}).then(three => {
    console.log(three);
})