Web development project for CS601.  This is a Buget Application developed with the goal of becoming familiar with ReactJS.

# How to Build

First start the json server on port `3000`to provide a mocked REST API:
```shell
npm install -g json-server
cd /src/data
json-server --watch db.json
```

Open a new prompt to ttart the web application on port `3001`:
```shell
npm start
```
