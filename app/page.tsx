import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Octagon from "@/components/octagon";
import OctagonalGPT from "@/components/octagonalGPT/octagonalGPT";
import Panel from "@/components/panel";
import Link from "next/link";
import { Card } from "./island/page";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-5 mx-2">
        <div className="col-span-3 overflow-hidden">
          <Image
            // loader={myLoader}
            src="/img/bg.png"
            alt="bg"
            width={1200}
            height={600}
            className="aspect-video"
            style={{
              maxWidth: "100%",
              height: "auto",
              clipPath: "circle(60%)",
            }}
          />
          <div className="flex flex-col lg:flex-row flex-1 gap-2">
            <Octagon />
            <Octagon />
            <Octagon />
            {/* <Panel
              bg={"#081517"}
              hideH2
              hideCTA
              style={{ borderRadius: "20% 80% 20% 80% / 80% 20% 80% 20%" }}
            />
            <Panel
              bg={"#081517"}
              hideH2
              hideCTA
              style={{ borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%" }}
            />
            <Panel
              bg={"#081517"}
              hideH2
              hideCTA
              style={{ borderRadius: "80% 20% 80% 20% / 20% 80% 20% 80%" }}
            /> */}
          </div>
          <div className="flex gap-10">
            <Panel bg={"#1c1d1b"} hideCTA />
            <Panel bg={"#1c1d1b"} hideCTA />
          </div>
        </div>
        <div className="col-span-2">
          <div
            className="bg-[#3f453f] w-60 ml-auto h-10 flex rounded-l-lg items-center  justify-center"
            style={{
              // clipPath: "circle(60%)",

              clipPath:
                "polygon(100% 0%, 97% 50%, 100% 100%, 3% 98%, 0% 50%, 3% 0)",
            }}
          >
            A minar pedra(12mins)...
          </div>
          <div className="flex flex-col gap-3">
            <div className="bg-[#1b2b2c] hover:bg-[#1b2b2c] flex items-center h-10 p-4">
              <h1 className="text-3xl">Peter level: 3</h1>
            </div>
            <div className="bg-[#081517] hover:bg-[#1b2b2c] flex items-center h-10 p-4">
              Energy 87
            </div>

            <div className="bg-[#081517] hover:bg-[#1b2b2c] flex items-center h-10 p-4">
              Madeira 122.1k
            </div>
            <div className="bg-[#081517] hover:bg-[#1b2b2c] flex items-center h-10 p-4">
              Pedra 15,000
            </div>
            <div className="bg-[#081517] hover:bg-[#1b2b2c] flex items-center h-10 p-4">
              Metal 3000
            </div>
          </div>
          <div className="flex flex-col">
            <div className=" flex flex-[2] items-center bg-[#1c1d1b] border border-[#5a5a5a] rounded-lg my-1">
              <div className="flex items-center justify-center flex-1 border-[#5a5a5a]  hover:bg-[#2a2a2a] rounded-l-lg w-full h-full p-2">
                <Link href={"/game"}>Fire: 3</Link>
              </div>
              <div className="flex items-end justify-center  flex-1 hover:bg-[#2a2a2a] border-[#5a5a5a] border-l w-full h-full p-2">
                <Link href={"/game"}>Water: 5</Link>
              </div>
              <div className="flex items-end justify-center flex-1 border-[#5a5a5a] border-l hover:bg-[#2a2a2a] rounded-r-lg w-full h-full p-2">
                <Link href={"/game"}>Grass: 0</Link>
              </div>
            </div>
            <div className=" flex flex-1 items-center bg-[#1c1d1b] border border-[#5a5a5a] rounded-lg my-1">
              <Card
                title="Fire"
                description="Arvore de fire"
                // action="Apanhar madeira"
              />
            </div>
          </div>
          <div className="mt-96">
            Vai haver uma opçao/botao que mostra a ilha (parecido com o Ikariam)
            onde tens locais na ilha com coisas para fazer: Floresta-apanhar
            madeira(necessario axe); Pedreira-minar pedra(necessario mine-pick);
            Gruta de metal-minar metal(necessario qql coisa); Gruta dos
            globins(lvl1)-lutar contra globin; Gruta dos ogres(lvl2)- lutar
            contra ogres; Boste sombrio(lvl3)- lutar contra lubisomem
          </div>
          <div>
            Apos ter os materiais necessarios para construir um barco, podemos
            explorar novas ilhas que terao outros monstros e outras coisas para
            fazer
          </div>
          <div>
            No começo do jogo(lvl1), A unica atividade disponivel para fazer na
            ilha é lutar contra monstros, uma vez que nao temos os equipamentos
            necessarios para minar
          </div>
          <div>
            Ao lutar contra os goblins ganha-se experiencia para evoluir e há
            uma chance de dropar ou uma picareta, ou axe ou nada. Com estes
            drops podemos ir farmar (pedra, madeira) para construir equipamento
          </div>
          <div>
            No começo do jogo(lvl1), ao lutar contra o goblin, a vitoria é
            sempre garantida uma vez que é o mostro mais fraco do jogo, no
            entanto a quantidade de vida perdida dependerá da sorte. Será
            necessario descansar(x tempo) para recuperar a vida
          </div>
          <div>
            No começo do jogo(lvl1), podemos optar por matar ogres lvl(2), onde
            havera 15% chance de vitoria high risk high reward (mais exp, melhor
            item). Em caso de perda de consciencia, o jogador terá de esperar
            2horas para voltar a jogar.
          </div>
          <div>
            O combate será aos estilo TFT/Ogame onde o combate sera automatico,
            onde havera estrategia e posicionamento
          </div>
          <div>
            Apos ganhar x experiencia, o char sobe de nivel, o que ira dar
            pontos para meter nas avores Fire, Grass, Water (semelhante ao wow)
          </div>
          <div>
            Caso o char tenha mais pontos numa das arvores, sera considerado do
            tipo dessa arvore. Por exemplo, se um char tiver uma spec Fogo:5
            Grass:3 Water:0 será considerado Fogo. Caso haja duas ou mais
            arovres com os mesmos pontos será considerado do tipo normal
          </div>
          <div>
            Caso o char seja considerado de algum tipo, os ataques serao muito
            efetivos contra outro tipo e sera fraco contra outro. Por exemplo
            Fire forte contra Grass, mas fraco contra Water.
          </div>
          <div>
            Cada arvore terá abilidades diferentes, por exemplo Grass tera uma
            abilidade "escudo de folhas" que era absorver dano, Water tera uma
            bilidade "onda curandeira" que ira curar e Fire tera uma abilidade
            "arder" que ira tirar vida ao adeversario
          </div>
        </div>
      </div>
    </main>
  );
}
