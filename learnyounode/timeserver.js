//import { Socket } from 'dgram';
//import { Server } from 'net';

var net = require('net');
var moment = require('moment');
var port = process.argv[2];
var server = net.createServer((Socket) => {
var time=moment().format('YYYY-MM-DD HH:mm');
//console.log(time);
Socket.write(time);
Socket.end('\n');
});
server.listen(port);