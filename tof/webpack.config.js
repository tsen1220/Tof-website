const path = require("path");

module.exports={
    entry:"./js/app.js",
    output:{
        filename:"classtypei.js",
        path : path.resolve(__dirname,'./dist')
    }
}