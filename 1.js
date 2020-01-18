var address = 'Puri Telukjambe, Karawang';
var hobbies = ['Travelling', 'Playing Guitar', 'Coding'];
var is_married = false;
var list_school = {
    name : 'Universitas Amikom Yogyakarta',
    year_in : 2013,
    year_out : 2017,
    major : 'Sarjna'
}
var skills = [
    {
        skill_name : 'Web Development',
        level : 'Beginner',
    },
    {
        skill_name : 'UI and UX Design',
        level : 'Advanced',
    },
    {
        skill_name : 'Graphic Design',
        level : 'Advanced',
    }
];
var interest_in_coding = true;

function biodata(nama, umur){
    var myBio = {};

    if(is_married == false){
        is_married = 'Belum Menikah';
    }else{
        is_married = 'Sudah Menikah';
    }

    if(interest_in_coding == false){
        interest_in_coding = 'Tidak';
    }else{
        interest_in_coding = 'Ya';
    }

    myBio.nama = nama;
    myBio.umur = umur;
    myBio.address = address;
    myBio.hobbies = hobbies;
    myBio.is_married = is_married;
    myBio.list_school = list_school;
    myBio.skills = skills;
    myBio.interest_in_coding = interest_in_coding;

    return console.log(JSON.stringify(myBio)); 
}

var bio = biodata('Galih Anggriawan', 24);