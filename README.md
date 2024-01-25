## Mobile Art Chicago

This app allows the user to explore the events from the Art Institute of Chicago. Displaying small detail of the event and also allowing the user to save favorites event, this app is great to keep update with the art events.

![iOS preview 1](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnJkYTRlNDNjcXJiZ2pua3poOXA0Y3VmcHcyMGQyNnBwYTBoZGJyMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nZ6qBtRgDV77xyjbdP/giphy.gif)

 ![iOS preview 2](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDk1dXY4b2hqMTVld2FvdHM3bDY4N2NhejlnNjFvM2NqdzFzN3g3eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/NLtATO0ofAMzA1cadw/giphy.gif)

  ![iOS preview 3](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2NkZGZyZmgzZGJjMXFta2l5MHc4bWx4bXp0ZzU0eW16anNjbDNncyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cif5Rq9bFbSpTl1AYu/giphy.gif)


### Before start

This project was built using React Native, following the usual setup. To dive in, just make sure your environment is ready. You can find all the details in the React Native [documentation](https://reactnative.dev/docs/environment-setup).

If you're using Android, it's a good idea to take your time and follow the documentation's instructions to install all the required SDK.

#### Step 1: Clone the repo.

`git clone https://github.com/josecarvajal8/MobileArtChicago`

#### Step 2: Dependencies and pods

Install the dependencies by running:
`yarn`

Dependencies used in this project.
- [React Native permissions](https://github.com/zoontek/react-native-permissions) - Only for native module branch
- [React Native async storage](https://github.com/react-native-async-storage/async-storage)

Install pods by running:

`cd ios/ && bundle exec pod install && cd ..`

#### Step 3: Run your app

Start the server by running:
`yarn start`

Run your app by running:
`yarn ios`

#### Disclaimer

Base implementation to add events to native iOS calendar is on this. Stuck with EventStore initialization (iOS native) [WIP - PR](https://github.com/josecarvajal8/MobileArtChicago/pull/8)