/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   time-server.js                                     :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mhori <mhori@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/01/13 15:01:12 by mhori             #+#    #+#             */
/*   Updated: 2021/01/13 17:37:56 by mhori            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

// tcp通信で、timeを返すプログラムを作る

if (process.argv.length !== 3)
{
	console.log("Error : Wrong number of arguments.");
	return (1);
}

let net = require(`net`);
let port = process.argv[2];
let host = "127.0.0.1";

//時刻データを取得して変数timeに格納する
let time = new Date();
let year = time.getFullYear();
let month = ("0"+(time.getMonth() + 1)).slice(-2);
let day =  ("0"+(time.getDate())).slice(-2);
let hour = ("0"+(time.getHours())).slice(-2);
let minute = ("0"+(time.getMinutes())).slice(-2);
let second = ("0"+(time.getSeconds())).slice(-2);

let res = year + "-" + month + "-" + day + " " + hour + ":" + minute + "\n";

let server = net.createServer((conn) => {
    conn.on('data', () => {
        conn.write(res);
        conn.end();
    });
}).listen(port);
