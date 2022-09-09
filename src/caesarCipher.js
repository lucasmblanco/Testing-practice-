const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');


const caesarCipher = function(el, number){
        let arr = []; 
        let letter = el.toLowerCase()

         if(letter.length > 1){
            let i = 0; 
            let wordLength = letter.length;
            while(i <= wordLength - 1){ 
            arr.push(caesarCipher(letter[i], number));
            i++
            }
        } 
        else if(alphabet.indexOf(letter) === -1) return el; 
        else if(alphabet.indexOf(letter) + number >= 26) return alphabet[(alphabet.indexOf(letter) + number) - 26]; 



        return arr.length > 0 ? arr.join("") : alphabet[alphabet.indexOf(letter) + number]; 
}

export default caesarCipher