const inquirer = require('inquirer')
const api = require('./api')
const fs = require("fs")
// const markdown = require('./markdown').markdown
const markdown = require('./markdown')
const start =()=>{
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your Github username?",
                name: "github",
            },
            {
                type: 'list',
                message: "Please select your favorite color.",
                name: "color",
                choices: ['red','blue', 'yellow', 'green', 'orange', 'purple'],
            }

        ]).then(res=>{
            api(res.github).then((results)=>{
                console.log(results)
                write(markdown(results, res.color), results.data.name)
            });
            
        })
}

start()
const write =(md, name)=>{
    const docName = name.split(' ').join('')+'.md'
    fs.writeFile(docName, md, err=>{
        if(err) console.log(err)
        else console.log('success')
    })
}
