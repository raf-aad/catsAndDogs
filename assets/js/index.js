const BASE_URL_CAT = 'https://thatcopy.pw/catapi/rest/';
const BASE_URL_DOG = 'https://dog.ceo/api/breeds/image/random'; 

const catAndDogBtn = document.getElementById('change-cat-and-dogs');
const catImg = document.getElementById('cat');
const dogImg = document.getElementById('dog');


const getCats = async() => {
    try{
        const dataCat = await fetch(BASE_URL_CAT);
        const transformJsonCat = await dataCat.json();
    
        return transformJsonCat.webpurl;

    }
    catch(e){
        console.log(e.message);
    }

};

const getDogs = async () =>{
    try{
        const dataDog = await fetch(BASE_URL_DOG);
        const transformJsonDog = await dataDog.json();
    
        return transformJsonDog.message;

    }
    catch(e){
        console.log(e.message);
    }

};

const loadImg = async () => {
    catImg.src = await getCats();
    dogImg.src = await getDogs();
};

catAndDogBtn.addEventListener('click',loadImg);

loadImg();