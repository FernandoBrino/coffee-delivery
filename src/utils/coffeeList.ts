import expressoTradicional from '../assets/expresso-tradicional.svg';
import expressoAmericano from '../assets/americano.svg';
import expressoCremoso from '../assets/expresso-cremoso.svg';
import expressoGelado from '../assets/expresso-gelado.svg';
import cafeComLeite from '../assets/café-com-leite.svg';
import latte from '../assets/latte.svg';
import capuccino from '../assets/capuccino.svg';
import macchiato from '../assets/macchiato.svg';
import mochaccino from '../assets/mochaccino.svg';
import chocolateQuente from '../assets/chocolate-quente.svg';
import cubano from '../assets/cubano.svg';
import havaiano from '../assets/havaiano.svg';
import arabe from '../assets/arabe.svg';
import irlandes from '../assets/irlandes.svg';

import { v4 as uuidv4 } from 'uuid';

export const coffeeList = [
    {
        id: uuidv4(),
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        types: ['TRADICIONAL'],
        price: 3.0,
        img: expressoTradicional,
    },
    {
        id: uuidv4() ,
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        types: ['TRADICIONAL'],
        price: 3.0,
        img: expressoAmericano,
    },
    {
        id: uuidv4() ,
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        types: ['TRADICIONAL'],
        price: 4.0,
        img: expressoCremoso,
    },
    {
        id: uuidv4() ,
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        types: ['TRADICIONAL', 'GELADO'],
        price: 4.0,
        img: expressoGelado,
    },
    {
        id: uuidv4() ,
        title: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        types: ['TRADICIONAL', 'COM LEITE'],
        price: 5.0,
        img: cafeComLeite,
    },
    {
        id: uuidv4() ,
        title: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        types: ['TRADICIONAL', 'COM LEITE'],
        price: 6.0,
        img: latte,
    },
    {
        id: uuidv4() ,
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        types: ['TRADICIONAL', 'COM LEITE'],
        price: 6.0,
        img: capuccino,
    },
    {
        id: uuidv4() ,
        title: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        types: ['TRADICIONAL', 'COM LEITE'],
        price: 7.0,
        img: macchiato,
    },
    {
        id: uuidv4() ,
        title: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        types: ['TRADICIONAL', 'COM LEITE'],
        price: 7.0,
        img: mochaccino,
    },
    {
        id: uuidv4() ,
        title: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        types: ['ESPECIAL', 'COM LEITE'],
        price: 9.0,
        img: chocolateQuente,
    },
    {
        id: uuidv4() ,
        title: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        types: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
        price: 10.0,
        img: cubano,
    },
    {
        id: uuidv4() ,
        title: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        types: ['ESPECIAL'],
        price: 10.0,
        img: havaiano,
    },
    {
        id: uuidv4() ,
        title: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        types: ['ESPECIAL '],
        price: 10.0,
        img: arabe,
    },
    {
        id: uuidv4() ,
        title: 'Irlândes',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        types: ['ESPECIAL', 'ALCOÓLICO'],
        price: 12.0,
        img: irlandes,
    },
]