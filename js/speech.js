/* SpeechRecognition tidak disokong seragam; mod guru dan taip jawapan sentiasa tersedia. */
(function(){
 const Recognition=window.SpeechRecognition||window.webkitSpeechRecognition;
 let recognition=null,active=false,onResult=null,onEnd=null;
 function supported(){return !!Recognition}
 function speak(text){if(!('speechSynthesis'in window))return false;try{window.speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(text);utterance.lang='ms-MY';utterance.rate=.88;utterance.pitch=1.08;window.speechSynthesis.speak(utterance);return true}catch(e){return false}}
 function stopSpeaking(){if('speechSynthesis'in window)window.speechSynthesis.cancel()}
 function listen(resultCallback,endCallback){if(!supported())return false;stopListening();onResult=resultCallback;onEnd=endCallback;recognition=new Recognition();recognition.lang='ms-MY';recognition.interimResults=true;recognition.continuous=false;recognition.onresult=e=>{let interim='',final='';for(let i=e.resultIndex;i<e.results.length;i++){const text=e.results[i][0].transcript;if(e.results[i].isFinal)final+=text;else interim+=text}if(onResult)onResult(final||interim,!!final)};recognition.onerror=e=>{active=false;if(onEnd)onEnd({error:e.error})};recognition.onend=()=>{active=false;if(onEnd)onEnd({})};try{recognition.start();active=true;return true}catch(e){active=false;return false}}
 function stopListening(){if(recognition){try{recognition.stop()}catch(e){}recognition=null}active=false}
 window.BicaraSpeech={supported,speak,stopSpeaking,listen,stopListening,get active(){return active}};
})();
