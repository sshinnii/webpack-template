//전역 모듈
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// export
module.exports = {
    //파일을 읽어들이는 진입점 설정
    entry : './js/main.js', 

    //결과물(변동)을 반환하는 설정
    output: {
        //어디에 결과물을 넣을래? :절대경로로 작성해야한다!
        //resolve : 첫번째 인수와 주번째 인수를 합쳐주는 함수
        //__dirname : 해당 파일의 경로
        //현재경로 + dist(폴더명)d을 합해서 path에 할당
        // path:path.resolve(__dirname,'dist'), 
        // filename:'main.js',
        clean : true
    },

    module:{
        rules:[
            {
                test:/\.s?css$/, //.css확장자를 가진 모든 파일
                use:[//순서 중요!
                    'style-loader',//이 해석된 css를 style태그 안에 넣어준다.
                    'css-loader', //js에서 css를 해석하기 위한 모듈
                    'postcss-loader',//이 해석한 scss를 해당 모듈을 통해 접두사를 적용함
                    'sass-loader' //scss언어를 해석한다.
                ]
            },
            {
                test : /\.js$/,
                use :[
                    'babel-loader'
                ]
            }
        ]
    },

    //번들링 후 결과물의 처리 방식 등 다양한 플러그들을 설정
    plugins :[
        new HtmlPlugin({
            template:'./index.html'
        }),
        new CopyPlugin({
            //CopyPlugin을 통해 static폴더 안에 있는 파일이
            //dist 폴더로 복사되도록 한다.
            //patterns가 배열인 이유는 여러개의 폴더를 복사 할 수 있기
            //때문이겠지?
            patterns:[
                {from : 'static'}
            ]
        })
    ],

    devServer:{
        host:'localhost'
    }
}