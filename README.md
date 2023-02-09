# Spindungeon project
> Using Gulp 4

## Deploy project
If you to check this project you have two ways:
1.  *Clone or download this project on your system*
2.  *Visit GitHub pages*

If you chose the first way, you need to install this build `npm i`, which will install all dependencies in packege.json.
`gulp` - basic command that runs a development build using browser-sync
`gulp build` - command for the production assembly of the project. All assets are compressed and optimized for hosting.
`gulp cache` - a command to run after gulp build if you need to upload new files to hosting without caching.
`gulp backend` - command for the backend build of the project. It is devoid of unnecessary things from the dev build, but not compressed, for the convenience of the backender.
`gulp zip` - команда собирает ваш готовый код в zip-архив.


> Since this is a test project, I still recommend that you view it first on GitHub pages.
> If you are directly interested in some parts of the code, you can always look at them in the repository.
