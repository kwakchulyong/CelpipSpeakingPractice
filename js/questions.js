function setQuestion() {
	//총 문제는 Task1-8까지 8문제입니다.
	//칼럼명
	//TESTNUMBER           : 현재 몇 번째 시험인지. 현재의 경우 0 한건만 존재합니다.
	//TASKNUMBER           : 현재 몇 번째 Task인지.
	//PSEC                 : 준비시간
	//RSEC                 : 녹음시간
	//IMG                  : 이미지 경로 1
	//IMGCAPTION           : 이미지 캡션 1
	//IMG2                 : 이미지 경로 2
	//IMG2CAPTION          : 이미지 경로 2
	//IMG3                 : 이미지 경로 3
	//IMG3CAPTION          : 이미지 경로 3
	//QUESTIONTITLE        : 질문 제목
	//QUESTIONCONTENT      : 질문 내용
	//QUESTIONCONTENTEXTRA : 질문 내용외 추가내용
	//SPECIALCONTENT       : 특별한 내용



	  var inputValue =  '{ "QUESTION" : [' +
'{ "TESTNUMBER" : "0",  "TASKNUMBER" : "0",  "PSEC" : "30",  "RSEC" : "60",  "IMG" : "null",  "IMGCAPTION": "null", "IMG2": "null", "IMG2CAPTION": "null", "IMG3": "null", "IMG3CAPTION": "null", "QUESTIONTITLE": "Practice Task", "QUESTIONCONTENT": "Tell me about your best friend", "QUESTIONCONTENTEXTRA": "null", "SPECIALCONTENT" : "null" },'+
'{ "TESTNUMBER" : "0",  "TASKNUMBER" : "1",  "PSEC" : "30",  "RSEC" : "90",  "IMG" : "null",  "IMGCAPTION": "null", "IMG2": "null", "IMG2CAPTION": "null", "IMG3": "null", "IMG3CAPTION": "null", "QUESTIONTITLE": "Speaking Task 1: Giving Advice", "QUESTIONCONTENT": "What is Your Favorite Place on Earth?", "QUESTIONCONTENTEXTRA": "null", "SPECIALCONTENT" : "null" },'+
'{ "TESTNUMBER" : "0",  "TASKNUMBER" : "2",  "PSEC" : "30",  "RSEC" : "60",  "IMG" : "null",  "IMGCAPTION": "null", "IMG2": "null", "IMG2CAPTION": "null", "IMG3": "null", "IMG3CAPTION": "null", "QUESTIONTITLE": "Speaking Task 2: Talking about a Personal Experience", "QUESTIONCONTENT": "Did you ever stick up for someone?", "QUESTIONCONTENTEXTRA": "null", "SPECIALCONTENT" : "null" },'+
'{ "TESTNUMBER" : "0",  "TASKNUMBER" : "3",  "PSEC" : "30",  "RSEC" : "60",  "IMG" : "picture/sample_1.jpeg",  "IMGCAPTION": "null", "IMG2": "null", "IMG2CAPTION": "null", "IMG3": "null", "IMG3CAPTION": "null", "QUESTIONTITLE": "Speaking Task 3: Describing a Scene", "QUESTIONCONTENT": "What is this picture like?", "QUESTIONCONTENTEXTRA": "null", "SPECIALCONTENT" : "null" },'+
'{ "TESTNUMBER" : "0",  "TASKNUMBER" : "4",  "PSEC" : "30",  "RSEC" : "60",  "IMG" : "picture/sample_1.jpeg",  "IMGCAPTION": "null", "IMG2": "null", "IMG2CAPTION": "null", "IMG3": "null", "IMG3CAPTION": "null", "QUESTIONTITLE": "Speaking Task 4: Making Predictions", "QUESTIONCONTENT": "What do you think will happen later?", "QUESTIONCONTENTEXTRA": "null", "SPECIALCONTENT" : "null" },'+
'{ "TESTNUMBER" : "0",  "TASKNUMBER" : "5",  "PSEC" : "60",  "RSEC" : "0",  "IMG" : "picture/sample_2.jpeg",  "IMGCAPTION": "Price:$1,000</br>one bed room</br>country side", "IMG2": "picture/sample_3.jpeg", "IMG2CAPTION": "Price:$3,000</br>three bed room</br>near Subway", "IMG3": "picture/sample_4.jpeg", "IMG3CAPTION": "33333", "QUESTIONTITLE": "Speaking Task 5: Comparing and Persuading", "QUESTIONCONTENT": "You plan to move, and you are going to choose one of the two focuses below. Which one will you choose? Why?", "QUESTIONCONTENTEXTRA": "null", "SPECIALCONTENT" : "" },'+
'{ "TESTNUMBER" : "0",  "TASKNUMBER" : "6",  "PSEC" : "60",  "RSEC" : "60",  "IMG" : "null",  "IMGCAPTION": "null", "IMG2": "null", "IMG2CAPTION": "null", "IMG3": "null", "IMG3CAPTION": "null", "QUESTIONTITLE": "Speaking Task 6: Dealing with a Difficult Situation", "QUESTIONCONTENT": "Your best friend asks you to lend you a lot of money.", "QUESTIONCONTENTEXTRA": "You will lend money or not", "SPECIALCONTENT" : "null" },'+
'{ "TESTNUMBER" : "0",  "TASKNUMBER" : "7",  "PSEC" : "30",  "RSEC" : "90",  "IMG" : "null",  "IMGCAPTION": "null", "IMG2": "null", "IMG2CAPTION": "null", "IMG3": "null", "IMG3CAPTION": "null", "QUESTIONTITLE": "Speaking Task 7: Expressing Opinions", "QUESTIONCONTENT": "Answer the following question.", "QUESTIONCONTENTEXTRA": "Do you think you must attend school by age 19?", "SPECIALCONTENT" : "null" },'+
'{ "TESTNUMBER" : "0",  "TASKNUMBER" : "8",  "PSEC" : "30",  "RSEC" : "60",  "IMG" : "picture/sample_5.jpeg",  "IMGCAPTION": "null", "IMG2": "null", "IMG2CAPTION": "null", "IMG3": "null", "IMG3CAPTION": "null", "QUESTIONTITLE": "Speaking Task 8: Describing an Unusual Situation", "QUESTIONCONTENT": "This is your friends room. Explain the structure of the room to another friend.", "QUESTIONCONTENTEXTRA": "null", "SPECIALCONTENT" : "null" }'+
	  ']}';

	var objQuestion = JSON.parse(inputValue);
	return objQuestion;
}