/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   http-json-api-server.js                            :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mhori <mhori@student.42tokyo.jp>           +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2021/01/13 16:34:05 by mhori             #+#    #+#             */
/*   Updated: 2021/01/13 19:42:22 by mhori            ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

//http通信でJSONデータを送るサーバー

if (process.argv.length !== 3)
{
	console.log("Error : Wrong number of arguments.");
	return (1);
}

let http = require('http');
let port = process.argv[2];
let host = "127.0.0.1";

function whatTime(url)
{
    let unix = url.indexOf("/unixtime?iso=");
    let parset = url.indexOf("/parsettime?iso=");
    if (unix >= 0)
        return ('u');
    else if (parset >= 0)
        return ('p');
}

const server = http.createServer((req, res) => {
    let url = req.url; ///api/unixtime?iso=2020-12-15T17:10:15.474Z
    let query = url.split('=')[1];//2020-12-15T17:10:15.474Z
    let whattime = whatTime(url); //unix or paeset ?
    if (whattime === 'u')
    {
        let unixtime = JSON.stringify({
            "unixtime" : Number(Date.parse(query))
        });
        res.write(unixtime + '\n');
    }
    else if (whattime === 'p')
    {
        let time = query.split('T')[1];
        let json = {
            "hour" : Number(time.split(':')[0]),
            "minute"  : Number(time.split(':')[1]),
            "second" : Number(time.split(':')[2].split('.')[0])
        }
        let parsettime = JSON.stringify(json);
        res.write(parsettime + '\n');
    }

    res.end();
}).listen(port);