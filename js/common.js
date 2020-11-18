
	URL = window.URL || window.webkitURL;
	var gumStream;
	var rec;
	var input;
	var AudioContext = window.AudioContext || window.webkitAudioContext;
	var audioContext


//---------------------------------------
	var finishYN = false;
	var objQuestion = setQuestion(); //questions

	function onload() {
	}

	var taskNumber = 0;//basic
    var cnt = 0;
	var myVar;
	var countType = 'P';//P:Preparation, R:Recording
	var globalPSec = 0;
	var globalRSec = 0;
	var specialTask5 = 0; //0:Selecting, 1:Preparation, Recording
	var globalSelectImg = ""; //for Task5

	function startText() {
		document.getElementById("instructions").style.display = "none";
		document.getElementById("question").style.display = "block";
		setupPage(taskNumber);
	}


	function setupPage(task) {
		globalPSec = Number(objQuestion.QUESTION[task].PSEC);
		globalRSec = Number(objQuestion.QUESTION[task].RSEC);

		document.getElementById("questionTitle").innerText =  objQuestion.QUESTION[task].QUESTIONTITLE;
		document.getElementById("questionContent").innerText = objQuestion.QUESTION[task].QUESTIONCONTENT;
		document.getElementById("prepareTime").innerText =  globalPSec;
		document.getElementById("recordingTime").innerText =  globalRSec;

		if(task == 3 || task == 4) {
			document.getElementById("pictureArea").style.display = "block";
			document.getElementById("pictureImg").src = objQuestion.QUESTION[task].IMG;
			document.getElementById("pictureImg").style.width = "400px";
		} else if(task == 5) {
			document.getElementById("pictureArea").style.display = "block";
			document.getElementById("pictureImg").src = objQuestion.QUESTION[task].IMG;
			document.getElementById("pictureImg").style.width = "300px";
			document.getElementById("pictureImgCaption").innerHTML = objQuestion.QUESTION[task].IMGCAPTION;
			document.getElementById("pictureImg2Fig").style.display = "block";
			document.getElementById("pictureImg2").src = objQuestion.QUESTION[task].IMG2;
			document.getElementById("pictureImg2").style.width = "300px";
			document.getElementById("pictureImg2Caption").innerHTML = objQuestion.QUESTION[task].IMG2CAPTION;

		} else if(task == 6 || task == 7) {
			document.getElementById("questionContentExtra").innerHTML =  objQuestion.QUESTION[task].QUESTIONCONTENTEXTRA;
		} else if(task == 8) {
			document.getElementById("pictureArea").style.display = "block";
			document.getElementById("pictureImg").src = objQuestion.QUESTION[task].IMG;
			document.getElementById("pictureImg").style.width = "400px";

		}

		run();

	}

	function specialCaseTask5() {
		specialTask5 = 1;
		globalPSec = 60;
		globalRSec = 60;

		document.getElementById("questionContent").innerText = objQuestion.QUESTION[taskNumber].SPECIALCONTENT;
		document.getElementById("prepareTime").innerText =  globalPSec;
		document.getElementById("recordingTime").innerText =  globalRSec;

		if(globalSelectImg == '') {
			var rSelect = Math.floor((Math.random() * 2) + 1);
			if(rSelect == 1) {
				globalSelectImg = 'pictureImgFig';

			} else if(rSelect == 2) {
				globalSelectImg = 'pictureImg2Fig';
			}
			document.getElementById(globalSelectImg).style.backgroundColor = "#cddcf4";
		}

		if(globalSelectImg == 'pictureImgFig'){
			document.getElementById("pictureImg2").src = objQuestion.QUESTION[taskNumber].IMG3;
			document.getElementById("pictureImg2Caption").innerHTML = objQuestion.QUESTION[taskNumber].IMG3CAPTION;
		} else if(globalSelectImg == 'pictureImg2Fig') {
			document.getElementById("pictureImg").src = objQuestion.QUESTION[taskNumber].IMG3;
			document.getElementById("pictureImgCaption").innerHTML = objQuestion.QUESTION[taskNumber].IMG3CAPTION;
		}


	}

	function selectPicture(id) {
		if(taskNumber == 5 && specialTask5 == 0) {
			globalSelectImg = id;
			if(id == 'pictureImgFig'){
				document.getElementById('pictureImgFig').style.backgroundColor = "#cddcf4";
				document.getElementById('pictureImg2Fig').style.backgroundColor = "#FFFFFF";
			} else if(id == 'pictureImg2Fig') {
				document.getElementById('pictureImgFig').style.backgroundColor = "#FFFFFF";
				document.getElementById('pictureImg2Fig').style.backgroundColor = "#cddcf4";
			}

		}

	}


	function restart() {
		reset();
		setupPage(taskNumber);
	}

	function stop() {
		clearInterval(myVar);
	}


	function before() {
		if(taskNumber > 0) {
			reset();
			setupPage(--taskNumber);
		}
	}

	function next() {
		reset();
		if(taskNumber < 8) {
			taskNumber++;
			setupPage(taskNumber);
		} else {
			if (confirm("Will you try again?")) {
				taskNumber = 0;
				setupPage(taskNumber);
			} else {
				alert("Good Luck");
			}

		}
	}

	function reset() {
		cnt = 0;
		countType = 'P';
		globalPSec = 0;
		globalRSec = 0;
		document.getElementById("questionTitle").innerText =  "";
		document.getElementById("questionContent").innerText = "";
		document.getElementById("prepareTime").innerText =  0;
		document.getElementById("recordingTime").innerText =  0;
		document.getElementById("progressBar").style.display = "none";
		document.getElementById("questionContentExtra").innerHTML = "";
		document.getElementById("pictureArea").style.display = "none";
		document.getElementById("cntName").innerHTML = "";
		document.getElementById("cntNumber").innerHTML = "";
		document.getElementById("cntNumber").style.display = "block";
		document.getElementById("pictureImg").src = "";
		document.getElementById("pictureImg").style.width = "300px";
		document.getElementById("pictureImgCaption").innerText = "";
		document.getElementById("pictureImg2").src = "";
		document.getElementById("pictureImg2").style.width = "300px";
		document.getElementById("pictureImg2Caption").innerText = "";
		document.getElementById("pictureImg2Fig").style.display = "none";
		document.getElementById("pictureImgFig").style.backgroundColor = "#FFFFFF";
		document.getElementById("pictureImg2Fig").style.backgroundColor = "#FFFFFF";
		globalSelectImg = "";
		clearInterval(myVar);

		if(rec === undefined) {
		} else {
			rec && rec.stop();
			rec.clear();
		}

		finishYN = false;

		document.getElementById("formats").innerHTML = "";
		document.getElementById("recordingsList").innerHTML = "";

	}




	function run() {
		document.getElementById("cntName").innerText = "Preparation Time";
		cnt = globalPSec;
		var view=document.getElementById("cntNumber");
		view.innerText = cnt;

		myVar = setInterval("countdown()", 1000);
	}

	function countdown() {
		var view=document.getElementById("cntNumber");

		if(cnt > 0) {
			cnt--;
			if(countType == 'P') {
				view.innerText = cnt;
			} else if(countType == 'R') {
				changeProgressBar(cnt);
			}

		} else {
			if(countType == 'P') {
				if(taskNumber == 5 && specialTask5 ==0) {
					specialCaseTask5();
					cnt = globalRSec+1;
				} else {
					document.getElementById("cntNumber").style.display = "none";
					document.getElementById("progressBar").style.display = "block";
					countType = 'R';
					document.getElementById("cntName").innerText = "Recording";
					cnt = globalRSec+1;
					playVoice('StartSpeakingNow');
					startRecording();
				}
			} else if(countType == 'R') {
				clearInterval(myVar);
				specialTask5 = 0;
				playVoice('TimeIsUp');
				finishYN = true;
				stopRecording();
			}

		}

	}

	function startRecording() {
		var constraints = { audio: true, video:false }
		navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
		audioContext = new AudioContext();

		gumStream = stream;
		input = audioContext.createMediaStreamSource(stream);

		rec = new Recorder(input,{numChannels:1})
		//start the recording process
		rec.record()

	}).catch(function(err) {
	  	console.log('error ');
	});


	}

	function stopRecording() {
		if(rec === undefined) {
		} else {
			rec.stop();
			gumStream.getAudioTracks()[0].stop();
			rec.exportWAV(createDownloadLink);
		}
	}

	function createDownloadLink(blob) {

	var url = URL.createObjectURL(blob);
	var au = document.createElement('audio');
	var li = document.createElement('li');
	var link = document.createElement('a');

	//name of .wav file to use during upload and download (without extendion)
	var filename = new Date().toISOString();

	//add controls to the <audio> element
	au.controls = true;
	au.src = url;

	//save to disk link
	link.href = url;
	link.download = filename+".wav"; //download forces the browser to donwload the file using the  filename
	link.innerHTML = "<br/>Save to disk";

	//add the new audio element to li
	li.appendChild(au);

	//add the save to disk link to li
	li.appendChild(link);

	//add the li element to the ol
	recordingsList.appendChild(li);

	link.click(); //automatic download

}




	
	function changeProgressBar(cnt) {
		//globalRSec
		if(globalRSec > 0) {
			var progress = globalRSec - cnt; //ex, 60:60 = 0%
			var percent = Math.round(progress / globalRSec  * 100);	
			document.getElementById("progressBar").value = percent;
		}
	}
	
	function playVoice(fileName) {
		var audio = new Audio("mp3/"+fileName+'.mp3');
		audio.play();
	}
	