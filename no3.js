function fazzfood (harga, voucher, jarak, pajak) {
    console.log("Harga : " + harga);
    let pesanan = harga
    let potongan = 0
    let ongkir = 5000
    let tax = 0

    if (voucher === "FAZZFOOD50") {
        if (harga < 50000) {
            potongan = 0
        }
        else {
            potongan = harga * 0.5;
            if (potongan > 50000) {
                potongan = 50000
            } 
        }
    } else if (voucher === "DITRAKTIR60") {
        if (harga < 25000) {
            potongan = 0
        }
        else {
            potongan = harga * 0.6;
            if (potongan > 30000) {
                potongan = 30000
            }
        }
    } console.log("Potongan : " + potongan);

    if (jarak > 2) {
        ongkir = 5000 + (jarak - 2) * 3000;
    } console.log("Biaya antar : " + ongkir);
    
    if (pajak = true) {
        tax = pesanan * 0.05;      
    } console.log("Pajak : " + tax);

    const total = pesanan - potongan + ongkir + tax;
    console.log("Subtotal : " + total);
}

fazzfood(75000,"FAZZFOOD50",5,true)