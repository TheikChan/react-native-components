import { Linking } from 'react-native';

// Linking.openURL(url)
// .catch(err => console.error('An error occured', err))

// Linking.canOpenURL(url)
// .then(supported => {
//     if (!supported) {
//         console.log('Unsupported URL:' + url)
//     }else{
//         return Linking.openURL(url)
//     }
// }).catch(err => console.log('An error occurred', err))

/// Check app is open from deeplink url

// componentDidMount() {
//     const url = Linking.getInitialURL()
//     .then((url) => {
//         if(url) {
//             console.log('Initil url is:'+url)
//         }
//     }).catch(err => console.error('An error occurred', err))
// }