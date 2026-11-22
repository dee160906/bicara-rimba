/* Kemajuan disimpan setempat pada peranti; tiada suara atau rakaman disimpan. */
(function(){
 const KEY='bicara-rimba-progress-v1';
 function fresh(){return {stars:0,completed:[],badges:[],questions:{},observations:{'Mendengar':'Belum dinilai','Memahami':'Belum dinilai','Bertutur':'Belum dinilai','Membina ayat':'Belum dinilai','Komunikasi dua hala':'Belum dinilai'},childName:'',notes:''}}
 function load(){try{const saved=JSON.parse(localStorage.getItem(KEY)||'{}');return {...fresh(),...saved,questions:saved.questions||{},observations:{...fresh().observations,...(saved.observations||{})}}}catch(e){return fresh()}}
 let state=load();
 function save(){try{localStorage.setItem(KEY,JSON.stringify(state));return true}catch(e){return false}}
 function completeHabitat(id){if(!state.completed.includes(id)){state.completed.push(id);if(!state.badges.includes(id))state.badges.push(id);save();return true}return false}
 function completeQuestion(animalId,index){const key=animalId+':'+index;if(state.questions[key])return false;state.questions[key]=true;state.stars+=1;save();return true}
 function hasQuestion(animalId,index){return !!state.questions[animalId+':'+index]}
 function reset(){state=fresh();save()}
 function setObservation(skill,value){state.observations[skill]=value;save()}
 function setProfile(name,notes){state.childName=name;state.notes=notes;save()}
 window.BicaraGame={get state(){return state},save,completeHabitat,completeQuestion,hasQuestion,reset,setObservation,setProfile};
})();
