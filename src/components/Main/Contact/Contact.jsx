import { useForm } from "react-hook-form";
import './Contact.css'

const Contact = () => {
  const {register, formState:{errors}} = useForm();
  const regexName = /^[^-@*]+$/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexPhone = /^[0-9]{9}$/;
  
 

  return (

    <section className="contactWrapper" id="contact">
      <div className="trsprnt">
          <h2>Contacto</h2>
          <form className="formContainer" 
        
          action="https://formsubmit.co/8b07d3b9002c8192b2ab9852d52e53e3 " method="POST" >
            <input name="nombre" placeholder="Nombre *" type="text" maxLength={30}{...register("user_name", {
              required:true, 
              pattern:regexName
              } )}/>
                    {errors.user_name?.type === 'required' && <p className="requiredMessage">Este es un campo necesario para saber quién eres.</p>}
                    {errors.user_name?.type === 'pattern' && <p className="requiredMessage">Introduce un nombre válido, por favor</p>}

            <input name="apellidos" placeholder="Apellidos *" type="text" maxLength={40}{...register("user_lastname", {
              required:true, 
              pattern:regexName
              } )} />
                    {errors.user_lastname?.type === 'required' && <p className="requiredMessage">Este es un campo necesario para saber quién eres.</p>}
                    {errors.user_lastname?.type === 'pattern' && <p className="requiredMessage">Introduce un apellido válido, por favor</p>}

            <input name="email" placeholder="Dirección email *" type="text" maxLength={30} {...register("email", {
              required:true, 
              pattern:regexEmail
              } )}  />
                    {errors.email?.type === 'required' && <p className="requiredMessage">Este es un campo necesario para poder contactar contigo.</p>}
                    {errors.email?.type === 'pattern' && <p className="requiredMessage">Introduce un email válido, por favor.</p>}

            <input name="telefono" placeholder="Teléfono" type="text" maxLength={100}{...register("phone", {
              required:false, 
              pattern: regexPhone
              } )} />
                    {errors.phone?.type === 'pattern' && <p className="requiredMessage">Introduce un número de teléfono válido para territorio español</p>}


            <input name="asunto" placeholder="Asunto *" type="text" maxLength={51}{...register("asunto", {
              required:true, 
              maxLength: 50,
              } )}  />
                    {errors.asunto?.type === 'required' && <p className="requiredMessage">Este es un campo necesario para conocer la razón de tu contacto.</p>}
                    {errors.asunto?.type === 'maxLength' && <p className="requiredMessage">El asunto es demasiado largo, no más de 50 carácteres, por favor.</p>}
            <textarea name="mensaje" placeholder="Mensaje *" cols="35" rows="7" maxLength={500} minLength={20}{...register("mensaje", {
              required:true, 
              } )}></textarea>
                    {errors.mensaje?.type === 'pattern' && <p className="requiredMessage">Este es un campo necesario, debe ocupar entre 20 y 500 carácteres.</p>}


                    <button className="button" type="submit">
  <span className="button__text">ENVIAR</span>
  <span className="button__icon"><img src="assets/paper-plane.png" alt="enviar" className="svg"/><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></span>
</button>

{/* 

              <button className="buttonSend" type="submit" > ENVIAR <img src="assets/paper-plane.png" alt="" />
              <div className="spanbutton"></div>
              </button> */}


                {/*  INPUTS PARA CUSTOMIZAR LA ACCIÓN AL ENVÍO DEL FORMULARIO  */}
              <input type="hidden" name="_next" value='http://localhost:5173'/>
              <input type="hidden" name='_captcha' value='false' />
              <input type="hidden" name='_template' value='table' />
          </form>
      </div>
    </section>


  );
};

export default Contact;
