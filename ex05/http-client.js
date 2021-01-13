/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-client.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mhori <mhori@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/29 23:22:41 by mhori             #+#    #+#             */
/*   Updated: 2020/12/31 12:44:45 by mhori            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

let protocol = '';

if (process.argv.length !== 3)
{
	console.log("Error : Wrong number of arguments.");
	return (1);
}

if (process.argv[2][4] == 's')
	protocol = require('https');
else
	protocol = require('http');

const req = protocol.request(process.argv[2].toString(), (res) => {
	res.on('data', (chunk) => {
		console.log(`${chunk}`);
	});
})

req.on('error', (e) => {
	console.log("Error");
});

req.end();
