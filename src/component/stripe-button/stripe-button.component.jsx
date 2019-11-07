import React from 'react';
 import StripeCheckout from 'react-stripe-checkout';

 const StripeCheckoutButton =({price}) =>{
     const priceForStripe = price * 100;
     const publishablekey=  'pk_test_kkP3bmupbWNuU5OcFuOpJEKj00ojMhApha';   
 const onToken= token => {
    console.log(token)
    alert('Payment Successfull');
}

     return (
         <StripeCheckout
         label='Pay now'
         name='CRWN APP ltd.'
         billingAddress
         shippingAddress
         image='http://svgshare.com/i/CUz.svg'
        description={`your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay now'
        token={onToken}
        stripeKey={publishablekey}
         />
     );
 };
 export default StripeCheckoutButton;