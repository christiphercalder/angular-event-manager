import { FormControl } from "@angular/forms";

/**
 * Custom validator
 * 
 * @param words -an array of the words that you wish to be restricted 
 */
export function restrictedWords(words){
    return (control:FormControl): {[key: string]: any} => {
        if (!words) return null
            
        var invalidWords = words.map(w => control.value.includes(w) ? w:null)
                                .filter(w => w != null)

        return invalidWords && invalidWords.length > 0
            ? {'restrictedWords': invalidWords.join(', ')}
            : null
    }
}