const fs=require("fs");

// fs.mkdir("test2",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("folder created");
//     }
// })


// fs.rmdir("test",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("folder deleted");
//     }
// })


// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });


//   fs.readFile("mynewfile1.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

// fs.rename("mynewfile1.txt","updatedFile.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file renamed");
//     }
// })

// fs.writeFile("updatedFile.txt","hello world this is the updated text",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file updated");
//     }
// })


// fs.unlink("updatedFile.txt",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("file deleted");
//     }
// })



// const content=fs.readFileSync("mynewfile1.txt","utf-8")
// console.log(content)


// fs.writeFileSync("updatedFile.txt","hello world this is the updated text")
// const updatedContent=fs.readFileSync("updatedFile.txt","utf-8")
// console.log(updatedContent)

fs.stat("mynewfile1.txt",(err,stats)=>{
    if(err){
        console.log(err);
    }else{
        console.log(stats);
    }
})