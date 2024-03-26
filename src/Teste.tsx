import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
  color: #fff;
`

const BotaoPerigo = styled(Botao)`
  background-color: red;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal fontSize="20px">
        Enviar
      </Botao>
      <Botao principal={false}>Cancelar</Botao>
      <BotaoPerigo principal={false} as="a" fontSize="10px">
        <span>Perigo</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
