/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   io.js                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mhori <mhori@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/29 21:30:02 by mhori             #+#    #+#             */
/*   Updated: 2020/12/29 22:47:42 by mhori            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const fs = require('fs');
let count = 0;
try
{
	let text = fs.readFileSync(process.argv[2], 'utf-8');
	for (let i = 0; i < text.length; ++i)
	{
		if (text[i] === '\n')
			count++;
	}
	console.log(count);
}
catch
{
	console.log("error");
}
