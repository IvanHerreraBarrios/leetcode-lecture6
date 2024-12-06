//290
var wordPattern = function(pattern, s) {
    const words = s.split(" ")
    if (pattern.length !== words.length) return false
    const map = {}
    const uniqueWords = new Set()
    for (let i = 0; i < pattern.length; i++){
        const char = pattern[i]
        const wordInMap = map[char]

        if (wordInMap && wordInMap !== words[i]) {
            return false
        } else if (!wordInMap){
            const word = words[i]
            if(uniqueWords.has(word)) return false
            
            map[char] = word
            uniqueWords.add(word)
        }
    }
    return true
};