import { useState } from "react"
import Campform from "@/components/Campform"
import Tabelaimc from "@/components/Tabelaimc"
import Link from "next/link";


export default function Calcimc(){
    const [peso, setPeso]=useState<number>(0)
    const [altura, setAltura]=useState<number>(0)
    const [imc, setImc]=useState<number>(0)



    function calcular(){
        let res=peso/(altura*altura)
        
        setImc(res)
    }

    return(
        <div className="flex flex-col border border-black w=[300px] gap-5">
            <p className="w-full text-center bg-zinc-400 font-bold text-lg">Cálculo do IMC</p>
            <Campform label="peso" state={peso} funState={setPeso}/>
            <Campform label="altura" state={altura} funState={setAltura}/>
            <button className="bg-indigo-900 text-white mx-2 p-1 rounded-lg cursor-pointer" onClick={calcular}>Calcular</button>
            <Link href={{
                pathname:"/dadosimc/Dadosimc",
                query:{
                    p_peso:0.0,
                    p_altura:0.0,
                    p_imc:0.0
                }
            }}>Dados IMC</Link>
            <p>Resultado: {imc.toFixed()}</p>
            <Tabelaimc imc={imc}/>
        </div>
 )
}