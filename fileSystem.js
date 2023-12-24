// import the fs module
const fs = require('fs');

// 1- create a new txt file
fs.writeFileSync('notes.txt', 'This file was created by node js!');
console.log('The file created successfully!');

// 2- create a copy of the newly created file
fs.copyFile('notes.txt', 'notesCopy.txt', (err) => {
    if (err) throw err;
    console.log('Copy of the file created successfully');
})

// 3- rename one the files
fs.rename('notes.txt', 'remanedNotes.txt', (err) => {
    if (err) throw err,
    console.log('The file renamed sucessfully!');
})

// 4- get a list of all file names in the current directory
fs.readdir(__dirname, (err, files) => {
    if (err) throw err;
console.log('list of file names in the current directory:', files);
}) 

// 5- implement another method for the fs module
// for example, let check if a file exists
const fileNameToCheck = 'renamedNotes.txt';
fs.access(fileNameToCheck, fs.constants.F_OK, (err) => {
if (err) {
    console.log(`File '${fileNameToCheck}' does not exist`);
} else {
    console.log(`File '${fileNameToCheck}' exists`);
}
});