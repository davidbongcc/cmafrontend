var fs = require('fs');

const stat = JSON.parse(fs.readFileSync('./dist/stats.json', 'utf8'));
for (let a of stat.assets) {
    if (a.size > 1024*1024*2) {
        throw new Error(`
            JS file ${a.name} is over 2 megabytes (${a.size/1024/1024}).
            Please check the Webpack Bundle Analyzer "dist/report.json" file.
            Consider lazy loading large dependencies using "React.lazy".
        `);
    }
}
console.log('JS file sizes seem okay.');
