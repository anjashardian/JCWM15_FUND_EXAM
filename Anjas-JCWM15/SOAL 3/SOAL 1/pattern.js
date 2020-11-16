function OnButtonGanjil (){
    
}
let n = 4
let pattern = ""
for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        pattern += `* `
    }
    pattern += "\n"
}
console.log(pattern)


let x = 5
let aplabet = "ABCDE"
let pattern1 = ""


for (let baris = 0; baris < n; baris++) {
    for (let kolom = 0; kolom <= baris; kolom++) {
        pattern += aplabet.charAt(kolom)
    }

    if (baris !== x - 1) {
        pattern1 += "\n"
    }
}