function getDataFromServer(status,callback) {
    setTimeout(function() {
        if(status) {
            callback(['product 1', 'product 2', 'product 3'], null)
        } else {
            const err = new Error('Failed to fetch data')
            err.name = 'Error'
            callback(null,err)
        }
    }, 3000)
}

//function callback
const processData = (productStatus) => { 
    const status = productStatus
    getDataFromServer(status, (data,err) => {
        try {
            if (err) {
                throw err
            } else {
                console.log(data) 
                //output berhasil
            }
        } catch (err) {
            console.log(err.name) 
            //output error
        }
    })
}
processData("status")