// 1. Tahun kabisat
const checkLeapYear = (year) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            const inputYear = year % 4 === 0;
            if(inputYear){
                resolve(year)
            } else{
                reject("Bukan tahun kabisat")
            }
        },2000)
     })
}


// then catch
checkLeapYear('2024').then(year => {
    console.log(`${year} adalah tahun kabisat`);
}).catch (er => {
    console.log(er);
})

// async await
async function cekKabisat() {
    try {
        const hasilKabisat = await checkLeapYear('2022')
        console.log(hasilKabisat);
    } catch (er) {
        console.log(er);
    }
}
cekKabisat();


// 2. Bulan yang memiliki 31 hari
const checkMonth = (month) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            const dataMonth = ['Januari', 'Maret', 'Mei', 'Juli',
                'Agustus', 'Oktober', 'Desember'];
            const showDataMonth = dataMonth.map (data => data.toLowerCase());
            const input = month.toLowerCase();
            let check = showDataMonth.find((data) => {
                return data === input
            })
            if(check){
                resolve(month)
            } else{
                reject("Bulan ini tidak memiliki 31 hari")
            }
        },3000)
     })
}

// then catch 
checkMonth('Mei').then(month => {  
    console.log(`Bulan ${month} memiliki 31 hari`);
}).catch (er => {
    console.log(er);
})

// async await
async function cekBulan() {
    try {
        const hasilBulan = await checkMonth('Februari')
        console.log(hasilBulan);
    } catch (er) {
        console.log(er);
    }
}
cekBulan();