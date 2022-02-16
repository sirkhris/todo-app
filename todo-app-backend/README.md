```
be sure to add node_modules and .env to .gitignore

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:sirkhris/template-repository.git
git push -u origin <local-branch>:<new-branch-name-here>
```

###BOILERPLATE - REST API###

Organization:
Controller - contains functions for particular sql commands. it is further organized as these commands are place in another folder that are dedicated to using these commands.
EX: the user folder will use the usual CRUD commands. where as another folder could be made and will only need 2 of the 4 CRUD commands such as getAll and post.

router - contains all the route instructions which are organized using another file which contains specific route instructions that it may need/use.
EX: The user.ts contains all the routes which it will use when called. Where as say another folder could contain different route instructions.

sql - contains files that contain particular sql query. These files are named after associated files like in the router such as user.ts therefore a sql query file would be named userSql.ts.

util - contains useful files such as database, log In, timer, etc.

index.ts - source of applying express, using middleware, executing routes, and starts the server.
