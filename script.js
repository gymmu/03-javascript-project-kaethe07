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

    export function aufgabe12(args) {
      const input = args
    const result = []

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement === 'e') {
        return i
      } else if (currentElement === 'E') {
        return i
      }
    }
    return -1
     
    }
    