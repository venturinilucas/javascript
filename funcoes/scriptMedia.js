const alunos = [
  {
    nome: 'João',
    nota: 5,
    turma: '1B'
  },
  {
    nome: 'Sofia',
    nota: 1,
    turma: '1B'
  },
  {
    nome: 'Paulo',
    nota: 6,
    turma: '2C'
  },
  {
    nome: 'Carlos',
    nota: 2,
    turma: '1C'
  }
]

function alunosAprovados(alunos, media) {
  let aprovados = []

  for (let i = 0; i < alunos.length; i++) {
    let { nota, nome } = alunos[i]

    if (nota >= media) {
      aprovados.push(nome)
    }
  }

  return aprovados
}

console.log(alunosAprovados(alunos, 5))
