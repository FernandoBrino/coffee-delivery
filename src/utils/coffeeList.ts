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

export const coffeeList = [
    {
        id: 0,
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        types: ['TRADICIONAL'],
        price: 3.0,
        img: expressoTradicional,
    },
    {
        id: 1,
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        types: ['TRADICIONAL'],
        price: 3.0,
        img: expressoAmericano,
    },
    {
        id: 2,
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        types: ['TRADICIONAL'],
        price: 4.0,
        img: expressoCremoso,
    },
    {
        id: 3,
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        types: ['TRADICIONAL', 'GELADO'],
        price: 4.0,
        img: expressoGelado,
    },
    {
        id: 4,
        title: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        types: ['TRADICIONAL', 'COM LEITE'],
        price: 5.0,
        img: cafeComLeite,
    },
    {
        id: 5,
        title: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        types: ['TRADICIONAL', 'COM LEITE'],
        price: 6.0,
        img: latte,
    },
    {
        id: 6,
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        types: ['TRADICIONAL', 'COM LEITE'],
        price: 6.0,
        img: capuccino,
    },
    {
        id: 7,
        title: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        types: ['TRADICIONAL', 'COM LEITE'],
        price: 7.0,
        img: macchiato,
    },
    {
        id: 8,
        title: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        types: ['TRADICIONAL', 'COM LEITE'],
        price: 7.0,
        img: mochaccino,
    },
    {
        id: 9,
        title: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        types: ['ESPECIAL', 'COM LEITE'],
        price: 9.0,
        img: chocolateQuente,
    },
    {
        id: 10,
        title: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        types: ['ESPECIAL', 'ALCOÓLICO', 'GELADO'],
        price: 10.0,
        img: cubano,
    },
    {
        id: 11,
        title: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        types: ['ESPECIAL'],
        price: 10.0,
        img: havaiano,
    },
    {
        id: 12,
        title: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        types: ['ESPECIAL '],
        price: 10.0,
        img: arabe,
    },
    {
        id: 13,
        title: 'Irlândes',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        types: ['ESPECIAL', 'ALCOÓLICO'],
        price: 12.0,
        img: irlandes,
    },
]