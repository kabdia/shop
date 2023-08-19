import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Menu from './components/menu/menu';
import uuid from 'react-uuid';
import Items from './components/items/items';


function App() {

  let state={
items:[
  {id:uuid(),
    img:'https://www.albanashop.ru/image/cachewebp/catalog/products/Chantal/1860/Cantal1860bl_1-1920x1080.webp',
  name:'Сапоги',
  country:'Италия',
  price:3000,
  material:'кожа', 
 },
  {id:uuid(),
    img:'https://ivanovskiytextil.ru/upload/resize_cache/iblock/3fe/mlgpp9l84rtkr7fzpi61hbukcwsv9c2w/340_340_140cd750bba9870f18aada2478b24840a/zhenskaya_kofta_iz_futera_2kh_nitki_s_laykroy_layma_kofta_zhenskaya_bezhevyy_bezhevyy_art_50357.jpg',
    name:'Кофта женская',
    country:'Россия',
    price:1000,
    material:'шерсть'},
  {id:uuid(),
    img:'https://cityfurs.ru/wp-content/uploads/2022/10/Kofta-iz-ovechei-shersti-cvet-lavanda-4-300x300.jpg',
    name:'Свитер',
    country:'Россия',
    price:1500,
    material:'шерсть'},
  {id:uuid(),
    img:'https://4mma.ru/media/images/thumbnail/161169189360107775ad9d61.00495574.pr_14290_1.png',
    name:'Топик женский',
    country:'Россия',
    price:3000,
    material:'полиостер'}
]
  }
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Items items={state.items}/>
      <Footer/>      
    </div>
  );
}

export default App;
