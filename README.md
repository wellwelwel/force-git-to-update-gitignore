

# <img src="https://weslley.io/media/refresh-git.svg" width="36" /> **Removes the cache of all files specified in _.gitignore_**

Just run the script in `Terminal` to uncache all files listeds in `.gitignore`:

```shell
   node index.js # or whatever name what you put
```

The follow command will be executed for each file:

```shell
   git rm -r --cached *current-file* --ignore-unmatch
```

Made by me for you 😁
