
const loadseasson =() =>{
fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
.then(res=> res.json()) // promise json data
.then((json) => displayLesson(json.data))

}

const loadLevelWord = (id) =>{
    //console.log(id);
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    //console.log(url);
    fetch(url)
    .then(res => res.json())
    .then ((data) => displayLavelWord(data.data))
}
const displayLavelWord = (words) =>{
// console.log(words)
const wordContainer = document.getElementById("word-container");
wordContainer.innerHTML = "";

if(words.length == 0){
   // alert('no words detected')
   wordContainer.innerHTML = `
    <div class="text-center col-span-full">
         <img class= "mx-auto" src="./assets/alert-error.png" alt="">
            <p class="text-xl font-medium text-gray-300 rounded-xl py-5 space-y-6">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
        </div>
   `;
    return;
}

words.forEach(word => {
    console.log(word);

    const card = document.createElement('div');
    card.innerHTML = `
     <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-5">
            <h2 class="font-bold text-xl">${word.word ? word.word :"poa jaini"}</h2>
            <p class="font-semibold">Meaning /Pronounciation</p>
            <div class="font-semibold text-xl font-bangla">
            "${word.meaning ? word.meaning : "poajaini"}/ ${word.pronunciation ? word.pronunciation: "poa jainigit"}"</div>
            <div class="flex justify-between items-center">
                <button class=" btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                 <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-xmark"></i></button>
            </div>
        </div>
    `;
    wordContainer.append(card);
});
}

const displayLesson = (lessons) =>{
   // console.log(lessons);

   //1. get the container & empty
   const levelContainer = document.getElementById("level-container");
   levelContainer.innerHTML = "";

   // 2. get every lesson
    for(let lesson of lessons){
        console.log(lesson)
         //3. create Element
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML = `
      
        <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}
        </button>
        `
   //4. appened into container
        levelContainer.append(btnDiv);

    }
  
}

loadseasson()