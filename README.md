# reactnativeandroid
React-native android beginner tutorial

React-Native is JavaScript Framework(picture frame) that enables you to build native android application, but you use javascript to do so.
More on the general picture including advantages and disadvantages here https://www.oreilly.com/library/view/learning-react-native/9781491929049/ch01.html

In order to do any reasonable product development using javascript, you need Node.js. Node is something that allows you to use javascript server side.(javascript 
is a client-side scripting language.). To get a better feel for Node.js is and how it works, follow https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/

After that you need to look at this tutorial that is basically a howto on how to display hello World on your android emulator using a react-native project.
https://www.raywenderlich.com/247-react-native-tutorial-building-android-apps-with-javascript. this guide provide a complete tutorial for a a full app
but my entry here is about the challenges i met running the app on the emulator. I shall upload the code for my complete modified version of the app
as i finish it.
s
Reviewing the first two paragraphs first will make the third more friendly.

Issues
1.was curious about how the react native folder connects to android studio, that happens by opening android folder in the react native project  folder  in android studio letting gradle
resolve any issues the before you attempt to run the app in the terminal using react native. Make sure you sync the project in android studio after 
gradle is done resolving dependencies. This post also has useful on the subject and will save you sometime. https://medium.com/@nevin_61019/creating-and-opening-your-react-native-project-in-android-studio-for-mac-db9b529cca28

2.react-native: could not read path,C:\Users\chris\Property\android\app\build\generated\source\buildConfig\debug. This has to do with setting 
the ANDROID_HOME environment. Review this guide thoroughly. https://facebook.github.io/react-native/docs/getting-started.html

3.react-native: could not delete path,C:\Users\chris\Property\android\app\build\generated\source\r\debug\android\arch, this i solved by following 
this https://stackoverflow.com/questions/35674066/errorexecution-failed-for-task-appprocessdebugresources-java-io-ioexcept.

The project ran successfully after


