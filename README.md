# Webapp
- Back-end: Rest API json made with Express
- Front-end: React


# Prerequisites
- Install [Mongodb][mongodb].
- Run Mongod service: `sudo systemctl start mongod`
- Confirm that a todo document (i.e. entry) was created in the collection (i.e. table) `todos` of the database `webapp`:

```console
$ mongo
> show dbs
> use webapp
> show collections
> db.todos.find()
```

[mongodb]: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/


# Inspiration
- [Travel log app][travel-log] by Coding Garden, explained in this [Youtube stream][youtube-stream].

[travel-log]: https://github.com/CodingGarden/travel-log
[youtube-stream]: https://www.youtube.com/watch?v=5pQsl9u_10M


# Development
On vim:
- Autocomplete: [YouCompleteMe][ycm]
- Linting with eslint: [ALE][ale]

[ycm]: https://github.com/ycm-core/YouCompleteMe
[ale]: https://github.com/dense-analysis/ale
