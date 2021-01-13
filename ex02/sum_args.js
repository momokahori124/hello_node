/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   sum_args.js                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mhori <mhori@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2020/12/29 21:23:08 by mhori             #+#    #+#             */
/*   Updated: 2020/12/29 22:38:22 by mhori            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function ft_isNaN(x){
	return x !== x;
}

function error_message(){
	console.log("Error : The command line argument contains non-numeric characters.");
	return (1);
}

let ans = 0;
for (let i = 0; i < process.argv.length; ++i)
{
	if (i < 2)
		continue;
	if (ft_isNaN(parseInt(process.argv[i])))
		return (error_message());
	ans += parseInt(process.argv[i]);
}
console.log(ans);