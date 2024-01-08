const detalharUsuario = (cpf: string): Usuario => {
  const bd = lerArquivo() as Usuario[]
  const usuario = bd.find((usuario) => {
    return usuario.cpf === cpf
  })

  if (!usuario) {
    throw new Error('Usuário não encontrado')
  }

  return usuario
}

const atualizarUsuario = (cpf: string, dados: Usuario): Usuario => {
  const bd = lerArquivo() as Usuario[]
  const usuario = bd.find((usuario) => {
    return usuario.cpf === cpf
  })

  if (!usuario) {
    throw new Error('Usuário não encontrado')
  }

  Object.assign(usuario, dados)

  escreverArquivo(bd)

  return dados
}
