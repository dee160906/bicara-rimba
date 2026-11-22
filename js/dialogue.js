/* Kandungan dialog dibina melalui templat mudah supaya setiap haiwan mempunyai lima soalan berbeza. */
(function(){
  const habitats=[
    {id:'forest',name:'Hutan',emoji:'🌳',className:'forest',description:'Dengar bunyi rimba',animals:[
      {id:'elephant',name:'Gajah',emoji:'🐘',food:'daun dan buah',sound:'bunyi ngauman yang kuat',move:'belalainya yang panjang',home:'hutan',detail:'belalai panjang untuk mengambil air'},
      {id:'monkey',name:'Monyet',emoji:'🐒',food:'pisang dan buah',sound:'bunyi ciapan',move:'memanjat pokok dengan tangan dan kaki',home:'hutan',detail:'ekornya membantu mengimbangkan badan'},
      {id:'bird',name:'Burung',emoji:'🦜',food:'biji-bijian dan buah',sound:'bunyi berkicau',move:'terbang menggunakan sayap',home:'pokok di hutan',detail:'bulu yang berwarna-warni'},
      {id:'tiger',name:'Harimau',emoji:'🐯',food:'daging',sound:'bunyi ngauman',move:'berjalan dengan kaki yang kuat',home:'hutan',detail:'belang hitam pada badannya'}]},
    {id:'sea',name:'Laut',emoji:'🌊',className:'sea',description:'Mari menyelam bersama',animals:[
      {id:'turtle',name:'Penyu',emoji:'🐢',food:'rumpai laut dan obor-obor',sound:'berenang senyap di dalam air',move:'berenang menggunakan kaki pendayung',home:'laut',detail:'tempurung keras melindungi badannya'},
      {id:'fish',name:'Ikan',emoji:'🐠',food:'rumpai laut dan makanan kecil',sound:'berenang senyap di dalam air',move:'berenang menggunakan sirip',home:'laut',detail:'insang membantunya bernafas di dalam air'},
      {id:'octopus',name:'Sotong',emoji:'🐙',food:'ketam kecil dan udang',sound:'bergerak senyap di dalam air',move:'berenang menggunakan lapan sesungut',home:'laut',detail:'lapan sesungut yang panjang'},
      {id:'crab',name:'Ketam',emoji:'🦀',food:'rumpai laut dan haiwan kecil',sound:'berjalan senyap di dasar laut',move:'berjalan mengiring menggunakan kaki',home:'laut',detail:'sepit yang kuat untuk mencubit'}]},
    {id:'desert',name:'Gurun Panas',emoji:'🌵',className:'desert',description:'Teroka pasir yang hangat',animals:[
      {id:'camel',name:'Unta',emoji:'🐫',food:'daun dan rumput',sound:'bunyi dengusan',move:'berjalan jauh di atas pasir',home:'gurun panas',detail:'bonggol menyimpan bekalan lemak'},
      {id:'snake',name:'Ular',emoji:'🐍',food:'tikus kecil',sound:'bunyi desisan',move:'menyusur di atas pasir tanpa kaki',home:'gurun panas',detail:'kulitnya bersisik dan bergerak beralun'},
      {id:'scorpion',name:'Kala jengking',emoji:'🦂',food:'serangga kecil',sound:'berjalan senyap di atas pasir',move:'berjalan menggunakan lapan kaki',home:'gurun panas',detail:'ekor melengkung dengan sengat'}]},
    {id:'arctic',name:'Kutub Utara',emoji:'❄️',className:'arctic',description:'Salji sejuk menanti kita',animals:[
      {id:'polar-bear',name:'Beruang kutub',emoji:'🐻‍❄️',food:'ikan dan anjing laut',sound:'bunyi ngauman',move:'berjalan di atas salji dengan kaki besar',home:'Kutub Utara',detail:'bulu putih tebal yang menghangatkan badan'},
      {id:'seal',name:'Anjing laut',emoji:'🦭',food:'ikan',sound:'bunyi menguak',move:'berenang menggunakan sirip',home:'Kutub Utara',detail:'misai panjang untuk mencari makanan'},
      {id:'arctic-fox',name:'Musang Artik',emoji:'🦊',food:'ikan dan haiwan kecil',sound:'bunyi menyalak kecil',move:'berjalan di atas salji dengan kaki',home:'Kutub Utara',detail:'bulu tebal yang bertukar putih pada musim sejuk'}]}
  ];
  const templates=[
    {make:a=>`Hai ${a.name}! Apakah makanan yang kamu suka?`,field:'food',lead:a=>`Betul! Saya suka makan ${a.food}.`,keys:a=>a.food.split(/ dan |, /)},
    {make:a=>`Bagaimana ${a.name} bergerak?`,field:'move',lead:a=>`Ya, saya ${a.move}.`,keys:a=>a.move.split(/ dengan | menggunakan | di atas | tanpa /)},
    {make:a=>`Di manakah ${a.name} tinggal?`,field:'home',lead:a=>`Pandainya! Saya tinggal di ${a.home}.`,keys:a=>[a.home,'sana','habitat']},
    {make:a=>`Apakah yang istimewa tentang ${a.name}?`,field:'detail',lead:a=>`Bagus! ${a.detail.charAt(0).toUpperCase()+a.detail.slice(1)}.`,keys:a=>a.detail.split(/ untuk | yang | membantu | melindungi /)},
    {make:a=>`Kalau berjumpa ${a.name}, apakah yang kamu mahu tanya atau ceritakan?`,field:'open',lead:a=>`Terima kasih bercerita! Saya seronok berbual dengan kamu.`,keys:()=>[]}
  ];
  const makeQuestions=a=>templates.map((t,i)=>({text:t.make(a),expected:t.field==='open'?'':a[t.field],keywords:t.keys(a),response:t.lead(a),open:t.field==='open'}));
  window.BicaraData={habitats:habitats.map(h=>({...h,animals:h.animals.map(a=>({...a,questions:makeQuestions(a)}))}))};
})();
