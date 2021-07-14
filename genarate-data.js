const axios = require("axios")

const fs = require("fs");

//IFFE  
(() => {
    const db = {
        blogs: []
    };
    axios({
        method: "GET",
        url: "https://6061c3bdac47190017a7197c.mockapi.io/Blogs"
    }).then((result) => {
        db.blogs = result.data
        fs.writeFile("db.json", JSON.stringify(db), () => {
            console.log("wirte succes")
        })
    })

})()