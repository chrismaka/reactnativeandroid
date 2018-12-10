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

The are a few issues with following the tutorial flow by flow from this point moving forward. The instructions here https://www.raywenderlich.com/247-react-native-tutorial-building-android-apps-with-javascript leave out neccessary order of what to copy from where and paste the where. If you find any inconsistencies like i did, here is what you should do.

Steps to resolve the inconsistent instructions
1.I suggest you download his project from the link he has provided and modify you project folder so that you have the same javascript files he has, plus include the images folder.
2. Run the project, and if your case is similar to mine, you will see this error in your emulator::undefined is not an object(evaluating RNGestureHandlerModule.state)
3.Googling it as is will effectively should land you here https://stackoverflow.com/questions/52861437/undefined-is-not-an-object-evaluating-rngesturehandlermodule-state whose instructions you should follow.
4.Following these instructions might land you here at the very end:react-native link react-native-gesture-handler is it is most like that cmd will say the command is unrecognized. To resolve it, type yarn in your cmd and when execution finishes type react-native link react-native-gesture-handler again, it should work. If it doesn't perhaps another version of react-native may need to be installed.
5.Try running the project again, and if it results in this error:react-native:invariant violation:the navigation prop is missing for this navigator. Follow the tutorial here https://stackoverflow.com/questions/53367195/invariant-violation-the-navigation-prop-is-missing-for-this-navigator. It has something to do with the changes in the navigation container .

I will update the project once it is complete.
