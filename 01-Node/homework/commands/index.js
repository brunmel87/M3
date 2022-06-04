var fs = require('fs');
let request = require('request')

module.exports = {
    pwd: function(args, print) {
        print(process.cwd());
    },
    date: function(args, print) {
        print(Date());
    },
    echo: function(args, print) {
        print(args.join(' '));
    },
    ls: function(args, print) {
        fs.readdir('.', function(err, files) {
            if(err) throw err;
            print(files.join('\n'))
        })
    },
    cat: function(args, print) {
        fs.readFile(args[0], 'utf8', function(err, data) {
            if(err) throw err;
            print(data);
        })
    },
    head: function(args, print) {
        fs.readFile(args[0], 'utf8', function(err, data){
            if(err) throw err;
            print(data.split('\n').splice(0, 10).join('\n'));
        })
    },
    tail: function(args, print) {
        fs.readFile(args[0], 'utf8', function(err, data){
        if(err) throw err;
        print(data.split('\n').splice(-10).join('\n'));
        })
    },
    curl: function(args, print) {
        request(args[0], function(err, data) {
            if(err) throw err;
            print(data.body);
        })
    }
};