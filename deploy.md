##Android

Building and running in android studio

`ionic cordova run android --prod --release`


Simply build the APK

`ionic cordova build android --prod --release`

ionic cordova build android --prod --release


Upon locating the Android APK that was generated, you have to sign your APK file. To do this, you have to create a new certificate/keystore.

Let’s generate your private key using the keytool command that comes with the JDK:

`keytool -genkey -v -keystore my-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias my-alias`

You’ll first be prompted to create a password for the keystore. Then, answer the rest of the nice tools’s questions and when it’s all done, you should have a file called my-release-key.jks created in the current directory.

**Note: Make sure to save this file somewhere safe, if you lose it you won’t be able to submit updates to your app!**

To sign the unsigned APK, run the jarsigner tool which is also included in the JDK:

`jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks android-release-unsigned.apk my-alias`

`apksigner verify benderRealty.apk`