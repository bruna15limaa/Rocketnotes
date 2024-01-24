import { Container } fro './styles.js';

export function Input({icon: Icon, ...rest}) {
    return(
        <Container>
         {Icon && <Icon size={20}/>}
         <Input {...rest}/>

        </Container>
    );
}