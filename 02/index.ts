type Usuario = {
  nome: string
  email: string
  cpf: string
  profissao?: string
  endereco: Endereco | null
}

const cadastrarUsuario = (dados: Usuario): Usuario => {
  const bd = lerArquivo() as Usuario[]
  bd.push(dados)
  escreverArquivo(bd)
  return dados
}

const listarUsuarios = (filtro?: string): Usuario[] => {
  const bd = lerArquivo() as Usuario[]

  const usuarios = bd.filter((usuario) => {
    if (filtro) {
      return usuario.profissao === filtro
    }

    return usuario
  })

  return usuarios
}
