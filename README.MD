Do the following one by one

```
npm install && react-native run-ios
npm install --save victory-native react-native-svg
react-native link react-native-svg
react-native run-ios
```

If `Build fails with: library not found for -lRNSVG-tvOS`:
open ios/reactNativeMapsExample.xcodeproj, remove it from 'Linked Frameworks and Libraries' section.

