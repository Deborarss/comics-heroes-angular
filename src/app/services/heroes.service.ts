import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
  
  private heroes:Hero[] = [
    {
      name: "Aquaman",
      bio: "Aquaman pode respirar embaixo da água, pode nadar a velocidades altíssimas, tem grande durabilidade devido a ter que suportar as altas pressões do fundo dos oceanos, tem força sobre-humana e é dono de um poder telepático que o permite se comunicar com as formas de vida marinhas, que obedecem a seus pedidos e ordens.",
      img: "assets/img/aquaman.png",
      appearance: "1941-11-01",      
      company:"DC"
    },
    {
      name: "Batman",
      bio: "Batman não tem superpoderes. Em sua luta contra o crime, ele utiliza uma enorme coleção de equipamentos avançados, veículos extraordinários, seu cérebro privilegiado e técnicas de combate corpo-a-corpo.",
      img: "assets/img/batman.png",
      appearance: "1939-05-01",      
      company:"DC"
    },
    {
      name: "Capitã Marvel",
      bio: "Capitã Marvel tem força, resistência, durabilidade e agilidade sobre-humanas, ela também pode voar em grandes velocidades e também tem algo chamado \"Sétimo Sentido\", onde ela pode sentir o perigo.",
      img: "assets/img/captain-marvel.png",
      appearance: "1967-12-01",      
      company:"DC"
    },
    {
      name: "Demolidor",
      bio: "Como os morcegos, o Demolidor tem um excelente sentido de radar que permite que ele perceba tudo que há ao seu redor. Matt é um atleta de primeira e mestre em artes marciais, o que o ajuda na luta contra o crime. Ele também pode dizer se alguém está mentindo ou nervoso devido a seus batimentos cardíacos. Como arma, usa um bastão telescópico que serve também para se pendurar pela cidade.",
      img: "assets/img/daredevil.png",
      appearance: "1964-01-01",      
      company: "Marvel"
    },
    {
      name: "Homen Aranha",
      bio: "O Homem-Aranha tem força sobre-humana, proporcional à de uma aranha, pode fixar-se a paredes e tetos, incrível agilidade e possui um \"sentido de aranha\" que o avisa sobre o perigo. Um químico fantástico, criou uma teia de aranha artificial, que pode usar para balançar-se entre prédios e prender vilões.",
      img: "assets/img/spiderman.png",
      appearance: "1962-08-01",      
      company: "Marvel"
    },
    {
      name: "Hulk",
      bio: "O Hulk é dono de colossal força física e pode saltar grandes distâncias graças aos poderosos músculos em suas pernas.",
      img: "assets/img/hulk.png",
      appearance: "1962-05-01",      
      company:"Marvel"
    },
    {
      name: "Lanterna Verde",
      bio: "Cada Lanterna Verde detém um anel de poder que pode gerar uma variedade de efeitos, sustentando-se apenas pela imaginação do portador do anel e pela sua força de vontade. Quanto maior a força de vontade do usuário, mais eficaz é o anel. Os limites superiores das habilidades do anel de poder permanecem indefinidos, e tem sido referida como \"a arma mais poderosa do universo\" em mais de uma ocasião.",
      img: "assets/img/green-light.png",
      appearance: "1940-06-01",      
      company: "DC"
    },
    {
      name: "Mulher Maravilha",
      bio: "Diana é dona de uma força sobre-humana. Ela foi treinada como guerreira sendo uma das melhores entre seu povo, além disso, maneja diversas armas habilmente. Entre os equipamentos que mais usa, estão seus braceletes capazes de desviar balas, raios de força e outros projéteis, e o Laço da Verdade, uma extensão de corda que, quando prende alguém, força a pessoa a falar a verdade.",
      img: "assets/img/wonder-woman.png",
      appearance: "1941-10-08",      
      company: "Marvel"
    },
    {
      name: "Wolverine",
      bio: "Além de suas mortais garras de adamantium, capazes de cortar qualquer coisa, ele tem um poderoso fator de cura, além disso, envelhece lentamente o que o torna praticamente imortal e tem diversas características animais, como sentidos muito aguçados. No Universo Marvel, provavelmente não existe personagem mais perigoso.",
      img: "assets/img/wolverine.png",
      appearance: "1974-11-01",      
      company: "Marvel"
    }
  ];

  constructor() {
    console.log('Serviço pronto para usar!');    
  }

  getHeroes() {
    return this.heroes;
  }

  getHero(idx: string) {
    return this.heroes[idx];
  }

  searchHeroes(text:string):Hero[] {
    let heroesArr:Hero[] = [];
    text = text.toLowerCase();

    for(let i = 0; i < this.heroes.length; i++) {
      let hero = this.heroes[i];
      let name = hero.name.toLowerCase();
      if(name.indexOf(text) >= 0) {
        hero.idx = i;
        heroesArr.push(hero);
      }
    }
    return heroesArr;
  }

}

export interface Hero {
  name: string;
  bio: string;
  img: string;
  appearance: string;     
  company: string;
  idx?: number;
}