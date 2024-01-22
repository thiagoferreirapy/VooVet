import React from 'react';
// import logo from '../../images/logo.svg';
import { MainContainer } from "./style";
// import on from '../../images/visibility.svg';
// import off from '../../images/visibility_off.svg';
// import ButtonSubmit  from './Components/ButtonSubmit';
import Slider from '../../layouts/Slider/Slider';
import 'swiper/swiper-bundle.css';
import ServicesCards from '../../layouts/ServicesCards/ServicesCards';
import Agendamento from '../../layouts/Agendamento/Agendamento';
import SliderComment from '../../layouts/Slider/SliderComment';


import DataSlider from '../../services/DataSlider';
import Sobre from '../../layouts/Sobre/Sobre';
function Home() {
  // const [formData, setFormData] = useState({
  //   email: '',
  //   password: '',
  // });

  // const [showPassword, setShowPassword] = useState(false);


  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };


  return (
    <MainContainer>
      <Slider/>
      <Sobre/>
      <ServicesCards/>
      <Agendamento/>
      <SliderComment data={DataSlider}/>
    </MainContainer>
    
    // <main>
    //   <div>
    //     <img src={logo} alt="Logo" />
    //     <Title>Usuário cadastrado com sucesso</Title>
    //     <FormularioLogin>
    //       <form action="">
    //         <Input>
    //           <InputContent
    //             className='emailInput'
    //             placeholder='E-mail'
    //             type={'email'}
    //             name='email'
    //             value={formData.email}
    //             onChange={handleInputChange}
    //             required
    //           />
    //         </Input>
    //         <PassowrdWrapper>
    //           <InputContent
    //             className='passWordInput'
    //             placeholder='****************'
    //             type={showPassword ? 'text' : 'password'}
    //             name='password'
    //             value={formData.password}
    //             onChange={handleInputChange}
    //             required
    //           />
    //           {showPassword ? (
    //               <EyeIcon>
    //                 <img src={off} alt="Logo" onClick={togglePasswordVisibility}/>
    //               </EyeIcon>
    //               ) : (
    //                   <EyeIcon>
    //                     <img src={on} alt="Logo" onClick={togglePasswordVisibility}/>
    //                   </EyeIcon>
    //           )}

    //         </PassowrdWrapper>
    //         <ButtonSubmit value={'Cadastrar'} type={'submit'}/>
    //         </form>
    //     </FormularioLogin>
    //   </div>
    // </main>
  );
}

export default Home;
