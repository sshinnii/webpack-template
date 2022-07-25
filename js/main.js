//webpack에 ectyr로 main.js가 지정되어 있기 떄문에
//무조건 이 파일부터 읽는다. 따라서 main.js에 import된 main.css도
//webpack이 dist폴더에 output해 줄 수 있게 된다. (root경로에 있어도)
//하지만! 이따 webpack이 css파일을 읽는것은 아님 단지 dist폴더에 output해주는것
//이때 webpack에서 css를 읽기 위해
// npm i -D css-loader style-loader 을 설치함

import '../scss/main.scss';

