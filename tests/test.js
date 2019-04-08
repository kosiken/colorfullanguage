const text = `  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae totam quasi consectetur excepturi itaque quis earum odio, illo quae amet, mollitia cumque fuga, ab corrupti fugit esse vel officiis nostrum?
Voluptas commodi similique cumque architecto voluptatibus laboriosam aut, animi, exercitationem illo maxime nulla veritatis quaerat molestias vel sint repellat iste quasi vitae sit, nostrum unde a magni? Error, molestias iure!
Quod iusto in consectetur at adipisci! Odit aliquid nulla sit at neque dolore qui ipsam animi adipisci numquam commodi tempora, soluta quis ab quod quisquam. Nam voluptas possimus officiis harum.
Eligendi excepturi consequatur deserunt tenetur aliquam vitae praesentium ad atque facere facilis incidunt, illo eos pariatur nisi, sint quidem similique reiciendis nostrum voluptates nulla quibusdam fugiat inventore unde temporibus. Nam!
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae totam quasi consectetur excepturi itaque quis earum odio, illo quae amet, mollitia cumque fuga, ab corrupti fugit esse vel officiis nostrum?
Voluptas commodi similique cumque architecto voluptatibus laboriosam aut, animi, exercitationem illo maxime nulla veritatis quaerat molestias vel sint repellat iste quasi vitae sit, nostrum unde a magni? Error, molestias iure!
Quod iusto in consectetur at adipisci! Odit aliquid nulla sit at neque dolore qui ipsam animi adipisci numquam commodi tempora, soluta quis ab quod quisquam. Nam voluptas possimus officiis harum.
Eligendi excepturi consequatur deserunt tenetur aliquam vitae praesentium ad atque facere facilis incidunt, illo eos pariatur nisi, sint quidem similique reiciendis nostrum voluptates nulla quibusdam fugiat inventore unde temporibus. Nam!`

let numOfWords = 0,ans, till='',isComplete=false
function WordCount(str) { 
    return str.split(" ").length;
}
/**
 * @param {number} index
 * @param {string} str 
 */
function formatText(index=0, str, len=0, stringret= '<p>'){
    
 while(!isComplete) {
   let count = WordCount(str.slice(0,str.indexOf('.')+1 ))
   len+=count
   stringret+= str.slice(0,str.indexOf('.')+1 )
   str=str.slice(str.indexOf('.')+1 ,str.length)
   

   
   

   if(len>100){
       stringret+='</p>'
   }
 if (len>=WordCount(text)||str.indexOf('.')==-1){isComplete=true
    //return stringret+str
   
}
}
return stringret+str
}

 
 


  console.log(formatText(0, text,0))
 