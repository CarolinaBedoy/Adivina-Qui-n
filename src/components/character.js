import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Character() {

  const [characters, setCharacters] = useState([
    {name: 'CALAMARDO', image:'https://th.bing.com/th/id/OIP.IXJKy_PHCB643c7qI8A4QgHaG3?pid=ImgDet&rs=1',mexico:false, microfono:false, artista:true, poder:false, terminacion:false, barba:false, piel:false, asesino: false, ficticio: true, sexo:true, joven:true, letra:true, state:true},
    {name: 'DA VINCI', image:'https://th.bing.com/th/id/OIP.OSCPEfSuDRmWBavSUHfAbgHaI-?pid=ImgDet&rs=1', mexico:false, microfono:false, artista:true, poder:false, terminacion:false, barba:true, piel:true, asesino: false, ficticio: false, sexo:true, joven:false, letra:true, state:true},
    {name: 'DR. SIMI', image:'https://i.pinimg.com/originals/bc/09/87/bc09874ea20d57a79ab2606be03f7fb3.jpg', mexico:true, microfono:false, artista:false, poder:false, terminacion:false, barba:true, piel:true, asesino: false, ficticio: true, sexo:true, joven:false, letra:true, state:true},
    {name: 'MULÁN', image:'https://th.bing.com/th/id/OIP.SSXibCnm90u7B0RpWHgoTQHaEK?pid=ImgDet&rs=1', mexico:false, microfono:false, artista:false, poder:false, terminacion:false, barba:false, piel:true, asesino: true, ficticio: true, sexo:false, joven:true, letra:true, state:true},
    {name: 'MAMÁ COCO', image:'https://th.bing.com/th/id/OIP._2f7SGaUBPtiS6UBmW_6lQHaFA?pid=ImgDet&rs=1', mexico:true, microfono:false, artista:false, poder:false, terminacion:false, barba:false, piel:true, asesino: false, ficticio: true, sexo:false, joven:false, letra:true, state:true},
    {name: 'YOSHI', image:'https://th.bing.com/th/id/OIP.vmoBRq5QFBmGqjahUdzPyQHaLV?pid=ImgDet&rs=1', mexico:false, microfono:false, artista:false, poder:false, terminacion:false, barba:false, piel:false, asesino: true, ficticio: true, sexo:true, joven:true, letra:false, state:true},
    {name: 'MICHAEL JACKSON', image:'https://th.bing.com/th/id/R.7bbdd9ce07957c7b12fa4732567e5949?rik=kf5TKRO6EdfgYg&riu=http%3a%2f%2fi.huffpost.com%2fgen%2f1351072%2foriginal.jpg&ehk=l3DNQS5TDQKOINix0fcX%2f1P1aRsIBKGG0%2buDKKx%2fq88%3d&risl=&pid=ImgRaw&r=0', mexico:false, microfono:false, artista:true, poder:false, terminacion:false, barba:false, piel:true, asesino: false ,ficticio: false, sexo:true, joven:true, letra:true, state:true},
    {name: 'PATRICIO', image:'https://th.bing.com/th/id/R.54e1428251d81aadbe5cef1886037e7e?rik=tQofoOQ3ua1fYw&riu=http%3a%2f%2ffc05.deviantart.net%2ffs14%2ff%2f2007%2f086%2fb%2f2%2fPatricio_Estrella_by_faldrengirl.jpg&ehk=DN0Oj9%2byRuCA%2fpyvZGt9BLajcn6Uh4WZ3VcfEiF52oo%3d&risl=&pid=ImgRaw&r=0', mexico:false, microfono:false, artista:false, poder:false, terminacion:false, barba:false, piel:false, asesino: false, ficticio: true, sexo:true, joven:true, letra:false, state:true},
    {name: 'KRATOS', image:'https://th.bing.com/th/id/OIP.QMh0d28n8IyiBnEjY3qjlwHaEK?pid=ImgDet&rs=1', mexico:false, microfono:false, artista:false, poder:true, terminacion:false, barba:true, piel:true, asesino: true, ficticio: true, sexo:true, joven:false, letra:true, state:true},
    {name: 'EL PENITENTE', image:'https://th.bing.com/th/id/OIP.qCoeP3oSoxkOGUSZ4WQIPAHaEK?pid=ImgDet&rs=1',mexico:false, microfono:false, artista:false, poder:false, terminacion:false, barba:false, piel:false, asesino: true, ficticio: true, sexo:true, joven:false, letra:true, state:true},
    {name: 'LUCÍFUGO', image:'https://th.bing.com/th/id/OIP.MwsBOc1agCyaj6EBWNY2XQHaJ8?pid=ImgDet&rs=1', mexico:false, microfono:false, artista:false, poder:true, terminacion:false, barba:true, piel:false, asesino: true, ficticio: true, sexo:true, joven:false, letra:true, state:true},
    {name: 'BELCEBÚ', image:'https://th.bing.com/th/id/OIP.Ym1PARX7atJqMLZ6HF0MZgHaI1?w=149&h=180&c=7&r=0&o=5&pid=1.7', mexico:false, microfono:false, artista:false, poder:true, terminacion:true,  barba:true, piel:false, asesino: true, sexo:true, ficticio: true, joven:false, letra:true, state:true},
    {name: 'BATMAN', image:'https://th.bing.com/th/id/R.fb09005a92733226f4bfbe12ae710547?rik=605n6hyXkLESTw&pid=ImgRaw&r=0', mexico:false, microfono:false, artista:false, poder:true, terminacion:false, barba:false, piel:false, asesino: false, ficticio: true, sexo:true, joven:true, letra:true, state:true},
    {name: 'CR7', image:'https://th.bing.com/th/id/R.4678311925acc239ef9f86c4dd238955?rik=W0823cok7DgY1A&pid=ImgRaw&r=0', mexico:false, microfono:false, artista:false, poder:false, terminacion:false, barba:false, piel:true, asesino: false, ficticio: false, sexo:true, joven:true, letra:true, state:true},
    {name: 'WANDA', image:'https://th.bing.com/th/id/R.8d0215aa43e6365c2b79bc4d825a523c?rik=st1Y2vSFeaCaOg&pid=ImgRaw&r=0', mexico:false, microfono:false, artista:false, poder:false, terminacion:false, barba:false, piel:true, asesino: false, ficticio: true, sexo:false, joven:false, letra:false, state:true},
    {name: 'LEON S. KENNEDY', image:'https://th.bing.com/th/id/OIP.0fBMV8EL-1l31AgZaHh8owHaEK?pid=ImgDet&rs=1', mexico:false, microfono:false, artista:false, poder:false, terminacion:false, barba:false, piel:true, asesino: true, ficticio: true, sexo:true, joven:true, letra:true, state:true},
    {name: 'GOHAN', image:'https://th.bing.com/th/id/OIP.5GjWWJpJeMgQn6ibYrtUMgHaNK?pid=ImgDet&rs=1', mexico:false, microfono:false, artista:false, poder:true, terminacion:false, barba:false, piel:true, asesino: true, ficticio: true, sexo:true, joven:true, letra:true, state:true},
    {name: 'KARELY RUIZ', image:'https://th.bing.com/th/id/OIP.sSeITtXj21evbwKRcg1RIwHaEn?pid=ImgDet&rs=1', mexico:true, microfono:false, artista:false, poder:false, terminacion:false, barba:false, piel:false, asesino: false, ficticio: false, sexo:false,  joven:true, letra:true, state:true},
    {name: 'EL TRIGRE TOÑO', image:'https://th.bing.com/th/id/OIP.c1uHm-IYhB2ciDYeGcNwogHaHa?pid=ImgDet&rs=1', mexico:false, microfono:false, artista:false, poder:false, terminacion:false, barba:true, piel:false, asesino: false, ficticio: true, sexo:true, joven:false, letra:true, state:true},
    {name: 'TRIPLE H', image:'https://th.bing.com/th/id/R.d82714afa30839ab87b900f532863db5?rik=bbYtf5tbQ4pAIA&pid=ImgRaw&r=0', mexico:false, microfono:false, artista:true, poder:false, terminacion:false, barba:true, piel:true, asesino: false, ficticio: false, sexo:true, joven:true, letra:false, state:true},
    {name: 'MIGUEL DE COCO', image:'https://th.bing.com/th/id/R.b229325e96909e8f7e77b6fd45f881c0?rik=KXL1yUC%2fpjKHgw&pid=ImgRaw&r=0&sres=1&sresct=1', artista:true, poder:false, terminacion:false, barba:false, piel:true, asesino: false, ficticio: true, sexo:true, joven:true, letra:true, state:true},
    {name: 'MARIO BROS', image:'https://th.bing.com/th/id/OIP.SzTHfDhx46qTOF7CUsULQgHaEK?pid=ImgDet&rs=1', mexico:true, microfono:false, artista:false, poder:true, terminacion:false, barba:true, piel:false, asesino: true, ficticio: true, sexo:true, joven:true, letra:true, state:true},
    {name: 'NAPOLEON', image:'https://th.bing.com/th/id/OIP.zKouXpLFySo_HUrq98I8yQHaHa?pid=ImgDet&rs=1', mexico:false, microfono:false, artista:false, poder:false, terminacion:false, barba:false, piel:true, asesino: true, ficticio: false, sexo:true, joven:false, letra:false, state:true},
    {name: 'HITLER', image:'https://th.bing.com/th/id/R.8b34d47e2a4895adc3729192c88eb7dd?rik=%2baPWhWctxDZUfg&riu=http%3a%2f%2fimages.radio-canada.ca%2fv1%2fici-premiere%2f16x9%2fpremiereplus-attendez-souvienne-histoire-aldo.jpg&ehk=fJiFUmClRFCrvg0WAQfSaAFLZ92Ncvwp4M759CZU%2b7c%3d&risl=&pid=ImgRaw&r=0', mexico:false, microfono:false, artista:false, poder:true, terminacion:false, barba:true, piel:true, asesino: true, ficticio: false, sexo:true, joven:false, letra:true, state:true},
    {name: 'GOKU', image:'https://th.bing.com/th/id/OIP.TeD4m-6v5PC2fHZ7NvGt-QHaIY?pid=ImgDet&rs=1', mexico:false, microfono:false, artista:false, poder:true, terminacion:true, barba:false, piel:true, asesino: true, ficticio: true, sexo:true, joven:true, letra:true, state:true},
    {name: 'MESSI', image:'https://th.bing.com/th/id/OIP.jKHBRVWDytTl9XLqRRQ7kAHaJ4?pid=ImgDet&rs=1', mexico:false, microfono:false, artista:false, poder:false, terminacion:true, barba:true, piel:true, asesino: false, ficticio: false, sexo:true, joven:true, letra:true, state:true},
    {name: 'JUAN ESCUTIA', image:'https://th.bing.com/th/id/OIP.4zW-J4IRUohhmO6Z3Wx5dQHaEK?pid=ImgDet&rs=1', mexico:false, microfono:false, artista:false, poder:false, terminacion:false, barba:false, piel:true, asesino: true, ficticio: false, sexo:true, joven:true, letra:true, state:true},
    {name: 'LUIS MIGUEL', image:'https://spoiler.bolavip.com/export/sites/bolavip/img/2021/04/19/4zxih4bdbvgmhinzo3isr3rxpi.jpg_1025562229.jpg',mexico:false, microfono:true, artista:true, poder:false, terminacion:false, barba:false, piel:true, asesino: false, ficticio: false, sexo:true, joven:true, letra:true, state:true},
    {name: 'WARIO', image:'https://th.bing.com/th/id/OIP.R733EAAXL1qlkMJpr648JAHaIj?pid=ImgDet&rs=1', mexico:false, microfono:false, artista:false, poder:false, terminacion:false, barba:true, piel:true, asesino: true, ficticio: true, sexo:true, joven:false, letra:false, state:true},
    {name: 'SEITA', image:'https://th.bing.com/th/id/R.ecc74490919442ab4da42fa67d8a7196?rik=7pRo%2fOMmdCSZwQ&pid=ImgRaw&r=0', mexico:false, microfono:false, artista:false, poder:false, terminacion:false, barba:false, piel:true, asesino: false, ficticio: true, sexo:true, joven:true, letra:false, state:true},
    {name: 'COLOSIO', image:'https://th.bing.com/th/id/R.6caecee1b8b114d0289f84eec8908e74?rik=22ISjuhssyGY5w&pid=ImgRaw&r=0', mexico:true, microfono:false, artista:false, poder:false, terminacion:false, barba:true, piel:true, asesino: false, ficticio: false, sexo:true, joven:false, letra:true, state:true},
    {name: 'COMEGALLETAS', image:'https://th.bing.com/th/id/R.78a189a3c361664fba19c703e56d434f?rik=IOFthPgXWnIaPw&pid=ImgRaw&r=0', mexico:false, microfono:false, artista:false, poder:false, terminacion:false, barba:false, piel:false, asesino: false, ficticio: true, sexo:true, joven:false, letra:true, state:true},
    {name: 'EZIO', image:'https://th.bing.com/th/id/OIP.37ltUcStske9O0mh94gGHgHaIp?pid=ImgDet&w=600&h=700&rs=1', mexico:false, microfono:false, artista:false, poder:false, terminacion:false, barba:true, piel:true, asesino: true, ficticio: true, sexo:true,  joven:true, letra:true, state:true},
    {name: 'JUNIOR H', image:'https://th.bing.com/th/id/R.f2a8b6038d5b93e9812a490627bad09a?rik=Bdh6P%2fAf1CNrcQ&pid=ImgRaw&r=0', mexico:true, microfono:false, artista:true, poder:false, terminacion:false, barba:false, piel:true, asesino: false, ficticio: false, sexo:true, joven:true, letra:true, state:true},
    {name: 'SONIC', image:'https://th.bing.com/th/id/OIP.fjDQXG7AchNvCm-BctHCvQHaLk?pid=ImgDet&rs=1', mexico:false, microfono:false, artista:false, poder:true, terminacion:false, barba:false, piel:false, asesino: false, ficticio: true, sexo:true, joven:true, letra:false, state:true},
    {name: 'NARUTO', image:'https://th.bing.com/th/id/OIP.IbKbZmpzkpWInIuCjrxhqgHaF7?pid=ImgDet&rs=1', mexico:false, microfono:false, artista:false, poder:true, terminacion:false, barba:false, piel:true, asesino: true, ficticio: true, sexo:true, joven:true, letra:false, state:true},
    {name: 'COSMO', image:'https://th.bing.com/th/id/R.923f429fcd2f028818161d9d2c8b976d?rik=BCHF3%2bfMhzOBIQ&pid=ImgRaw&r=0', mexico:false, microfono:false, artista:false, poder:true, terminacion:false, barba:false, piel:true, asesino: false, ficticio: true, sexo:true, joven:false, letra:true, state:true},
    {name: 'BAMBI', image:'https://3.bp.blogspot.com/-GxGtro3k57o/UVoCCYGjFZI/AAAAAAAAOCo/UhoBIJNNXB0/s1600/disney+screencaps+capturas+stills+promo+clasicos+ranking+bambi+1942+baby+bebe+little.jpg', mexico:false, microfono:false, artista:false, poder:false, terminacion:true, barba:false, piel:false, asesino: false, ficticio: true, sexo:true, joven:true, letra:true, state:true},
    {name: 'LUCYNA KUSHINADA', image:'https://th.bing.com/th/id/OIP.69-63NPsyz7oGPkBTeIhuwHaLW?pid=ImgDet&rs=1', mexico:false, microfono:false, artista:false, poder:false, terminacion:false, barba:false, piel:true, asesino: false, ficticio: true, sexo:false, joven:true, letra:true, state:true},
    {name: 'DINOSAURIO', image:'https://th.bing.com/th/id/OIP.rBr7Lab6LEkO4mhL_N0UwgHaEK?rs=1&pid=ImgDetMain', mexico:false, microfono:false, artista:false, poder:false, terminacion:false, barba:false, piel:false, asesino: false, ficticio: true, sexo:true, joven:true, letra:true, state:true},
    {name: 'CHEEMS', image:'https://th.bing.com/th/id/R.f68a3720562ef744d670e660a7f63b0e?rik=%2bJJ5MguGGi%2bQ9Q&riu=http%3a%2f%2ffile.adquan.com%2fupload%2f20160215%2f1455520615907308.jpg&ehk=uVAtXUrAZIrmut9MGd1GK%2f5M9TbIYZgMUQvGa45%2fLvw%3d&risl=&pid=ImgRaw&r=0', mexico:false, microfono:false, artista:false, poder:false, terminacion:false, barba:true, piel:false, asesino: false, ficticio: false,  sexo:true, joven:true, letra:true, state:true},
    {name: 'FRANCO E.', image:'https://mx.web.img2.acsta.net/pictures/21/07/09/17/53/1243742.jpg', mexico:true, microfono:true, artista:true, poder:false, terminacion:false, barba:false, piel:true, asesino:false, ficticio: false, sexo:true, joven:true, letra:true, state:true},
    {name: 'LUFFY', image:'https://th.bing.com/th/id/R.caed3c89bfcc1921d47a0ef75a24fdf7?rik=fao9dojmVc3vyw&pid=ImgRaw&r=0', mexico:false, microfono:false, artista:false, poder:true, terminacion:false, barba:false, piel:true, asesino: false, ficticio: true, sexo:true, joven:true, letra:true, state:true},
    {name: 'MR. BEAST', image:'https://th.bing.com/th/id/OIP.-Btgi3OVIuuLUxgv-gt9zgHaEj?pid=ImgDet&rs=1', mexico:false, microfono:false, artista:true, poder:false, terminacion:false, barba:true, piel:true, asesino: false, ficticio: false, sexo:true, joven:true, letra:true, state:true},
    {name: 'AMLO', image:'https://th.bing.com/th/id/OIP.b0DANNHIbjexbVSIsAZFOwHaHa?pid=ImgDet&rs=1', mexico:true, microfono:false, artista:false, poder:false, terminacion:false, barba:false, piel:true, asesino: false, ficticio: false, sexo:true, joven:false, letra:true, state:true},
    {name: 'FREDDIE MERCURY', image:'https://th.bing.com/th/id/R.cad568046762ca67e2127932419a5d9f?rik=iQNllq50FvnrMQ&riu=http%3a%2f%2fwww.theplace2.ru%2farchive%2ffreddie_mercury%2fimg%2ffreddie_mercury_in_stockholm_10th_june_1986.jpg&ehk=bgDwKiKb%2b1a0i2m1kYb919J3gJpkGXZ1NNaDl9V074Y%3d&risl=&pid=ImgRaw&r=0', mexico:false, microfono:true, artista:true, poder:false, terminacion:true, barba:true, piel:true, asesino:false, ficticio: false, sexo:true, joven:true, letra:true, state:true},
    {name: 'CHICHARITO', image:'https://th.bing.com/th/id/OIP.MtQ14aHaR3tB6HDVbYiC0QHaFe?pid=ImgDet&rs=1', mexico:true, microfono:true, artista:false, poder:false, terminacion:false, barba:false, piel:true, asesino: false, ficticio: false, sexo:true, joven:true, letra:true, state:true},
    {name: 'CHECO PÉREZ', image:'https://th.bing.com/th/id/OIP.wVzT6g9l5a-VOJlhGmW8HQHaEK?pid=ImgDet&rs=1', mexico:true, microfono:false, artista:false, poder:false, terminacion:false, barba:true, piel:true, asesino: false, ficticio: false, sexo:true, joven:true, letra:true, state:true},
    {name: 'SPIDERMAN', image:'https://th.bing.com/th/id/R.7dc542d7b48427c2208f8908096eb33c?rik=jeVjbjWadjsRJQ&pid=ImgRaw&r=0', mexico:false, microfono:false, artista:false, poder:true, terminacion:false, barba:false, piel:false, asesino: true, ficticio: true, sexo:true,  joven:true, letra:false, state:true},
    {name: 'ANDY', image:'https://th.bing.com/th/id/R.179010152fa6b07de44156c39a59e75b?rik=uuFcHE%2b5wEn%2b0A&pid=ImgRaw&r=0', mexico:false, microfono:false, artista:false, poder:false, terminacion:false, barba:false, piel:true, asesino: false, ficticio: true, sexo:true, joven:true, letra:true, state:true},
    {name: 'LA MOLE', image:'https://th.bing.com/th/id/R.d156bacdc127aa1508b66285037b0ef6?rik=WFqgPTUOwEczGw&pid=ImgRaw&r=0', mexico:false, microfono:false, artista:false, poder:true, terminacion:false, barba:false, piel:false, asesino: true, ficticio: true, sexo:true, joven:true, letra:true, state:true},
    {name: 'DR. STRANGE', image:'https://th.bing.com/th/id/R.c47eee1c263ef52a1004e445740b7a26?rik=UQusFO0he6DXFw&pid=ImgRaw&r=0', mexico:false, microfono:false, artista:false, poder:true, terminacion:false, barba:true, piel:true, asesino: true, ficticio: true, sexo:true, joven:true, letra:true, state:true}
  ]); 

const questions = [
  ('¿Tu personaje es ficticio?'),
  ('¿Tu personaje tiene características físicas consideradas femeninas?'),
  ('¿Tu personaje ha existido físicamente en su universo por más de 55 años?'),
  ('¿El nombre de tu personaje, como aparece en la tarjeta, comienza con una letra de la N a la Z?'),
  ('¿Tu personaje le ha quitado directa e intencionalmente la vida a otro ser de semejante estructura física y mental a la de él?'),
  ('¿Tu personaje tiene barba y/o bigote?'),
  ('¿El color y textura de la piel de tu personaje es igual a la de un humano promedio?'),
  ('¿Tu personaje tiene algún superpoder?'),
  ('¿Tu personaje es o fue artista?'),
  ('¿El nombre de tu personaje termina con "U", "I o "Y"?'),
  ('¿Tu personaje nació físicamente en México?'),
  ('¿En la imagen de tu personaje aparece un micrófono?')
];

let [n, setN] = useState(0);
var count=0;

function status(){
  characters.map((active =>{
    if(active.state===true){
      count++;
  }}))
}

const check = (boolean) => {
if(n===0){
    setCharacters(characters => 
    characters.map(cha =>
      cha.ficticio === boolean  ? 
       ({
      ...cha, 
      image: cha.image
    })  : ({
      ...cha, 
      image: 'https://th.bing.com/th/id/OIP.I-Rc4GBMM0tHp3XxuuLxEgHaEo?pid=ImgDet&rs=1', state:false
    }) 
    )
    )
  }else if(n===1){
    setCharacters(characters => 
      characters.map(cha =>
        cha.sexo === boolean  ?   
         ({
        ...cha, 
        image: 'https://th.bing.com/th/id/OIP.I-Rc4GBMM0tHp3XxuuLxEgHaEo?pid=ImgDet&rs=1', state:false
      }) : ({
        ...cha, 
        image: cha.image
      }) 
      )
      )
  }else if(n===2){
    setCharacters(characters => 
      characters.map(cha =>
        cha.joven === boolean  ?    
         ({
        ...cha, 
        image: 'https://th.bing.com/th/id/OIP.I-Rc4GBMM0tHp3XxuuLxEgHaEo?pid=ImgDet&rs=1', state:false
      }) : ({
        ...cha, 
        image: cha.image
      }) 
      )
      )
  }else if(n===3){
    setCharacters(characters => 
      characters.map(cha =>
        cha.letra === boolean  ?   
         ({
        ...cha, 
        image: 'https://th.bing.com/th/id/OIP.I-Rc4GBMM0tHp3XxuuLxEgHaEo?pid=ImgDet&rs=1', state:false
      }) : ({
        ...cha, 
        image: cha.image
      }) 
      )
      )
  }else if(n===4){
    setCharacters(characters => 
      characters.map(cha =>
        cha.asesino === boolean  ?    
         ({
        ...cha, 
        image: cha.image
      }) : ({
        ...cha, 
        image: 'https://th.bing.com/th/id/OIP.I-Rc4GBMM0tHp3XxuuLxEgHaEo?pid=ImgDet&rs=1', state:false
      }) 
      )
      )
  }else if(n===5){
    setCharacters(characters => 
      characters.map(cha =>
        cha.barba === boolean  ?    
         ({
        ...cha, 
        image: cha.image
      }) : ({
        ...cha, 
        image: 'https://th.bing.com/th/id/OIP.I-Rc4GBMM0tHp3XxuuLxEgHaEo?pid=ImgDet&rs=1', state:false
      }) 
      )
      )
  }else if(n===6){
    setCharacters(characters => 
      characters.map(cha =>
        cha.piel === boolean  ?    
         ({
        ...cha, 
        image: cha.image
      }) : ({
        ...cha, 
        image: 'https://th.bing.com/th/id/OIP.I-Rc4GBMM0tHp3XxuuLxEgHaEo?pid=ImgDet&rs=1', state:false
      }) 
      )
      )
  }else if(n===7){
    setCharacters(characters => 
      characters.map(cha =>
        cha.poder === boolean  ?    
         ({
        ...cha, 
        image: cha.image
      }) : ({
        ...cha, 
        image: 'https://th.bing.com/th/id/OIP.I-Rc4GBMM0tHp3XxuuLxEgHaEo?pid=ImgDet&rs=1', state:false
      }) 
      )
      )
  }else if(n===8){
    setCharacters(characters => 
      characters.map(cha =>
        cha.artista === boolean  ?    
         ({
        ...cha, 
        image: cha.image
      }) : ({
        ...cha, 
        image: 'https://th.bing.com/th/id/OIP.I-Rc4GBMM0tHp3XxuuLxEgHaEo?pid=ImgDet&rs=1', state:false
      }) 
      )
      )
  }else if(n===9){
    setCharacters(characters => 
      characters.map(cha =>
        cha.terminacion === boolean  ?    
         ({
        ...cha, 
        image: cha.image
      }) : ({
        ...cha, 
        image: 'https://th.bing.com/th/id/OIP.I-Rc4GBMM0tHp3XxuuLxEgHaEo?pid=ImgDet&rs=1', state:false
      }) 
      )
      )
  }else if(n===10){
    setCharacters(characters => 
      characters.map(cha =>
        cha.mexico === boolean  ?    
         ({
        ...cha, 
        image: cha.image
      }) : ({
        ...cha, 
        image: 'https://th.bing.com/th/id/OIP.I-Rc4GBMM0tHp3XxuuLxEgHaEo?pid=ImgDet&rs=1', state:false
      }) 
      )
      )
  }else if(n===11){
    setCharacters(characters => 
      characters.map(cha =>
        cha.microfono === boolean  ?    
         ({
        ...cha, 
        image: cha.image
      }) : ({
        ...cha, 
        image: 'https://th.bing.com/th/id/OIP.I-Rc4GBMM0tHp3XxuuLxEgHaEo?pid=ImgDet&rs=1', state:false
      }) 
      )
      )
  }
status();
count > 1 ? setN(n+1) : alert('PERSONAJE ADIVINADO')
  }

  return (
    <>
    <Card.Body style={{color:'white', textAlign:'center', marginTop:'30px', fontFamily:'monospace'}}>{questions[n]}</Card.Body><br></br>
    <Button onClick={() => check(false)} style={{marginLeft:'620px', marginTop:'-25px'}} variant="outline-warning">〤</Button>
    <Button onClick={() => check(true)} style={{marginTop:'-25px'}} variant="outline-warning">✓</Button>
    {characters.map((character => 
    <Container style={{margin:'0px', marginTop:'45px', marginLeft:'95px'}}>
        <Card style={{float:"left",  width:'100px', height:'10', margin:'-8px', padding:'0px', backgroundColor:'#e0e0e0', alignItems:'center', textAlign:'center'}}>
     <Card.Img variant="top" width='80px' height='80px' src={character.image} />
      <Card.Body>
        <Card.Title style={{fontSize:'7px', color:'black'}}>{character.name}</Card.Title>
        </Card.Body>
        </Card>
    </Container>
  ))}
  </>);

}

export default Character;