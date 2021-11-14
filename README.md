# **Removes the cache of all files specified in _.gitignore_**

Import or execute directly the module to uncache all files listeds in `.gitignore`.
<hr />

The follow command is executed for each file:

```shell
   git rm -r --cached *current-file* --ignore-unmatch
```

If you just want to run the script, insert in `Terminal` the command:

```shell
   node index.js # or whatever name what you put
```

Made by me for you 😁