const path = require("path");

module.exports={
    entry:"./js/app.js",
    output:{
        filename:"interdrop.js",
        path : path.resolve(__dirname,'./dist')
    }
}