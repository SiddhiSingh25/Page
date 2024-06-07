document.querySelectorAll("select").forEach(element => {
    element.addEventListener("change", () => {
        element.style.outline = "none";
    })
});
document.querySelectorAll("input").forEach(element => {
    element.addEventListener("focus", () => {
        element.style.boxShadow = "inset px px px #B, inset -px -px px #B";
        element.style.outline = "none";
    })
});
document.querySelectorAll("select").forEach(element => {
    element.addEventListener("blur", () => {
        element.style.outline = "none";
    })
});
/*ex*/
const wrapper = document.querySelector("#wrapper"),
    selectBtn = wrapper.querySelector("#select-btn"),
    searchInp = wrapper.querySelector("#input"),
    options = wrapper.querySelector("#options");

    let branch = [
        "P.G. Diploma In Advertising And Public Relation",
        "P.G. Diploma In Bio Technology (Tissue Culture)",
        "P.G. Diploma In Tourism And Travel Management",
        "P.G. Diploma In Textile Design",
        "Industrial Safety",
        "P.G. Diploma In Customer Service Management",
        "P.G. Diploma In Marketing And Sales Management",
        "P.G. Diploma In Beauty And Health Care",
        "P.G. Diploma In Fashion Technology",
        "P.G. Diploma In Retail Management",
        "P.G. Diploma In Accountacy (With Computerised Accounts & Taxation)",
        "P.G. Diploma In Web Designing",
        "P.G. Diploma In Computer Hardware & Networking",
        "P.G. Diploma In Cyber Security",
        "P.G. Diploma In Data Science And Machine Learning",
        "P.G. Diploma In Drone Technology",
        "P.G. Diploma In IOT",
        "P.G. Diploma In Computer Application",
        "Home Science",
        "Library And Information Science",
        "Diploma In Mass Communication",
        "Diploma In Pharmacy",
        "Modern Office Management And Secretarial Practice",
        "Agriculture Engineering",
        "Diploma In Aircraft Maintenance Engineering",
        "Architectural Assistantship",
        "Glass And Ceramic Engineering",
        "Chemical Technology (Fertilizer)",
        "Chemical Technology (Rubber And Plastic)",
        "Civil Engineering",
        "Civil Engineering (Environment & Pollution Control)",
        "Fashion Designing & Garment Technology",
        "Dairy Engineering",
        "Electrical Engineering",
        "Electrical Engineering (Industrial Control)",
        "Electronics Engineering",
        "Electronics Engineering (Modern Consumer Electronics)",
        "Electronics Engineering (Advance Microprocessor & Interface)",
        "Electronics Engineering (Micro Electronics)",
        "Electrical And Electronics Engineering",
        "Leather Technology Footwear (Computer Aided Shoe Design)",
        "Diploma In Hotel Management And Catering Technology",
        "Instrumentation And Control",
        "Interior Design And Decoration",
        "Leather Technology (Tanning)",
        "Mechanical Engineering (Automobile)",
        "Mechanical Engineering (Computer Aided Design)",
        "Mechanical Engineering (Production)",
        "Mechanical Engineering (Refrigeration & Airconditioning)",
        "Mechanical Engineering (Maintenance)",
        "Textile Chemistry",
        "Textile Design",
        "Textile Design (Textile Printing)",
        "Textile Technology",
        "Chemical Engineering",
        "Chemical Engineering (Petro Chemical)",
        "Computer Science And Engineering",
        "Information Technology",
        "Diploma In Paint Technology",
        "Diploma In Plastic Mould Technology",
        "Diploma In Aircraft Maintenance Engineering (Avionics)",
        "Helicopter And Power Plant Engineering",
        "Electronics & Communication Engineering",
        "Carpet Technology",
        "Food Technology",
        "Paper And Pulp Technology",
        "Textile Engineering",
        "Mining Engineering",
        "Mechanical Engineering",
        "Civil And Environment Engineering",
        "Communication And Computer Networking",
        "Renewable Energy",
        "Apparel Design And Fashion Technology",
        "Costume Design And Garment Technology",
        "Craft Technology",
        "Printing Technology",
        "Tool And Mould Making"
    ];
    

function addBranch(selectedBranch) {
    options.innerHTML = "";
    branch.forEach(Branch => {
        let isSelected = Branch == selectedBranch ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${Branch}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addBranch();
function updateName(selectedLi) {
    searchInp.value = "";
    addBranch(selectedLi.innerText);
    wrapper.classList.remove("active");
    document.querySelector(".alpha").innerText = selectedLi.innerText;
    selectBtn.firstElementChild.style.whiteSpace = "nowrap";
    selectBtn.firstElementChild.style.overflowX = "auto";
    selectBtn.firstElementChild.style.overflowY = "hidden";
    selectBtn.firstElementChild.style.fontSize = "1.17vw";
    selectBtn.firstElementChild.style.fontWeight = "500";
}

searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = branch.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let alpha = document.querySelector(".alpha");
        let isSelected = data == alpha.innerText ? "selected" : "";
        return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<div class="box">Oops! not found</div>`;
});
selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
//college
let college = [
    "Government Polytechnic,Jansath, Muzaffar Nagar",
    "Government Polytechnic,Kutana, Baraut, Baghpat",
    "Government Girls Polytechnic, Arniya,Bulandshahar",
    "Government Polytechnic, Ghaziabad",
    "Km Mayawati Government Girls Polytechnic, Badalpur, Gautambuddha Nagar",
    "Seth Gangasagar Jatia Polytechnic, Khurja, Bulandshahar",
    "Government Polytechnic, Saharanpur",
    "Savitribai Phule Government Girls Polytechnic, Kumarhera, Saharanpur",
    "Government Polytechnic, Moradabad",
    "Government Girls Polytechnic, Moradabad",
    "Government Polytechnic, Bijnore",
    "Government Polytechnic, Rampur",
    "Government Polytechnic, Mainpuri",
    "Government Polytechnic, Soron, Kasganj",
    "Government Girls Polytechnic, Shamli",
    "Government Leather Institute, Agra",
    "Government Polytechnic, Firozabad",
    "Ch. Mukhtar Singh Government Girls Polytechnic Daurala,Meerut",
    "Mahamaya Polytechnic of Information Technology, Mahamaya Nagar, Hathras",
    "Mahamaya Polytechnic of Information Technology, Amroha",
    "Government Polytechnic,Sardhana,Meerut (Ppp Mode)",
    "Government Polytechnic, Shamsabad, Agra",
    "Government Polytechnic,Thakurdwara, Moradabad",
    "Government Polytechnic,Kishni, Mainpuri",
    "Government Polytechnic,Chamrauwa,Rampur",
    "Government Polytechnic, Katai Joya, J P Nagar",
    "Government Polytechnic,Tundla, Firozabad",
    "Government Polytechnic, Changipur, Noorpur, Bijnore",
    "Government Polytechnic, Mankera, Agra",
    "Government Polytechnic, Sutawali, Amroha",
    "Government Polytechnic, Sikandararao, Etah",
    "Government Polytechnic, Shahabad, Rampur",
    "Government Polytechnic, Chhachha, Bhogaon, Mainpuri",
    "Government Polytechnic , Chandausi , Moradabad",
    "Government Polytechnic Mawana Khurd Meerut",
    "Government Polytechnic. Kirthal,Chaprauli, Baghpat",
    "Government Polytechnic Kotvan Mathura",
    "Government Polytechnic Dibai Bulandshahe",
    "Mahamaya Polytechnic of Information Technology Aligarh",
    "M M I T, Shamli",
    "Government Polytechnic,Hindalpur,Dhahlana,Hapur",
    "M M I T, Kaasganj",
    "Government Girls Polytechnic, Lucknow",
    "Government Polytechnic, Bachhrawan, Rai Bareli",
    "Government Polytechnic, Lucknow",
    "Government Polytechnic, Ayodhya",
    "Aryikagyanwati, Government Girls Polytechnic, Ayodhya",
    "Chhatrapati Shahuji Maharaj GovernmentPoly. Ambedkarnagar",
    "Government Polytechnic, Barabanki",
    "Government Polytechnic, Gonda",
    "Government Polytechnic, Bahraich",
    "Government Girls Polytechnic, Amethi",
    "Government Polytechnic, Unnao",
    "Government Polytechnic, Hardoi",
    "Government Polytechnic, Lakhimpur Kheri",
    "Government Polytechnic, Bareilly",
    "Government Girls Polytechnic, Bareilly",
    "Government Polytechnic, Budaun",
    "Government Polytechnic, Pilibhit",
    "Government Polytechnic, Shahjahanpur",
    "Sanjay Gandhi Government Polytechnic, Jagdishpur, Amethi",
    "Government Polytechnic, Kursi Road, Fatehpur, Barabanki",
    "Government Polytechnic, Aadampur, Tarabganj, Gonda",
    "Government Polytechnic, Mohammadpur, Bahraich",
    "Tathagat Gautam Buddha Government Polytechnic, Shravasti",
    "Chhatrapati Sahuji Maharaj Government Polytechnic, Balrampur",
    "Government Polytechnic, Alapur, Budaun",
    "Government Polytechnic, Deeh, Sadar, Unnao",
    "Government Polytechnic, Puwayan, Shahjahanpur",
    "Government Polytechnic,Baijpur,Bhiti,Ambedkar Nagar",
    "Government Polytechnic Kenaura Sultanpur",
    "Mahamaya Polytechnic of Information Technology Sharavasti",
    "Government Polytechnic Aliya Sitapur",
    "Government Polytechnic Pooranpur Pilibhit",
    "Government Polytechnic Bigapur Unnao",
    "Government Polytechnic,Mohammadi, Lakhimpur Kheri",
    "Government Girls Polytechnic,Tilhar,Shahjahanpur",
    "Government Polytechnic,Jamunia Deeh,Harakh,Barabanki",
    "Government Girls Polytechnic,Risiya,Nanpara,Baharaich",
    "Government Polytechnic,Sumda,Sahaswan, Budaun",
    "Government Polytechnic, Baheri,Bareilly",
    "Government Polytechnic, Kanpur",
    "Government Polytechnic,Kulpahad, Mahoba(Ppp Mode)",
    "Government Polytechnic, Jhansi",
    "Verangana Jhalkaribai Government Girls Polytechnic, Jhansi",
    "Government Polytechnic, Etawa",
    "Government Polytechnic, Orai (Jalaun)",
    "Government Polytechnic, Banda",
    "Government Polytechnic, Farrukhabad",
    "Government Leather Institute, Kanpur",
    "Government Polytechnic, Ghatampur, Kanpur",
    "Government Polytechnic, Lalitpur",
    "Government Polytechnic, Mahoba",
    "Government Girls Polytechnic, Charkhari Mahoba",
    "Government Polytechnic, Madhogarh Jalaun",
    "Government Polytechnic, Naraini, Banda",
    "Government Polytechnic, Manikpur, Chitrakoot",
    "Government Polytechnic, Hamirpur",
    "Baba Saheb Bheemrao Ambedkar Govt Polytechnic, Auraiyya",
    "Manyawar Kanshiram Government Polytechnic, Kannauj",
    "Government Polytechnic, Sikandara, Kanpur Dehat",
    "Government Polytechnic, Bargarh, Chitrakoot",
    "Government Polytechnic, Talbehat, Lalitpur",
    "Government Polytechnic,Sarsai,Rath, Hamirpur",
    "Mahamaya Polytechnic of Information Technology Kanpur Dehat",
    "Mahamaya Polytechnic of Information Technology Auraiya",
    "Mahamaya Polytechnic of Information Technology Kannouj",
    "Northern Regional Inst. of Printing Tech. Allahabad",
    "Government Polytechnic, Atrauliya, Azamgarh ( Run By Aicceds ) Vill-Makraha Tehsil-Atraulia Budhanpur Azamgarh ( P P P Model)",
    "Government Girls Polytechnic, Varanasi",
    "Government Polytechnic, Fatehpur",
    "Government Polytechnic, Basti",
    "Government Polytechnic, Gorakhpur",
    "Government Girls. Polytechnic, Gorakhpur",
    "Government Girls Polytechnic, Allahabad",
    "Government Girls Polytechnic, Meza, Allahabad",
    "Government Polytechnic, Deoria",
    "Government Polytechnic, Gazipur",
    "Savitribai Phule Government Polytechnic Azamgarh",
    "Government Polytechnic, Jaunpur",
    "Government Polytechnic, Mirzapur",
    "Government Polytechnic, Pratapgarh",
    "Government Girls Polytechnic, Ballia",
    "Mahatama Jyotibaphule Government Polytechnic, Kaushambi",
    "Government Polytechnic, Mau",
    "Mahamaya Polytechnic of Information Technology, Hariharpur, Gorakhpur",
    "Mahamaya Polytechnic of Information Technology Chandauli",
    "Government Polytechnic, Sonbhadra",
    "Mahakarunik Tathagat Gautam Buddha Government Polytechnic, Siddhartha Nagar",
    "Government Polytechnic, Aurai, Ugapur, Bhadohi Road, Sant Ravidas Nagar",
    "Government Polytechnic, Bhilihili, Azamgarh",
    "Government Polytechnic, Premdhar Patti, Raniganj, Pratapgarh",
    "Government Polytechnic, Kuru Pindra, Varanasi",
    "Government Polytechnic, Chabilaha, Khor, Sadar , Basti",
    "Government Polytechnic, Jigirsand, Sikandarpur, Ballia",
    "Mahamaya Polytechnic of Information Technology Kushinagar",
    "Mahamaya Polytechnic of Information Technology Maharajganj",
    "Government Polytechnic Sinduria Sonbhadra",
    "Government Polytechnic Chopan Sonbhadra",
    "Government Polytechnic Rajgarh Mirzapur",
    "Government Polytechnic Chunar Mirzapur",
    "Mahamaya Polytechnic of Information Technology Santkabirnagar",
    "Mahamaya Polytechnic of Information Technology Sidharthanagar",
    "Mahamaya Polytechnic of Information Technology Kausambhi",
    "Government Polytechnic Bindki Fatehpur",
    "Government Polytechnic Santkabir Nagar",
    "Government Polytechnic Chariyaon Devria",
    "Sant Ravidas Government Polytechnic, Chakia, Chandauli",
    "Government Polytechnic,Mujhana ,Hata, Kushinagar",
    "Government Polytechnic,Purena,Sadar,Maharajganj",
    "Janta Polytechnic, Jahangirabad, Bulandshahar",
    "D N Polytechnic, Meerut",
    "D J Polytechnic, Baraut, Baghpat",
    "Gandhi Polytechnic, Muzaffar Nagar",
    "M G Polytechnic, Hathras",
    "Raja Balwant Singh Polytechnic, Bichpuri, Agra",
    "P M V Polytechnic, Mathura",
    "Sri Anardevi Khandelwal Mahila Polytechnic, Mathura",
    "Lucknow Polytechnic, Lucknow",
    "Hewett Polytechnic, Lucknow",
    "Firoze Gandhi Polytechnic, Raibareli",
    "Jawahar Lal Nehru Polytechnic, Mahmoodabad, Sitapur",
    "Dr Ambedkar Inst. of Tech. for Handicapped Kanpur",
    "Sri Ramdevi Ramdayal Tripathi Girls Polytechnic, Kanpur",
    "Maharana Pratap Polytechnic Gorakhpur",
    "Town Polytechnic Ballia",
    "Chandauli Polytechnic, Chandauli",
    "Handia Polytechnic Handia, Allahabad"
];
//College Name
const wrapper1 = document.querySelector("#wrapper1"),
    selectBtn1 = wrapper1.querySelector("#select-btn1"),
    searchInp1 = wrapper1.querySelector("#input1"),
    options1 = wrapper1.querySelector("#options1");
function addCollege(selectedCollege) {
    options1.innerHTML = "";
    college.forEach(elm => {
        let isSelected = elm == selectedCollege ? "selected" : "";
        let li = `<li onclick="updateName1(this)" class="${isSelected}">${elm}</li>`;
        options1.insertAdjacentHTML("beforeend", li);
    });
}
addCollege();
function updateName1(selectedLi) {
    searchInp1.value = "";
    addCollege(selectedLi.innerText);
    wrapper1.classList.remove("active");
    selectBtn1.firstElementChild.innerText = selectedLi.innerText;
    selectBtn1.firstElementChild.style.whiteSpace = "nowrap";
    selectBtn1.firstElementChild.style.overflowX = "auto";
    selectBtn1.firstElementChild.style.overflowY = "hidden";
    selectBtn1.firstElementChild.style.fontSize = "1.17vw";
    selectBtn1.firstElementChild.style.fontWeight = "500";
}

searchInp1.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp1.value.toLowerCase();
    arr = college.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
        let isSelected = data == selectBtn1.firstElementChild.innerText ? "selected" : "";
        return `<li onclick="updateName1(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options1.innerHTML = arr ? arr : `<div class="box">Oops! Not found</div>`;
});
selectBtn1.addEventListener("click", () => wrapper1.classList.toggle("active"));

let userName = document.querySelector("#name").value;
let teacher = document.querySelector("#teacher").value;
let subject = document.querySelector("#subject").value;
let submit = document.querySelector(".submit-button");
let session = document.querySelector("#session");
let e1 = document.querySelector(".alpha").value;
let e2 = document.querySelector(".alpha1").value;
let year = document.querySelector("#yearSem").value;
submit.addEventListener("click", () => {
    if (year === "select" || e1 === "Select Branch" || e2 === "Select College") {
        alert("All Fields are required!");
    }
})
