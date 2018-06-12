const pwdExport = require("./pwd.js");
const lsExport = require("./ls.js");
const catExport = require("./cat.js");


process.stdout.write("prompt >");

process.stdin.on('data', (data) => {
    let cmd = data.toString().trim();

    cmd = cmd.split(" ");
    let fileName = cmd[1];
    cmd = cmd[0];

    process.stdout.write('Your input: ' + cmd);

    switch (cmd) {
        case "ls" :
            lsExport();
            break;
        case "pwd" :
            pwdExport();
            break;
        case "cat" : catExport(fileName);
            break;


    }


});

