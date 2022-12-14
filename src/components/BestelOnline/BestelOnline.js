import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import './BestelOnline.css';

const BestelOnline = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Wecandance99$', 'Wecandance99$', e.target, 'IUMe4r9MxhmmkAXHw')
      .then((result) => {
         toast.success('Your Order Place successfully!')
         e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div>
            <Toaster
            position="top-center"
            reverseOrder={false}
            duration="2000"
            />
          <div>
            <h2 className='bestel-title'>Plaats hier snel en eenvoudig uw bestelling!</h2>
          </div>
          <form  onSubmit={sendEmail}>
            <div className='container bestel'>
            <div className='row gx-5'>
            <div className='col-lg-4 col-md-4 col-6'>
            <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Naam" name="user_naam"/>
                        </div>
            </div>
                      <div className='col-lg-4 col-md-4 col-6'>
                      <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Achternaam" name="achternaam"/>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-6'>
                      <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Bedrijfsnaam" name="bedrijfsnaam"/>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-6'>
                      <div class="mb-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="E-mail" name="user_email"/>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-6'>
                      <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Telefoon" name="telefoon"/>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-6'>
                      <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Btw number" name="btwnumber"/>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-6'>
                      <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Adres" name="adres"/>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-6'>
                      <div class="mb-3">
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Leveringsdatum" name="leveringsdatum"/>
                        </div>
                      </div>
            </div>
        </div>
        <div className='bestel-table'>
        <div className='container'>
            <div className='row'>
            <table>
              <tr>
                <td className='number1'>1.</td>
                <td>
                <div className='col-lg-6 col-md-6 col-6'>
              <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label input-label">Omschrijving</label>
                       <input type="text" class="form-control input-text1" id="FormControlInput1" placeholder='Aardbeien'  name="product_naam"/>
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label input-field1">Stuks</label>
                        <input type="number" class="form-control input-field1" id="FormControlInput1" name="stuks"/>
                </div>
              </div>
                </td>
                <td>
                <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label label-field">Type</label>
                  <select class="form-select input-field2" aria-label="Default select example" name='type'>
                                <option></option>
                                <option value="Kg">Kg</option>
                                <option value="Stuk">Stuk</option>
                                <option value="Kisten">Kisten</option>
                                <option value="Bussel">Bussel</option>
                            </select>
               
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-4 col-md-4 col-4'>
              <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label input-field3">Opmerking</label>
                        <input type="text" class="form-control input-text2" id="FormControlInput1"  name="opmerking"/>
                        </div>
              </div>
                </td>
              </tr>
              <tr>
                <td className='number'>2.</td>
                <td>
                <div className='col-lg-6 col-md-6 col-6'>
              <div class="mb-3">
                       <input type="text" class="form-control input-text1" id="FormControlInput1"   name="product_naam"/>
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
                        <input type="number" class="form-control input-field1" id="FormControlInput1" name="stuks"/>
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
              <select class="form-select input-field2" aria-label="Default select example" name='type'>
                                <option></option>
                                <option value="Kg">Kg</option>
                                <option value="Stuk">Stuk</option>
                                <option value="Kisten">Kisten</option>
                                <option value="Bussel">Bussel</option>
                            </select>
               
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-4 col-md-4 col-4'>
              <div class="mb-3">
                        <input type="text" class="form-control input-text2" id="FormControlInput1"  name="opmerking"/>
                        </div>
              </div>
                </td>
              </tr>
              <tr>
                <td className='number'>3.</td>
                <td>
                <div className='col-lg-6 col-md-6 col-6'>
              <div class="mb-3">
                       <input type="text" class="form-control input-text1" id="FormControlInput1"   name="product_naam"/>
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
                        <input type="number" class="form-control input-field1" id="FormControlInput1" name="stuks"/>
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
              <select class="form-select input-field2" aria-label="Default select example" name='type'>
                                <option></option>
                                <option value="Kg">Kg</option>
                                <option value="Stuk">Stuk</option>
                                <option value="Kisten">Kisten</option>
                                <option value="Bussel">Bussel</option>
                            </select>
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-4 col-md-4 col-4'>
              <div class="mb-3">
                        <input type="text" class="form-control input-text2" id="FormControlInput1"  name="opmerking"/>
                        </div>
              </div>
                </td>
              </tr>
              <tr>
                <td className='number'>4.</td>
                <td>
                <div className='col-lg-6 col-md-6 col-6'>
              <div class="mb-3">
                       <input type="text" class="form-control input-text1" id="FormControlInput1"   name="product_naam"/>
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
                        <input type="number" class="form-control input-field1" id="FormControlInput1" name="stuks"/>
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
              <select class="form-select input-field2" aria-label="Default select example" name='type' >
                                <option></option>
                                <option value="Kg">Kg</option>
                                <option value="Stuk">Stuk</option>
                                <option value="Kisten">Kisten</option>
                                <option value="Bussel">Bussel</option>
                            </select>
               
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-4 col-md-4 col-4'>
              <div class="mb-3">
                        <input type="text" class="form-control input-text2" id="FormControlInput1"  name="opmerking"/>
                        </div>
              </div>
                </td>
              </tr>
              <tr>
                <td className='number'>5.</td>
                <td>
                <div className='col-lg-6 col-md-6 col-6'>
              <div class="mb-3">
                       <input type="text" class="form-control input-text1" id="FormControlInput1"   name="product_naam"/>
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
                        <input type="number" class="form-control input-field1" id="FormControlInput1" name="stuks"/>
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
              <select class="form-select input-field2" aria-label="Default select example" name='type'>
                                <option></option>
                                <option value="Kg">Kg</option>
                                <option value="Stuk">Stuk</option>
                                <option value="Kisten">Kisten</option>
                                <option value="Bussel">Bussel</option>
                            </select>
               
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-4 col-md-4 col-4'>
              <div class="mb-3">
                        <input type="text" class="form-control input-text2" id="FormControlInput1"  name="opmerking"/>
                        </div>
              </div>
                </td>
              </tr>
              <tr>
                <td className='number'>6.</td>
                <td>
                <div className='col-lg-6 col-md-6 col-6'>
              <div class="mb-3">
                       <input type="text" class="form-control input-text1" id="FormControlInput1"   name="product_naam"/>
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
                        <input type="number" class="form-control input-field1" id="FormControlInput1" name="stuks"/>
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
              <select class="form-select input-field2" aria-label="Default select example" name='type'>
                                <option></option>
                                <option value="Kg">Kg</option>
                                <option value="Stuk">Stuk</option>
                                <option value="Kisten">Kisten</option>
                                <option value="Bussel">Bussel</option>
                            </select>
               
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-4 col-md-4 col-4'>
              <div class="mb-3">
                        <input type="text" class="form-control input-text2" id="FormControlInput1"  name="opmerking"/>
                        </div>
              </div>
                </td>
              </tr>
              <tr>
                <td className='number'>7.</td>
                <td>
                <div className='col-lg-6 col-md-6 col-6'>
              <div class="mb-3">
                       <input type="text" class="form-control input-text1" id="FormControlInput1"   name="product_naam"/>
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
                        <input type="number" class="form-control input-field1" id="FormControlInput1" name="stuks"/>
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
              <select class="form-select input-field2" aria-label="Default select example" name='type'>
                                <option></option>
                                <option value="Kg">Kg</option>
                                <option value="Stuk">Stuk</option>
                                <option value="Kisten">Kisten</option>
                                <option value="Bussel">Bussel</option>
                            </select>
               
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-4 col-md-4 col-4'>
              <div class="mb-3">
                        <input type="text" class="form-control input-text2" id="FormControlInput1"  name="opmerking"/>
                        </div>
              </div>
                </td>
              </tr>
              <tr>
                <td className='number'>8.</td>
                <td>
                <div className='col-lg-6 col-md-6 col-6'>
              <div class="mb-3">
                       <input type="text" class="form-control input-text1" id="FormControlInput1"   name="product_naam"/>
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
                        <input type="number" class="form-control input-field1" id="FormControlInput1" name="stuks"/>
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
              <select class="form-select input-field2" aria-label="Default select example" name='type'>
                                <option></option>
                                <option value="Kg">Kg</option>
                                <option value="Stuk">Stuk</option>
                                <option value="Kisten">Kisten</option>
                                <option value="Bussel">Bussel</option>
                            </select>
               
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-4 col-md-4 col-4'>
              <div class="mb-3">
                        <input type="text" class="form-control input-text2" id="FormControlInput1"  name="opmerking"/>
                        </div>
              </div>
                </td>
              </tr>
              <tr>
                <td className='number'>9.</td>
                <td>
                <div className='col-lg-6 col-md-6 col-6'>
              <div class="mb-3">
                       <input type="text" class="form-control input-text1" id="FormControlInput1"   name="product_naam"/>
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
                        <input type="number" class="form-control input-field1" id="FormControlInput1" name="stuks"/>
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
              <select class="form-select input-field2" aria-label="Default select example" name="type">
                                <option></option>
                                <option value="Kg">Kg</option>
                                <option value="Stuk">Stuk</option>
                                <option value="Kisten">Kisten</option>
                                <option value="Bussel">Bussel</option>
                            </select>
               
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-4 col-md-4 col-4'>
              <div class="mb-3">
                        <input type="text" class="form-control input-text2" id="FormControlInput1"  name="opmerking"/>
                        </div>
              </div>
                </td>
              </tr>
              <tr>
                <td className='number'>10.</td>
                <td>
                <div className='col-lg-6 col-md-6 col-6'>
              <div class="mb-3">
                       <input type="text" class="form-control input-text1" id="FormControlInput1"   name="product_naam"/>
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
                        <input type="number" class="form-control input-field1" id="FormControlInput1" name="stuks"/>
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-1 col-md-1 col-1'>
              <div class="mb-3">
              <select class="form-select input-field2" aria-label="Default select example" name="type">
                                <option></option>
                                <option value="Kg">Kg</option>
                                <option value="Stuk">Stuk</option>
                                <option value="Kisten">Kisten</option>
                                <option value="Bussel">Bussel</option>
                            </select>
               
                        </div>
              </div>
                </td>
                <td>
                <div className='col-lg-4 col-md-4 col-4'>
              <div class="mb-3">
                        <input type="text" class="form-control input-text2" id="FormControlInput1"  name="opmerking"/>
                        </div>
              </div>
                </td>
              </tr>
            </table>
            </div>
        </div>
        </div>
        <div class="mb-3 d-flex justify-content-center">
           <button type="submit" value="Send"className='button'>VERSTUREN</button>
            </div>
            </form>
        </div>
    );
};

export default BestelOnline;