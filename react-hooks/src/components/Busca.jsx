import axios from 'axios'
import striptags from 'striptags'
import React, { useEffect, useState } from 'react'
import { Button } from 'primereact/button'

import { IconField } from 'primereact/iconfield'
import { InputIcon } from 'primereact/inputicon'
import { InputText } from 'primereact/inputtext'

const Busca = () => {
    const [termoBusca, setTermoBusca] = useState('React')
    const [resultados, setResultados] = useState([])

    // useEffect(() => {
    //     console.log('Causando efeito colateral')
    //     return () => {
    //         console.log('Limpando...')
    //     }
    // }
    // )
    useEffect(() => {
        const buscar = async () => {
            if (!termoBusca) return 
            const { data } = await axios.get(
                'https://en.wikipedia.org/w/api.php',
                {
                    params: {
                        action: 'query',
                        list: 'search',
                        srsearch: termoBusca,
                        format: 'json',
                        origin: '*',
                    }
                }
            )
            setResultados(data?.query?.search)
            console.log(data)
        }
        const timoutID = setTimeout(() => {
            if(termoBusca)
                buscar()
        }, 500)
        return () => {
            clearTimeout(timoutID)
            console.log('Limpando...')
        }
    }, [termoBusca])

    return (
        <div>
            <IconField iconPosition='left'>
                <InputIcon className='pi pi-search'></InputIcon>
                <InputText placeholder='Buscar...'
                    onChange={(e) => setTermoBusca(e.target.value)}
                    value={termoBusca} />
            </IconField>
            {
                resultados?.map((resultado) => {
                    return (

                        <div key={resultado.pageid}
                            className='border-1 border-400 my-2'>
                            {/* Exibe o título do resultado */}
                            <div className='border-bottom border-400 
                            border-1 p-3 text-center font-bold'>
                                {resultado.title}
                                <span>

                                    <Button
                                    icon='pi pi-send'
                                    className='ml-3 p-button-rounded p-button-secondary'
                                    onClick={() => {
                                        window.open(
                                            `https://en.wikipedia.org/?curid=${resultado.pageid}`,
                                            '_blank'
                                        )
                                    }}
                                    />
                                </span>
                            </div>
                            {/* Aqui fica o conteudo */}
                            <div className='p-4'>
                                <span dangerouslySetInnerHTML={{ __html: resultado.snippet }}>
                                </span>
                            </div>

                        </div>

                    )
                })
            }
        </div>
    )
}

export default Busca
