function kalimat (sentence) {
    const char = " ";
    const reverseSentence = sentence.split(char).reverse().join(char)
    console.log(reverseSentence);
}
kalimat("Saya Belajar Javascript dan HTML")