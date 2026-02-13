# Getting Started
Install the dependencies and run the project
```
npm install
npm start
```

Head over to https://vitejs.dev/ to learn more about configuring vite
## Lead Tracker
- Create Web Progressive App
- Using Firebase:
  - initializeApp -> create App Firebase with config
  - getDatabase
  - reference -> to get the database real time reference for modify
  - push -> to add new value to database
  - onValue -> to listen if there is update from database
  - remove -> to remove value from database
  - snapshot -> a data received from database through onValue function
  - snapshot.exists() -> to check if the data received is not null or exist
  - Setting viewport -> to make the web is responsive with any device width