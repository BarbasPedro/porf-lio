import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <div>
      <Titulo fontSize={14}>| 👨‍💻 Desenvolvedor Front-end |</Titulo>
      <Paragrafo>
        Olá, sou o Pedro, um entusiasta da tecnologia de 29 anos nascido no
        Porto, em Portugal que mora em São Paulo, Brasil, desde 2012. Como
        Desenvolvedor Full Stack, estou focado em aprimorar minhas habilidades e
        conhecimentos para oferecer soluções tecnológicas excepcionais. Construí
        uma carreira de resultados como consultor Ótico mas quero mais e me
        desafiei a aprender algo novo!
      </Paragrafo>
      <Titulo fontSize={14}>| 📚 Vida Acadêmica |</Titulo>
      <Paragrafo>
        Atualmente, cursando Análise e Desenvolvimento de Sistemas, no qual
        escolhi a trilha Dev Full Stack no Nanodegree da graduação e
        continuamente me atualizo por meio de cursos especializados.
      </Paragrafo>
      <Titulo fontSize={14}>| 🛠️ Skills Técnicas |</Titulo>
      <Paragrafo>
        Já desenvolvi uma série de projetos pessoais utilizando frameworks,
        bibliotecas e linguagens como: | React | VueJS | JavaScript | TypeScript
        | C | SQL | HTML | CSS | jQuery | Bootstrap | Sass | Grunt | Gulp |
        Parcel | Entre outras. Alguns dos meus projetos estão disponíveis no meu
        GitHub: https://github.com/barbaspedro
      </Paragrafo>
      <Paragrafo>
        🌎 Sou movido por desafios e oportunidades de aprendizado, acredito que
        Desenvolvimento de Software é uma área em constante evolução que oferece
        inúmeras possibilidades. Se você procura um profissional adaptável e
        dinâmico, comprometido em criar soluções tecnológicas de alto nível,
        estou animado para explorar como minhas habilidades e experiências podem
        agregar valor à sua equipe!
      </Paragrafo>
      <Paragrafo>
        🚀 Extremamente motivado com tudo o que está por vir, juntos
        alcançaremos a excelência e a inovação!
      </Paragrafo>
    </div>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=iuricode&hide=html&layout=compact&theme=radical" />
      <img src="https://github-readme-stats.vercel.app/api?username=BarbasPedro&theme=radical&show_icons=true" />
    </GithubSecao>
  </section>
)

export default Sobre
