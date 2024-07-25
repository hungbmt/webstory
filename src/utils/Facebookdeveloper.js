import React, { Component } from 'react';
// import SlidingPanels from '../components/SlidingPanels';

class Feedback extends Component {
    componentDidMount() {
        window.scrollTo(0, 0); // Cuộn về đầu trang

        window.fbAsyncInit = function () {
            window.FB.init({
                appId: '2136540796711441',
                cookie: true, // cho phép cookies để máy chủ truy cập vào phiên
                xfbml: true, // phân tích các plugin xã hội trên trang này
                version: 'v2.5', // sử dụng phiên bản 2.5
            });
        };

        // Tải SDK một cách không đồng bộ
        (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }

    render() {
        return (
            <div>
                <div className="fb-comments" data-href="https://www.facebook.com/cna.net.au/" data-numposts="10"></div>
            </div>
        );
    }
}

export default Feedback;
