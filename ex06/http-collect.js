/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-collect.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mhori <mhori@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/31 12:45:02 by mhori             #+#    #+#             */
/*   Updated: 2021/01/13 14:16:59 by mhori            ###   ########.fr       */
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

// オプションのcallbackパラメーターは、'response'イベントの1回限りのリスナーとして追加されます。
// callback関数は、responseイベントが発生した時に１回だけ動くように設定されている

const req = protocol.get(process.argv[2].toString(), (res) => {
	let strlen = 0;
	let string = '';
	res.on('data', (chunk) => {
		string += `${chunk}`;
	});
	res.on('end', () => {
		let count;
		count = string.length;
		console.log(count);
		console.log(string);
	});
})

req.on('error', (e) => {
	console.log("Error");
});
