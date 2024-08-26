let mhs = {
    name: "Ayyub",
    age: 20,
    major: "TRPL",
    skills: ['sysadmin', 'OOP', 'Design'],
    poor: true, //bacot
}

let mhs2 = {
    name: "Arsy",
    age: 22,
    major: "TRPL",
    skills: ['sysadmin', 'OOP'],
    poor: true, //bacot
}

let mhs3 = {
    name: "Rafif",
    age: 24,
    major: "TRPL",
    skills: ['sysadmin'],
    poor: true, //bacot
}

// if else block
// console.log('Mahasiswa boleh daftr :' , mhs.age > 17); // true

// if (mhs.major == "TRMG") {
    // console.log(mhs.name + " Jurusan TRKJ");
// } else if (mhs.major == "TRKJ") {
    // console.log(mhs.name + "Jurusan TRKJ");
// } else if (mhs.major == "TRPL") {
    // console.log(mhs.name + " Jurusan TRPL");
// } else {
    // console.log(mhs.name + " Jurusan " + mhs.major);
// }

// Ternary
// console.log(mhs.major == "TRPL" ? mhs.name + " Jurusan TRPL" : mhs.name + "Bukan TRPL")

//Swicth Case
// switch (mhs.major) {
    // case "TRKJ":
        // console.log(mhs.name + " Jurusan TRKJ");
        // break;
    // case "TRMG":
        // console.log(mhs.name + " Jurusan TRKJ");`
        // break;
//     case "TRPL":
//         console.log(mhs.name + " Jurusan TRPL");
//         break;
//     default:
//         console.log(mhs.name + " Bukan anak IDN");
       
// }

// Conditional Function
// Kriteria : umur kurang dari 21, Bacot, skill lebih dari 2
function cekKelulusan (peserta) {
    let age = mhs.age;
    let bacot = mhs.poor;
    let skills = mhs.skills;
    if (age < 21 && bacot == true && skills.length > 2) {
        console.log(peserta.name + " Telah lulus ")
     // Pesrta lulus
    } else if (age > 21  || poor == true && skills.length > 2) {
        console.log(peserta.name + " Hampir lulus ")
     // Peserta hampir lulus
    } else {
        console.log(peserta.name + " Tidak lulus ")
     // Peserta tidak lulus
    }

}

cekKelulusan(mhs);
cekKelulusan(mhs2);
cekKelulusan(mhs3);