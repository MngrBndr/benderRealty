call ionic cordova build android --prod --release
cd C:\Users\Bradley Bender\Documents\GitHub\benderRealty\platforms\android\app\build\outputs\apk\release
call jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore "C:\Users\Bradley Bender\Documents\BenderRealty.keystore" app-release-unsigned.apk bender_realty_mobile_app
del BenderRealty.apk
call zipalign -v 4 app-release-unsigned.apk BenderRealty.apk
apksigner verify BenderRealty.apk
