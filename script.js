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
  const input = args 
  const result = []

for (let i = 3; i < input.length; i++) {
  const currentElement = input[i]
  if (currentElement === 'e') {
    pos = i
}
}
return pos
 
}


