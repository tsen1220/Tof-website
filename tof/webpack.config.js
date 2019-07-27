const path = require("path");

module.exports={
    entry:"./js/app.js",
    output:{
        filename:"test3.js",
        path : path.resolve(__dirname,'./dist')
    }
}