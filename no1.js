function fetchData (status) {
    return new Promise(function (resolve, reject) {
        setTimeout (function() {
            if(status === true) {
                resolve("Data berhasil diambil")
            } else {
                reject("Gagal mengambil data")
            }
        }, 3000)
    })
}

// a. then catch 
fetchData(true).then(status => {
    console.log("Data berhasil diambil");
}).catch (er => {
    console.log(er);
})

//b. try catch
async function getData() {
    try {
        const hasil = await fetchData(true)
        console.log(hasil);
    } catch (er) {
        console.log(er);
    }
}
getData();