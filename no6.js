const char = "0";

function divideSort (deret) {
    if(typeof deret !== "number") {
        console.log(deret + " bukan merupakan deret angka");
    } else {
        const divideDeret = deret.toString().split(char)
        const sortSegment = divideDeret.map(segment => {
            return segment.split(``).sort((a,b) => a-b).join(``)
        })
        const sortedSegment = sortSegment.join(``)
        const result = parseInt(sortedSegment)
        console.log(result);
    }
}

divideSort(3643407766072394)