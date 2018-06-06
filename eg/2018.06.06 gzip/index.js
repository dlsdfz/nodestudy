/*
 * @Author: lc 
 * @Date: 2018-06-06 10:11:21 
 * @Last Modified by: lc
 * @Last Modified time: 2018-06-06 14:11:15
 */
const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();
const inFile=fs.createReadStream('./file/text.txt');
const out =fs.createWriteStream('./file/text.txt.gz');
inFile.pipe(gzip).pipe(out);