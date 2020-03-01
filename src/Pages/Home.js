import React, { Component } from 'react';
import{ Button, Alert } from 'reactstrap';
import BioDataCard from '../Components/bioDataCard';
import JumbotronCustom from '../Components/jumbotronCustom';
import { connect } from 'react-redux'
import AlertCustom from '../Components/Alert'
import AlertWelcome from '../Components/AlertWelcome';

class Home extends Component{
  state = {
   data : [
      {
        nama : 'arthur',
        usia : 25,
        pekerjaan : 'consultant',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTe4eU9oYx_KXgVmPecJfdTIF-MAKpE4XjoHb5R0-kirFYu9HEC',
        color : 'primary'
      },
      {
        nama : 'griffin',
        usia : 50,
        pekerjaan : 'comedy',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTe4eU9oYx_KXgVmPecJfdTIF-MAKpE4XjoHb5R0-kirFYu9HEC',
        color : 'danger'
      },
      {
        nama : 'dave',
        usia : 50,
        pekerjaan : 'actor',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTe4eU9oYx_KXgVmPecJfdTIF-MAKpE4XjoHb5R0-kirFYu9HEC',
        color : 'success'
      }
    ],
    boolean : true,
    show : true
   }

//    renderBioData = () => {
//      let {data} = this.state;
//      return data.map ((val, index)=> {
//       return(
//       <div style={{border: '1px solid black', width: '200px'}}>
//        <div>
//           {val.nama}
//         </div>
//         <div>
//           {val.usia}
//        </div>
//         <div>
//           {val.pekerjaan}
//         </div>
//         <div>
//           <input type='text' ref={`item${index}`}/>
//         </div>
//         <div>
//         <input type='button' value='Ganti Nama' onClick={() => this.onClickChangeName(index)}/>
//         </div>
//       </div>
//       )
//      })
//    }


//    onClickChangeName = (index) => {
//      let {data} = this.state;
//      console.log(this.refs)
//      data[index].nama = this.refs[`item${index}`].value
//      this.setState({
//        data:data
//      })
//    }
 

//   render() {

//     return(
//       <div style={{display: 'flex', justifyContent:'center'}}>
//         {this.renderBioData()}
//       </div>
//     );
//   }
// }

renderBioDataCard = () => {
 
  let { data } = this.state;

  return data.map((val)=>{
    return(
      <div style={{display:'flex', justifycontent:'center'}}>
          <BioDataCard
            namaContoh={val.nama}
            usiaBebas={val.usia}
            pekerjaanya={val.pekerjaan}
            image = {val.image}
            color = {val.color}
            show = {() => this.setState({show : false})}
            alert = {()=> window.alert('ini dari parent App.js')}
          />
      </div>
    )
  })
}

onBtnLogin = () => {
  console.log(this.refs)
  console.log(this.refs.username.value)
  console.log(this.refs.password.value)

}

render(){
  let {show} = this.state
//   let currentUser = this.props.user
  return(
    <div className='container'>
        {
            this.props.user
            ?
            <AlertWelcome userlogin = {this.props.user}/>
            :
            null
        }
      <JumbotronCustom 
        mainHeader='Toko Susilo'
        desc='Toko paling lengkap di Bikini bottom'
        slogan='Ayo, ayo aja dulu'
        isiButton='Shop Now'
        onClickBtn={() => window.alert('Belaanja jangan disini')}
      />
      <div style={{display:'flex', justifycontent:'center'}}>
         {
         show ? this.renderBioDataCard() : null 
         }
      </div>
    </div>
    )
  }


}

const mapStatetoProps = (state) => {
    return {
        user : state.contoh.username
    }
}

export default connect(mapStatetoProps)(Home);
