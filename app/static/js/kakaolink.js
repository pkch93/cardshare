Kakao.init('fb602f99e518efc0232e160f0e3c74b5');

function sendLink() {
    Kakao.Link.sendDefault({
    objectType: 'feed',
    content: {
        title: '안녕',
        imageUrl: 'https://s3.ap-northeast-2.amazonaws.com/cardshare/1920x1080_3_.jpg',
        link: {
        mobileWebUrl: 'http://localhost:3000/card/6d1654f7-2dd7-4f3a-b067-2f75713a8138',
        webUrl: 'http://localhost:3000/card/6d1654f7-2dd7-4f3a-b067-2f75713a8138'
        }
    },
    buttons: [
        {
        title: '웹으로 보기',
        link: {
            mobileWebUrl: 'http://localhost:3000/card/6d1654f7-2dd7-4f3a-b067-2f75713a8138',
            webUrl: 'http://localhost:3000/card/6d1654f7-2dd7-4f3a-b067-2f75713a8138'
        }
        },
        {
        title: '앱으로 보기',
        link: {
            mobileWebUrl: 'http://localhost:3000/card/6d1654f7-2dd7-4f3a-b067-2f75713a8138',
            webUrl: 'http://localhost:3000/card/6d1654f7-2dd7-4f3a-b067-2f75713a8138'
        }
        }
    ]
    });
}