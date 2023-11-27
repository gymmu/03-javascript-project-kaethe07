export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if (currentElement === 'e') {
      result.push("")
      //Wenn das aktuelle Zeichen ein 'E' ist, hänge nicht an die Liste an
    } else if ( currentElement === 'E') {
      result.push("")
    }else { //Das aktuelle Zeichen ist weder ein 'e' noch ein 'E', hänge also das aktuelle Zeichen
        result.push(currentElement)
      } 
  }
  return result.join("")
}

export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    //Wandle das aktuelle Element in einen Grossbuchstaben um
    const capitalizedElement = currentElement.toUpperCase()

    //Hänge den Grossbuchstaben an das Resultat an...
    result.push(capitalizedElement)

  }
  return result.join("")

}

export function aufgabe03(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Soll nur ein 'e' enthalten
if (currentElement === 'e'){
  count = count + 1
}
 
// Soll grosses 'E' zählen
else if (currentElement === 'E'){
  count = count + 1
}
  }
  return count
}

export function aufgabe04(args) {
  const input = args
  const result = []
  let count = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    //Soll mit alle Sonderzeichen umhalten
if (currentElement === '.'){
  count = count - 1
}
 
// Sollte Zahlen als Wörter zählen
else if (currentElement === '.'){
  count = count - 1
}
  }
  return count
}


  export function aufgabe05(args) {
    const input = args
    const result = []
  let capitalLetters = 0
   
  //Enthaltet keine Grossbuchstaben
    for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
   
   
  if (currentElement === ".") {
    //Macht nichts
  }else if (currentElement === " "){
    //Ignoriere Leerschläge
   
  }else if (currentElement !== currentElement.toLowerCase()) {
    capitalLetters++
  }
    }
   
  if (capitalLetters > 0) {
    return true
  }else {
    return false
  }
   
    return true
  }

  export function aufgabe06(args) {
    const input = args;

  //Enthaltet keine Grossbuchstaben
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i] ;
    const ascii = currentElement.charCodeAt(0)

    if (65 <= ascii && ascii <= 90) {
      //Prüft, ob es sich um eine Grossbuchstabe handelt
    } else if (97 <= ascii && ascii <=122) {
      //Prüft, ob es sich um eine Kleinbuchstabe handelt
    } else if (currentElement === ' ') {
    }else {
      return true
    }
  }
  return false
}

    export function aufgabe07(args) {
      const input = args.split (' ');

      for (let i = 0; i < input.length; i++) {
        const currentWord = input[i].toLowerCase() ; //Konvertiert das aktuelle Wort in Kleinbuchstaben für den Vergleich 

        if (currentWord === 'und') {
          return true; //Sobald das Wort 'und' gefunden wurde, gib true zurück  
        }
      }
      return false; // Fall das Wort 'und' nicht gefunden wurde, gib false zurück
    }
    
    export function aufgabe08(args) {
      const input = args
      const result = []
    
      for (let i = 0; i < input.length; i++) {
        const currentElement = input[i]
    
        if (currentElement === 'e') {
          result.push("3")
          //Wenn das aktuelle Zeichen ein 'E' ist, wird es mit 3 ersetzt
        } else if ( currentElement === 'E') {
          result.push("E")
        }else { 
            result.push(currentElement)
          } 
      }
      return result.join("")
    }

    export function aufgabe09(args) {
      const input = args
      let len = 0
      for (let i = 0; i < input.length; i++) {
      len++
      }

     if (len === 6) {
      return true
     } else {
      return false
     }
    }

    export function aufgabe10(args){
      const input = args

      if (input.length !== 7) return false
      if (input[0] !== "#") return false

      for (let i = 1; i < input.length; i++) {
        const currentElement = input[i]
        const ascii = currentElement.charCodeAt(0)

        if (48 <= ascii && ascii <= 57) {
          //mache nichts; ist eine Zahl
        } else if (65 <= ascii && ascii <=70) {
          //mache nichts; ist A-F
        } else {
          return false
        }
      }
      return true
    }

    export function aufgabe11(args) {
      const input = args
      let ascii = null

      if (input.length > 1) { //Funktionswächter
      return null
      }

      for (let i = 0; i < input.length; i++) {
        const currentElement = input[i]
        ascii = currentElement.charCodeAt(0)
        return ascii
      }
      return null
    }

    export function aufgabe12(args) {
      const input = args
      const result = []

    let pos = 0

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      pos = pos + 1
      if (currentElement === 'e') {
        return i
    }
  }
    return -1
     
  }

  export function aufgabe13(args) {
    const input = args //Dieser Button sucht die letzte Position des ersten e's in einem Text
    const result = []

  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === 'e') {
      return i
  }
}
  return -1
   
}

export function aufgabe14(args) {
  const input = args //Diese Aufgabe soll die Position des dritten 'e' im Text finden
const result = []
  let countE = 0
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  if (currentElement === 'e') {
    countE++
    if (countE === 3) {
      return i
    }
  }
 
}
return -1
}

export function aufgabe15(args) {
  const input = args
  const result = []
  
  for (let i= 0; i < input.length; i++) {
    const currentElement = input [i];
    if (currentElement === ' '){
      break;
  }
  result.push(currentElement);
}
 return result.join('')
}

export function aufgabe19(args) {
  const input = args //Diese Aufgabe soll jedes Zeichen in der Aufgabe verdoppeln
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
    result.push(currentElement)
   
  }
    return result.join("")
  }

  export function aufgabe20 (args) {
    const input = args
    const result = []
   
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
   //wenn eine Stelle nach dem "." ein Leerschlag kommt, wird true angezeigtS
    if (currentElement === '.' )  
    if (input [i+1] === ' ') {
      return true
    }
     
    }
   
  return false
   
  } 

export function aufgabe21(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {

  }


}

export function aufgabe27(args) {
  const input = args
  if (input.length === 0) return false
 
 
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt (0)
    if(48 <= ascii && ascii <= 57) {
      // mache nichts; ist eine Zahl
    } else {
      return false
    }
 
  }
  return true
}




