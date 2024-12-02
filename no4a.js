function palindrome (word) {
    const splitChara = word.split(``)
    const reverseChara = splitChara.reverse().join(``)
    
        if (word === reverseChara) {
            console.log(word + " adalah palindrom");
        } else {
            console.log(word + " bukan palindrom");
        }
    }
    palindrome("malam")
    palindrome("siang")