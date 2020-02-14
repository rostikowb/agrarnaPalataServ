import FB from 'fb';
import rp from "request-promise-any";
// import ss from '../../../assets/img/63xmB.jpg'

// FB.options({version: 'v2.4'});
// const App = FB.extend({appId: '797520190673708', appSecret: '1b9cc70368dcb667bba52e96b33dc7a1'});

// const req = 'https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=797520190673708&client_secret=1b9cc70368dcb667bba52e96b33dc7a1&fb_exchange_token=EAALVVyOqkywBANmvtMJnyEhaiTGydeRAyknPwG5IecutN7HCdG7nZChaYmx88YmVVUcmaLJgYfvZBrttecKAPZBLVPpG573K2danZBKTkPZCmfBy8EblwKcnQAgp8NiIOlgcOQ9rl4x4ZB63ZBaBZANBlDFYpN63uRnqcG2OndmHIZCAKj1jTnNYM5PNa3ftcvOH7ZCrJZCaIYZAE1ZCj5hDVXwo5';


export default ()=> {
    const token = "EAALVVyOqkywBAPxCVhS95qi2kpIQERiyvJaWlEFbGMgd3Yf8cbGGnELS0ZAZBUzMflZBZAbMAsAjgAWUypnTCSdCl6gL5X0GgYQdpvaRwEhXqUJmNDozoeLSMtKbb01hEZB6NaPgomBqZBpP8F1ayskCZAl2EIMgcUj0akhxQOhY50UHm7RVjHg";

    const options = {
        method: 'POST',
        uri: 'https://graph.facebook.com/111022997082489/feed?message=Awesome!&access_token='+token,
        json: true
    };
    rp(options).then(res => {
        console.log(res);
    });


    // FB.setAccessToken(token);
//     FB.api('me/feed', 'post', {message: 'postTest'}, function (res) {
//         if (!res || res.error) {
//             console.log(!res ? 'error occurred' : res.error);
//             return;
//         }
//         console.log('Post Id: ' + res.id);
//     });
// }


// FB.api('me/photos', 'get', function (res) {
//     if (!res || res.error) {
//         console.log(!res ? 'error occurred' : res.error);
//         return;
//     }
//     console.log(res.data);
    // console.log(JSON.stringify(res));
    // for(res in key) console.log(res[key]);
    // console.log('Post Id: ' + res);
// });
}
// class Soc {
//     constructor(){
//
//
//     }
//
//
// }