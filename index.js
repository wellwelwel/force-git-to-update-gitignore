'use strict';

((includeComments = true) => {

   const { execSync } = require('child_process');
   const { EOL } = require('os');
   const fs = require('fs');
   const gitignore = fs.readFileSync('.gitignore', 'utf-8');
   const list = gitignore.split(EOL);
   const sh = { green: '\x1b[32m', red: '\x1b[31m', reset: '\x1b[0m' };

   list.forEach(toIgnore => {
      
      if (toIgnore?.trim().length === 0) return;
      if (!includeComments && /#/.test(toIgnore)) return;

      const path = toIgnore.replace(/#/, '').trim();
      const command = `git rm -r --cached ${path} --ignore-unmatch`;

      try {
         
         execSync(command, { stdio: 'inherit' });

         console.log(`${sh.green}✔${sh.reset} ${command}`);
      } catch (e) {
         
         console.log(`${sh.red}✖${sh.reset} ${command} - ${e.message}`);
      }
   });
})();
