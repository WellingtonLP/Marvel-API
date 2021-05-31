import React, { useCallback, useEffect, useState } from "react";
import api from '../../services/api';
import Logo from '../../assets/marvel-logo.png';
import { Header, Container, CardList, Card, ButtonMore } from './styles';


interface ResponseData {
    id: string;
    name: string;
    description: string;
    thumbnail:{
        extension: string;
        path: string;
    }
}

const Characters: React.FC = () => {
    const [characters, setCharacters] = useState<ResponseData[]> ([])
    const [search, setSearch] = useState('')

    //Toda vez que a pagina for carregad o useEffect vai carregar o codigo abaixo!
    useEffect(() => {
        api.get('/characters')// fazendo aquisição
        .then(response => {
            setCharacters(response.data.data.results);
            // console.log(response.data.data)
        })
        .catch(err => console.log('Loge Erro',err))
    }, [])

    const handleMore = useCallback(async () => {
        try{
            const offset = characters.length;
            const response = await api.get('/characters', {
                params: {
                    offset: offset,
                }
            })

            setCharacters([...characters, ...response.data.data.results])
            
        } catch (err){
            console.log(err)
        }
    }, [characters])

    return (
        <Header>
            <header> 
                <img src={Logo} alt="logo" />
            </header>

            {/* tentei criar de alguma forma uma busca usando input porem nao conseguir resolver a solução! */}
            <div id="input">
                <input
                    type='text'
                    placeholder='Pesquisar Heróis...'
                    value={search}
                    onChange={(character) => setSearch(character.target.value)} />
            </div>
            <Container>
                <CardList>
                    {characters.map(character => {
                        return (
                            <Card key={character.id} thumbnail={character.thumbnail}>
                                <div id="img" />
                                <h2>{character.name}</h2>
                                <p>{character.description}</p>
                            </Card>
                        )
                    })}
                </CardList>
                <ButtonMore onClick={handleMore}>
                    Mais
                </ButtonMore>
            </Container>
        </Header>
    )
}

export default Characters;