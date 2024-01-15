        
        function calcular() {
        let a = window.document.getElementById('aN')
        let num1 = Number(a.value)
        let b = window.document.getElementById('bN')
        let num2 = Number(b.value)
        let c = window.document.getElementById('cN')
        let num3 = Number(c.value)
            let x = num1 * num2 / num3
            resul.innerHTML = (`${x}`)
            A.innerHTML = (`${num1}`)
            B.innerHTML = (`${num2}`)
            C.innerHTML = (`${num3}`)
        }
