# MotivATR-Client

Link to Live App: https://motivatr.netlify.com/

App Overview
============

Motvatr allows user to be held accountable for fitness goals by texting a designated "MotivATR" when fitness goals
are met or fitness goals are not completed by a designated time.
Fitness progress is measured by fitbit data that is imported when a user signs into their fitbit account from the app.

### Home Screen
![motivatr-home](https://user-images.githubusercontent.com/26045953/38386323-2360ffa4-38c9-11e8-8c6a-6a3487e7898a.png)
![motivatr-login](https://user-images.githubusercontent.com/26045953/38386418-706a8d4c-38c9-11e8-9562-888e2281299c.png)

After a user registers a new account and logs in they will be asked to authorize their fitbit account. The link takes the user
to fitbit.com and after they log in they will be redirected back to the site.
![motivatr-redirect](https://user-images.githubusercontent.com/26045953/38386456-95094df0-38c9-11e8-8722-5bfcb650cbec.png)

Users are then rediected to the dashboard.
![motivatr-dashboard](https://user-images.githubusercontent.com/26045953/38386485-a6d9c2e4-38c9-11e8-9708-c347032735c8.png)
![screencapture-motivatr1-herokuapp-api-user-home-2018-04-05-11_49_23](https://user-images.githubusercontent.com/26045953/38386489-a8e11ef2-38c9-11e8-950e-2206da548176.png)

From the Dashboard users can view their current activities which is up to date from the last time their fitbit synced data to the fitbit
API.
Users can also sign up a MotivATR here and set a end time for when their goals shoudl be completed. These inputs are stored in the db but twilio messaging is not currently set up to notify the motiVATR when goals are met.

![motivatr-inputs](https://user-images.githubusercontent.com/26045953/38386585-e6562426-38c9-11e8-83a3-4d598313b358.png)

Built With
===============

* Node.js
* React
* Redux
* Express framework
* Mongo DB
* CI through Travis CI
* Deployed with Netlify

