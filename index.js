const inquirer = require('inquirer')
const api = require('./api')
const fs = require("fs")
// const markdown = require('./markdown').markdown

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
                // console.log(results.data.name)
                // console.log(results.data.avatar_url)
                // console.log(results.data.login)
                // console.log(results.data.url)
                // console.log(results.data.location)
                // console.log(results.data.bio)
                // console.log(results.data.repos_url)
                // console.log(results.data.followers_url)
                // console.log(results.data.following_url)
                
            });
        })
}

start()
