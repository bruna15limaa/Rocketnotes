import { Container, Links,  Content } from './styles';

import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';


export function Details() {

    return (
       <Container>
        <Header/>
        <main>
            <Content>

        <ButtonText title="Excluir nota"/>

        <h1>Introdução ao React</h1>
             
        <p>Introdução ao React: Construindo Interfaces Declarativas e Reativas. 
            React, uma biblioteca JavaScript mantida pelo Facebook, revolucionou 
            o desenvolvimento de interfaces de usuário ao introduzir um paradigma 
            declarativo e reativo. Ao contrário das abordagens tradicionais, 
            React permite que os desenvolvedores construam UIs eficientes e dinâmicas 
            com mais facilidade.React continua a ser uma escolha popular para o 
            desenvolvimento de interfaces modernas, capacitando desenvolvedores a 
            construir aplicativos escaláveis e reativos. Ao compreender os conceitos 
            fundamentais, é possível criar experiências de usuário excepcionais com 
            eficiência e elegância.</p>
           
        <Section title="Links úteis"/>
        <Links>
            <li><a href="https://www.rocketseat.com.br/">https://www.rocketseat.com.br/</a></li>
            <li><a href="https://www.rocketseat.com.br/">https://www.rocketseat.com.br/</a></li>
            
        </Links>

        <Section title="Marcadores">
          
          <Tag title="express"/>
          <Tag title="nodejs"/>
            
        </Section>

         <Button title="Voltar"/>

         </Content>
        </main>
            
        </Container>
    )
}