(async () => {
   
   const fs = require('fs');
   // const exec = require('child_process').exec;

   const gitignore = fs.readFileSync('.gitignore', 'utf-8');
   const list = gitignore.split('\n');

   list.forEach(file => {
      
      
   });
})();