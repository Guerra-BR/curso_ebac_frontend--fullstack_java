const arrayDeAlunos = [
    {
        nome: 'Aluno 1',
        nota: 8
    },
    {
        nome: 'Aluno 2',
        nota: 5
    },
    {
        nome: 'Aluno 3',
        nota: 6
    },
    {
        nome: 'Aluno 4',
        nota: 4
    },
    {
        nome: 'Aluno 5',
        nota: 7
    },
    {
        nome: 'Aluno 6',
        nota: 10
    },
]

const notaMinima = 6
let alunosAprovados = []
function consultaAProvados(){
    
    for(aluno of arrayDeAlunos){
        let notaDeste = aluno.nota

        if(notaDeste <= notaMinima){
            alunosAprovados.push(aluno.nome)
        }
    }

    console.log(alunosAprovados)
}

console.log(consultaAProvados())