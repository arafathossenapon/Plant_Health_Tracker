let thrivingList = [];
let strugglingList = [];
let currentStatus =[];

let total = document.getElementById('total');
let thrivingCount = document.getElementById('thrivingCount');
let strugglingCount = document.getElementById('strugglingCount');

const allCardSection = document.getElementById("allCards");
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');

const allFilterBtn = document.getElementById('all-filter-btn');
const thrivingFilterBtn = document.getElementById('thriving-filter-btn');
const strugglingFilterBtn = document.getElementById('struggling-filter-btn');


function getTotalCount() {
    total.innerText = allCardSection.children.length;
    thrivingCount.innerText = thrivingList.length;
    strugglingCount.innerText = strugglingList.length;

}

getTotalCount()



function toggleStyle(id) {

    allFilterBtn.classList.add('bg-gray-200', 'text-black');
    thrivingFilterBtn.classList.add('bg-gray-200', 'text-black');
    strugglingFilterBtn.classList.add('bg-gray-200', 'text-black');

    allFilterBtn.classList.remove('bg-black', 'text-white');
    thrivingFilterBtn.classList.remove('bg-black', 'text-white');
    strugglingFilterBtn.classList.remove('bg-black', 'text-white');



    const selected = document.getElementById(id);
    currentStatus= id;


    selected.classList.remove('bg-gray-200', 'text-black');
    selected.classList.add('bg-black', 'text-white')

    if (id == 'thriving-filter-btn') {
        allCardSection.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderThriving()
    }
    else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
    else if(id == 'struggling-filter-btn'){
        allCardSection.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderStruggling()
    }


}

mainContainer.addEventListener('click', function (event) {



    if (event.target.classList.contains('thriving-btn')) {
        const parenNode = event.target.parentNode.parentNode;

        const plantName = parenNode.querySelector('.plantName').innerText;
        const latinName = parenNode.querySelector('.latinName').innerText;
        const light = parenNode.querySelector('.light').innerText;
        const water = parenNode.querySelector('.water').innerText;
        const status = parenNode.querySelector('.status').innerText;
        const notes = parenNode.querySelector('.notes').innerText;

        parenNode.querySelector('.status').innerText = "Thriving"

        const cardInfo = {
            plantName,
            latinName,
            light,
            water,
            status: 'Thriving',
            notes
        }
        // console.log(cardInfo)
        const plantExits = thrivingList.find(item => item.plantName == cardInfo.plantName)

        if (!plantExits) {
            thrivingList.push(cardInfo);
        }
        strugglingList = strugglingList.filter(item=>item.plantName!=cardInfo.plantName)
        if(currentStatus == 'struggling-filter-btn'){
            renderStruggling()
        }
        //console.log(thrivingList);

        getTotalCount()
    }
    else if (event.target.classList.contains('struggling-btn')) {
        const parenNode = event.target.parentNode.parentNode;

        const plantName = parenNode.querySelector('.plantName').innerText;
        const latinName = parenNode.querySelector('.latinName').innerText;
        const light = parenNode.querySelector('.light').innerText;
        const water = parenNode.querySelector('.water').innerText;
        const status = parenNode.querySelector('.status').innerText;
        const notes = parenNode.querySelector('.notes').innerText;

        parenNode.querySelector('.status').innerText = "Struggling"

        const cardInfo = {
            plantName,
            latinName,
            light,
            water,
            status: 'Struggling',
            notes
        }
        // console.log(cardInfo)
        const plantExits = strugglingList.find(item => item.plantName == cardInfo.plantName)

        if (!plantExits) {
            strugglingList.push(cardInfo);
        }
        //console.log(thrivingList);
        thrivingList = thrivingList.filter(item=>item.plantName!=cardInfo.plantName)
        if(currentStatus == 'thriving-filter-btn'){
            renderThriving()
        }
        getTotalCount()
    }
})



function renderThriving() {
    filterSection.innerHTML = '';

    for (let thrive of thrivingList) {
        console.log(thrive)
        let div = document.createElement('div');
        div.className = "flex justify-between border p-6";
        div.innerHTML = `
        <div class="space-y-6">
                    <div>
                        <h3 class="plantName text-3xl">${thrive.plantName}</h3>
                        <p class="latinName">Latin Name</p>
                    </div>
                    <div class="flex gap-4">
                        <p class="light bg-gray-200 px-3 py-1">Bright Indicate</p>
                        <p class="water bg-gray-200 px-3 py-1">Weekly</p>
                    </div>
                    <p class="status">${thrive.status}</p>
                    <p class="notes"> New leaf unfurling by the east window.</p>
                    <div class="flex gap-5">
                        <button class="thriving-btn bg-green-200 px-4 py-2">Thrive</button>
                        <button class="struggling-btn bg-red-200 px-4 py-2">Struggle</button>
                    </div>
                </div>
        `
        filterSection.appendChild(div);
    }
}

function renderStruggling() {
    filterSection.innerHTML = '';

    for (let struggle of strugglingList) {
        console.log(struggle)
        let div = document.createElement('div');
        div.className = "flex justify-between border p-6";
        div.innerHTML = `
        <div class="space-y-6">
                    <div>
                        <h3 class="plantName text-3xl">${struggle.plantName}</h3>
                        <p class="latinName">Latin Name</p>
                    </div>
                    <div class="flex gap-4">
                        <p class="light bg-gray-200 px-3 py-1">Bright Indicate</p>
                        <p class="water bg-gray-200 px-3 py-1">Weekly</p>
                    </div>
                    <p class="status">${struggle.status}</p>
                    <p class="notes"> New leaf unfurling by the east window.</p>
                    <div class="flex gap-5">
                        <button class="thriving-btn bg-green-200 px-4 py-2">Thrive</button>
                        <button class="struggling-btn bg-red-200 px-4 py-2">Struggle</button>
                    </div>
                </div>
        `
        filterSection.appendChild(div);
    }
}