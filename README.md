# Celpip Speaking
Celpip은 캐나다에서 만든 캐나다 자체 영어시험입니다. 2018년 공식 사이트에서는 문제를 제공해줄뿐 녹음기능이 없었기에 실제 시험과 유사하게 녹음을 할수 있으면 어떨까 라는 생각이들어서 학습을 위해서 Speaking 모듈 부분을 만들어봤습니다. <br/>

셀핍 시험 사이트<br/>
https://secure.paragontesting.ca/InstructionalProducts/FreeOnlineSampleTest/FOST


<center>
<img src="https://raw.githubusercontent.com/kwakchulyong/CelpipSpeakingPractice/main/introduce/1.PNG" width="100%" height="100%">
</center>


와이파이가 불가능한 지역에서 오프라인에서도 볼수 있게 하고, 영어 스터디 멤버들과 공유하기 위해서 정적인 페이지로 제작했습니다. HTML 단일페이지로, 스크립트를 이용하여 화면이 변경됩니다. 웹에서 마이크로 연결하기 위해서 사용되는 navigator.getUserMedia는 보안상 http에서는 작동이 불가능하고, https를 사용하거나, file를 사용한 로컬 컴퓨터로만 작동이 가능합니다.

개발언어 : HTML5, Javascript, CSS <br/>
API : Recorder.js(Web Audio API) 참고사이트 https://blog.addpipe.com/using-recorder-js-to-capture-wav-audio-in-your-html5-web-site/ <br/>
Database : 영어 시험 문제는 RDBMS(mysql이나 oracle)를 이용하지 않고, questions.js 파일에 json 형태로 입력되어 있습니다. 기존에는 수십가지 문제를 랜덤하게 나오게 하였으나, GIT에 올린 파일은 간략한 1문제만 입력하였습니다. 등록된 문제는 임의로 입력한 데이터이므로, 실제 시험문제와는 다를수도 있습니다.<br/>
브라우저 : 크롬,파이어폭스 작동가능합니다. 익스플로러에서는 작동이 되지않습니다.

Live DEMO : https://josephkwak.github.io/
<br/>
사용법
1.index.html를 실행합니다.<br/>
2.START 버튼을 누르면 실제 시험과 동일한 유형의 연습문제를 포함한 8문제가 출력되고, 각 문제당 30초의 준비시간과 60초-90초의 레코딩 시간이 주어집니다.
<center>
<img src="https://raw.githubusercontent.com/kwakchulyong/CelpipSpeakingPractice/main/introduce/2.png" width="100%" height="100%">
</center>

3.준비시간이 끝나면, 녹음기능이 활성화 되고, 웹브라우저에서 허가를 하면 녹음됩니다. 거부할시에, 녹음되지 않습니다.
<center>
<img src="https://raw.githubusercontent.com/kwakchulyong/CelpipSpeakingPractice/main/introduce/3.png" width="100%" height="100%">
</center>

4.레코딩 시간이 끝나면, 자동으로 녹음된 파일을 다운로드시킵니다. 그리고, 녹음된 파일을 듣거나, 다시 다운로드를 요청할수 있습니다.
<center>
<img src="https://raw.githubusercontent.com/kwakchulyong/CelpipSpeakingPractice/main/introduce/4.png" width="100%" height="100%">
</center>

5.문제가 다 끝나면 컨펌창이 뜨며, 다시 반복하거나, 종료됩니다.
