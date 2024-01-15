var student = {}, average = {}, times = {}

//Turma 1//
function amount_student_1() {
    times.amount_student_1 = 0
    times.amount_student_10 = 0
    student.amount_1 = window.document.querySelector('input#quant_alu_1')
    student.amount_val_1 = Number(student.amount_1.value)
    resul_quant_alu_1.innerHTML = `<br>Número de alunos turma 1: ${student.amount_val_1}`
    resul_quant_alu_1.style.display = 'contents'
    for (let x = 0; x < student.amount_10; x++) {
        reset()
    }
    student.amount_val_10 = student.amount_val_1
}
function name_student_1() {
    if (times.amount_student_1 < student.amount_val_1) {
        student.name_1 = window.document.querySelector('input#nome_alu_1')
        student.name_val_1 = String(student.name_1.value)
        student.name_10 = window.document.createElement('h1')
        student.name_10.innerHTML = `${student.name_val_1}`
        document.getElementById("resul_nome_alu_1").appendChild(student.name_10)
    } else {
        alert('Quantidade máxima atingida.')
    }
    times.amount_student_1++
}
function average_student_1() {
    if (times.amount_student_10 < student.amount_val_1) {
        student.average_1 = window.document.querySelector('input#media_alu_1')
        student.average_val_1 = Number(student.average_1.value)
        student.average_10 = window.document.createElement('h2')
        student.average_10.innerHTML = `${student.average_val_1}`
        document.getElementById("resul_media_alu_1").appendChild(student.average_10)
    } else {
        alert('Quantidade máxima atingida.')
    }
    times.amount_student_10++
}

//Turma 2//
function amount_student_2() {
    times.amount_student_2 = 0
    times.amount_student_20 = 0
    student.amount_2 = window.document.querySelector('input#quant_alu_2')
    student.amount_val_2 = Number(student.amount_2.value)
    resul_quant_alu_2.innerHTML = `<br>Número de alunos turma 2: ${student.amount_val_2}`
    resul_quant_alu_2.style.display = 'contents'
    for (let x = 0; x < student.amount_20; x++) {
        reset()
    }
    student.amount_val_20 = student.amount_val_2
}
function name_student_2() {
    if (times.amount_student_2 < student.amount_val_2) {
        student.name_2 = window.document.querySelector('input#nome_alu_2')
        student.name_val_2 = String(student.name_2.value)
        student.name_20 = window.document.createElement('h3')
        student.name_20.innerHTML = `${student.name_val_2}`
        document.getElementById("resul_nome_alu_2").appendChild(student.name_20)
    } else {
        alert('Quantidade máxima atingida.')
    }
    times.amount_student_2++
}
function average_student_2() {
    if (times.amount_student_20 < student.amount_val_2) {
        student.average_2 = window.document.querySelector('input#media_alu_2')
        student.average_val_2 = Number(student.average_2.value)
        student.average_20 = window.document.createElement('h4')
        student.average_20.innerHTML = `${student.average_val_2}`
        document.getElementById("resul_media_alu_2").appendChild(student.average_20)
    } else {
        alert('Quantidade máxima atingida.')
    }
    times.amount_student_20++
}

//Calculo/resetar//
function reset() {
    var elemento = document.querySelector("section");
    elemento.parentNode.removeChild(elemento);
}
