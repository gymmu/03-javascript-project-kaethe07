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
  let count = 1

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

export function aufgabe16(args) {
  const input = args
  const result = []

  for (let i= 0; i < input.length; i++) {
    const currentElement = input [i];
    if (currentElement === '$'){
      break;
    }
    result.push(currentElement);
}
return result.join('')
}

export function aufgabe17(args) {
  const input = args;
  const result = input.split(',')
 
 
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
       
        [result[j], result[j + 1]] = [result[j + 1], result[j]]
      }
    }
  }
 
  return result.join(',')
}

export function aufgabe18(args) {
    const text = args
    let switchFirst = true
    const listFirst = []
    const listSecond = []
     
    for (let i = 0; i < text.length; i++) {
      if (text[i] === " ") {
        switchFirst = false
      } else {
        if (switchFirst === true) {
          listFirst.push(text[i])
        } else {
          listSecond.push(text[i])
        }
      }
    }
    const name = listFirst.join("")
    const age = listSecond.join("")
     
    return "Sie heissen " + name + " und sind " + age + " Jahre alt" //der Text und die Eingabe sollen angezeigt werden
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

  export function aufgabe20(args) {
    const input = args
    const result = []
   
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
   //wenn eine Stelle nach dem "." ein Leerschlag kommt, wird true angezeigt
    if (currentElement === '.' )  
    if (input [i+1] === ' ') {
      return true
    }
     
    }
   
  return false
   
  } 

  export function aufgabe21(args){

  }



  export function aufgabe22(args){


}

  export function aufgabe24(args){
    const input = args
  const result = []

  return true


  }

  export function aufgabe25(args){
    const input = args
  const result = []


  return true


  }
     
  export function aufgabe26(args) {
   
    const list = args.split("")  // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
    for (let i = 0; i < list.length - 1; i++) {
      const currentElement = list[i]
      const nextElement = list[i+1]
      if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
        // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
        const tmp = list[i+1]
        list[i+1] = list[i]
        list[i] = tmp
        i = 0 // starte von vorne wenn etwas vertauscht wurde.
      }
    }
    const result = list.join("")
    return (result)
   
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

export function aufgabe28(args) {



}


export function bubbleSort (args) {
  const list = args.split("") // Erstellen Sie eine Liste, um etwas sortieren/vergleichen zu können
   for (let i = 0; i < list.length -1; i++) {
     const currentElement = list[i]
     const nextElement = list[i+1]
     //ascii code von den Buchstaben( Die Buchstaben werden in Zahlen umgewandelt um sie nach der Grösse zu vergleichen)
     if ( currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
       // Reihenfolge stimmt nicht, die Elemente müssen getauscht werden.
       const tmp = list[i+1]
       list[i+1] = list[i]
       list[i] = tmp
       i = -1// Von vorne starten wenn etwas vertauscht wurde.
     }
   }
   const result = list.join("")
   return (result)
 
 }



