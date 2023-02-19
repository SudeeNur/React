/*
import React, { Component } from 'react';
class App01 extends Component {
  render() {
    return ( 
      <h1>
        Merhaba React!
      </h1>
    );
  }
}
 
class App02 extends Component {
  render() {
    return ( 
      <h1>
        Merhaba React 2!
      </h1>
    );
  }
}
// birden fazla class olduğunda tüm classların projeye yüklenmesi istenilir ama sadece birni yüklemek için bu satır eklenmeli  
export {App01, App02} 
export default App02;

//Prop->Parameter:Component‘e geçilen parametre diyebiliriz. !Bir üst componentten data çekmek
//State->Component Memory: Component oluşturulduğunda içinde veri tutacak olan js nesnesi/objesi.
*/
import React, { Component } from 'react'
import Navigate from './Navigate'
import Kategori from './Kategori';
import UrunListesi from './UrunListesi';
import {Container,Row,Col } from 'reactstrap';

export default class App extends Component {
  kategoriDegistir=(kategori)=>{
    this.setState({ secilicategories:kategori.categoriName})
  }
  state={ secilicategories:"" }
  render() {
    let baslikKategori = "Kategoriler";
    let bilginavigate={baslik:"Navigations", ilaveBilgi:"ExtraNavigation"};

    return(
        <div>
          <Container>
            <Row>
              <Navigate bilgi={bilginavigate}/>
            </Row>
            <Row>
              <Col xs="4"> 
              <Kategori secilicategories={this.state.secilicategories} kategoriDegistir={this.kategoriDegistir} baslik={baslikKategori}/>
              </Col>
              <Col xs="8">
              <UrunListesi  secilicategories={this.state.secilicategories}
              title="Ürün Listeleri"/>
              </Col>
            </Row>
          </Container>
    
        </div>
      );
    }

    }
  // props ince ayrıntı!!
  ///let baslikKategori = "Kategoriler"
  //let titleUrunListesi = "UrunListeleri"
  ///let bilginavigate={baslik:"Navigations", ilaveBilgi:"ExtraNavigation"}
/*
  return(
    <div>
      <Container>
        <Row>
          <Navigate bilgi={bilginavigate}/>
        </Row>
        <Row>
          <Col xs="4"> 
          <Kategori baslik={baslikKategori}/>
          </Col>
          <Col xs="8">
          <UrunListesi title="Ürün Listeleri"/>
          </Col>
        </Row>
      </Container>

    </div>
  );*/

// baslik ve title olarak adlandırdığım kısımları istediğim isimleri verebilirim. Ana component olan App'den veri çekmek için this.props.baslik kullandık.