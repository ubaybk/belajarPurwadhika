// class Person {
//     constructor (nama){
//         console.log(`${nama} keren`);

//     }

// }
// const panggil = new Person("bayu")
// console.log(panggil)

// const tes = new Person("RIZAL")
// console.log(tes)

// //property di class

// class Property {
//     constructor (name, kelas) {
//         this.name = name;
//     }
//     kelas(name){
//         console.log (`haloo ${name} nama kamu ${this.kelas}` )
//     }
// }
// const budi = new Property("anggi",3)
// budi.kelas = 3
// console.log(budi)


//inheritance

class Employee {
    sayHello (nama){
        console.log(`Hello ${nama}, My name is employee ${this.nama}`)
    }
}

class Manager extends Employee {
    sayHello(nama){
        this.nama = nama;
    }
}
const budi = new Employee();
budi.nama = budi;
budi.sayHello = ("joko")


//
class Siswa {
    namaSekolah = "SDN 06 SRENGSENG SAWAH";
    constructor (nama){
        console.log(`inisialisasi data ${nama}`)
        this.nama = nama;
    }
    halo (){
        console.log (`halo nama saya ${this.nama} saya sekolah di ${this.namaSekolah}`)
    }
}

const teman1 = new Siswa("tono")
teman1.halo()


//inheritance
class Hewan {
    constructor(nama, nama2){
        this.nama = nama;
        this.nama2 = nama2
    }

    jalan(){
        console.log(`berjalan`)
    }
}
const hasil = new Hewan ("ayam", "kodok");
console.log(hasil)

//class declaration
class User {
    nama1 ;
    kelas1 ;
    #email ;

    constructor(nama1, kelas1, email){
        this.nama1 = nama1
        this.kelas1 = kelas1
        this.#email = email
    }
    ucapkan (){
        return (`halo nama saya ${this.nama1} saya dari kelas ${this.kelas1} email saya ${this.#email}`)
    }

    get ucapkanEdit (){
        return `${this.nama1} ${this.#email}` 
    }

    set ucapkanEdit (value){
        if (typeof value !== "rizal"){
            throw new Error("nama harus string")
        }
        this.nama1 = value;
        // const split = value.split(" ");
        // console.log(split)
        // this.nama1 = split[0]
        // this.#email = split[1]
    }

    
};
const user = new User("bayu", 9, "bayu@gmail.com") ;
console.log(user)
console.log(user.ucapkan())
console.log(user.ucapkanEdit)
console.log(user.nama1, user.kelas1)
console.log(user.ucapkanEdit)

const user1 = new User("erik", 10) ;
console.log(user1.ucapkan())

console.log(user1.kelas1)


//inheritance
class Produk {
    namaProduk;
    hargaProduk;

    constructor(){
        this.namaProduk;
        this.hargaProduk;
    }
}

class Buku extends Produk {
    penerbit;

    constructor(){
        super();
        this.penerbit ;
    }

    getPenerbit(){
        return this.penerbit;
    }

    setPenerbit(value){
        this.penerbit = value
    }
}

class JenisSepatu extends Buku {
    constructor(){
        super();
        this.jenisSepatu;
    }

    getJenisSepatu(){
        return this.jenisSepatu;
    }

    setJenisSepatu(value1){
        this.jenisSepatu = value1
    }

    kalimat(){
        return (`haloo ada ${this.namaProduk} dengan harga ${this.hargaProduk} dikeluarkan oleh ${this.penerbit}`)
    }
}



const buku = new Buku ()
buku.setPenerbit ("airlangga")
buku.namaProduk = "kijang"
buku.hargaProduk ="1000"
console.log(buku)

const jenissepatu = new JenisSepatu()
jenissepatu.namaProduk = "Rusa";
jenissepatu.hargaProduk = "1000";
jenissepatu.penerbit = "yudistira";
jenissepatu.setJenisSepatu ("pantopel")
console.log(jenissepatu)

console.log(jenissepatu.kalimat())
//pertanyaan
// extends harus ada get dan setter
// apakah bisa input lewat parameter buku
// jika e

//latiahan fizzbuzz

function fizzBuzz (n){
    let result =[];
    
    for (let a = 1; a <= n; a++){
        let tampung= ""
        if (a % 3 === 0){
            tampung = "fizz" + tampung
            //  console.log(tampung)
        } if (a % 5 === 0) {
            tampung = "buzz" + tampung 
            console.log(tampung) 
        } 
        
        result.push(tampung || a);
    }
   return result;
}

let n = 10
const output = fizzBuzz(n);
console.log(output);



for (let i = 1; i <= 5; i++) {
    let output = "";
    if (i % 3 === 0) {
        output += "fizz";
    }
    if (i % 5 === 0) {
        output += "buzz";
    }
    console.log(output || i);
}


//Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}

function lha (arr){
    let min = arr[0]
    let max = arr[0]
    for (let a1 = 0; a1 < arr.length; a1++){

        if (arr[a1] < min){
            min = arr[a1]
        }console.log(min)

        if (arr[a1] > max){
            max = arr[a1]
        }console.log(max)
       
    }
    return {
        min,
        max
    }
}
const nilai1 = [12,5,23,18,4,45,32]

const hasil1 = lha(nilai1);
console.log(hasil1);

// bayu
