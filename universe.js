

const universeAi = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`;
    const spinner = document.getElementById('spinner');
    spinner.style.display = 'block'; // Show the spinner
    try {
        const res = await fetch(url);
        const data = await res.json();
   
        displayUniverse(data.data.tools.slice(0, 6));
    } catch (error) {
        console.log('Error:', error);
    } finally {
        spinner.style.display = 'none'; // Hide the spinner
    }
};

const displayUniverse=(universel) =>{
    const universelContainer=document.getElementById('universel-container');
    universelContainer.innerHTML = ''; // Clear previous cards
    universel.forEach(elements => {  

        const universelDiv=document.createElement('div');
        universelDiv.classList.add('col');
        universelDiv.innerHTML=`
        <div class="card h-100">
        <img src="${elements.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title fw-bold">Features</h5>
          <p class="card-text">1.${elements.features[0] ? elements.features[0]:'Features are not defined'} </p>
          <p class="card-text">2.${elements.features[1] ?elements.features[1]:'Features are not defined'} </p>
          <p class="card-text">3.${elements.features[2] ?elements.features[2]:'Features are not defined'} </p>
        </div>
         <hr>
         <div class="d-flex justify-content-between">
            <div>
                <h4 class="fw-bold px-2">${elements.name}</h4>
                <h4><i class="fa-solid fa-calendar-days px-2"></i>${elements.published_in}</h4>
            </div>
            <div class=" d-flex align-items-center ">

       <button onclick="loadModalDetails(${elements.id}) "  type="button" class="btn btn-link"  data-bs-toggle="modal" data-bs-target="#exampleModal"" ><i class=" fa-solid fa-right-long text-danger mx-5 "></i></button>
            </div>
         </div>
        </div>
        `
        universelContainer.appendChild(universelDiv)
    });
}


// slice and show all image
const showAllBtn = document.getElementById('show-all-btn');
showAllBtn.addEventListener('click', async () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;
  const res = await fetch(url);
  const data = await res.json();
  displayUniverse(data.data.tools); // Show all 12 tools
  showAllBtn.style.display = 'none'; // Hide "show all" button
});


 // modal section call and store the data 

const loadModalDetails = async (id)=>{
   
    const url=(`https://openapi.programming-hero.com/api/ai/tool/${id<10?'0':''}${id}`)
    const res = await fetch(url);
    const data = await res.json();
  
    displayModal(data.data);

     }

const  displayModal=(modal)=>{
  // data load in the modal 1st card
const exampleModalContainer=document.getElementById('card-text');
exampleModalContainer.innerText=modal.description


const monthDetails=document.getElementById('month');
monthDetails.innerText=modal.pricing[0].price 

const contynuedetails=document.getElementById('contynue');
contynuedetails.innerText= modal.pricing[0].plan 


const secondCard=document.getElementById('second-card')
secondCard.innerText=modal.pricing[1].price

const secondCardContinue=document.getElementById('second-card-continue');
secondCardContinue.innerText=modal.pricing[1].plan

const planingCard=document.getElementById('planing');
planingCard.innerText=modal.pricing[2].price

const detailsCard=document.getElementById('details');
detailsCard.innerText=modal.pricing[2].plan



// feature data load
const first=document.getElementById('first');
first.innerText=modal.features[1].feature_name ?modal.features[1].feature_name:'No Data Found';

const second=document.getElementById('second');
second.innerText=modal.features[2].feature_name ? modal.features[2].feature_name:'No Data Found';

const three=document.getElementById('Three')
three.innerText=modal.features[3].feature_name ? modal.features[3].feature_name:'No Data Found';

// data load in the modal 1st card
// Integrations data load
const one=document.getElementById('one');
one.innerText=modal.integrations[0] ? modal.integrations[0]:'No Data Found';

const two=document.getElementById('two');
two.innerText=modal.integrations[1] ?modal.integrations[1]:'No Data Found';

const thierd=document.getElementById('thierd');
thierd.innerText=modal.integrations[2] ?modal.integrations[2]:'No Data Found';


 // data load in the modal 2nd card
 const showImg=document.getElementById('show-img');
 showImg.innerHTML=`
 <img id="show-img"src="${modal.image_link[0]}" class="card-img-top" alt="">
 `
const doingToday=document.getElementById('doing-today');
doingToday.innerText=modal.input_output_examples[0].input

const information=document.getElementById('information');
information.innerText=modal.input_output_examples[0].output



// accuracy section add
const accuracyDiv=document.getElementById('accuracy');
accuracyDiv.innerText=modal.accuracy.score +' '+ 'accuracy';

if (modal.accuracy.score === null) {
    accuracyDiv.style.display = 'none'; // Hide the accuracy div if accuracy score is null
  } else {
    accuracyDiv.innerText = modal.accuracy.score * 100+ '' + '%  Accuracy';
  }

}


universeAi();




