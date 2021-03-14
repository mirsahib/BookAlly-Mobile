const development=  'http://localhost:3000'  // Important: Read the Note Below
const production= '' // put your production url here

const url= production

/* 
 Note: To connect react-native app to your local node app. Follow the steps below:
    1. Identify the port number on which your node app is running . 
    2. run: adb reverse tcp:<port number> tcp:<port number>  For example: adb reverse tcp:3000 tcp:3000 
    3. Close the terminal 
    4 run: react-native run-android
*/
export {
    url
}