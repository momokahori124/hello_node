/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   asyncio.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mhori <mhori@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/29 22:02:18 by mhori             #+#    #+#             */
/*   Updated: 2020/12/29 23:22:07 by mhori            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
let count = 0;

if (process.argv.length !== 3)
{
	console.log("Error : wrong number of arguments.")
	return (1);
}

fs.readFile(process.argv[2], 'utf-8', (err, text) => {
	try
	{
		let lines = text.split("\n").length - 1;
		console.log(lines);
	}
	catch
	{
		console.log("Error : filename is wrong.");
	}
});