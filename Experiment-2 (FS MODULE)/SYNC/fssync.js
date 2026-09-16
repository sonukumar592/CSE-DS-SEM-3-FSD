 const fs=require('fs');

fs.writeFileSync('example.txt','This is Experiment 2 in FSD Workshop','utf8');
fs.writeFileSync('example1.txt','This is Experiment 2 in FSD Workshop','utf8');

console.log('create file run successfully');

const data=fs.readFileSync('example.txt','utf8');
console.log('file content is:',data);

fs.appendFileSync('example.txt','\nThis is the new line');
console.log('Example file is appended successfully');

 fs.unlinkSync('example1.txt');
 console.log('example1 file is deleted successfully'); 


// fs.mkdirSync('student');
// console.log('file created successfully');
// fs.rmdirSync('student');
// console.log('new folder is deleted');

if(fs.existsSync('example.txt')){
    console.log('file exist');
}else{
    console.log('file not found,need to create this file');
}
