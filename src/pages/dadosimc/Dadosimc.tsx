import Campform from "@/components/Campform";
import { useRouter } from "next/router"
import { useState, useEffect } from "react";
import type { AppProps } from 'next/app';



export default function Dadosimc(){
    
    const [peso, setPeso]=useState<any>('')
    const [altura, setAltura]=useState<any>('')
    const [imc, setImc]=useState<any>('')
    const [nome, setNome]=useState<any>('')
    const [data, setData]=useState<any>('')
    
    
    const router=useRouter()
    const { p_peso,p_altura ,p_imc}=router.query
    
    useEffect(()=>{
        setPeso(p_peso)
        setAltura(p_altura)
        setImc(p_imc)
        setData('2023-12-17')
    }, [])


return(
    <div>
        <div>
                <div className='campoForm'>
                <label>Nome</label>
                <input className="inputDados" type="text" value={nome} onChange={(e)=>setNome(e.target.value)}/>
                </div>
                <div className='campoForm'>
                    <label>Peso</label>
                    <input className="inputDados" type="text" value={peso} readOnly />
                </div>
                <div className='campoForm'>
                    <label>Altura</label>
                    <input className="inputDados"type="text" value={altura} readOnly />
                </div>
                <div className='campoForm'>
                    <label>IMC</label>
                    <input className="inputDados" type="text" value={imc} readOnly />
                </div>
                <div className='campoForm'>
                    <label>Data</label>
                    <input className="inputDados" type="text" value={data} readOnly />
                </div>
                <div className='campoForm'>
                <button className="botaoDados" >GRAVAR</button>
            </div>
        </div>
    <div className="grid">
        <div className="gridlinhaTitulos">
            <div className="gridTitulos">Nome</div>
            <div className="gridTitulos">Peso</div>
            <div className="gridTitulos">Altura</div>
            <div className="gridTitulos">IMC</div>
            <div className="gridTitulos">Data</div>
        </div>
    </div>
    <div className="gridlinhaDados">
        <div className="gridLinhas">
            <div className="gridLinha">Nome</div>
            <div className="gridLinha">Peso</div>
            <div className="gridLinha"> Altura</div>
            <div className="gridLinha">IMC</div>
            <div className="gridLinha">Data</div>
        </div>
    </div>
</div>
    )
}