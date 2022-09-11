function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    const resultCoupon = document.getElementById("resultP")

    let descuento;
    let precioConDescuento;


    switch(true) {
        case couponValue === "JuanDC_es_Batman":
          descuento = 15;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} pesos`
        break;
        case couponValue === "pero_no_le_digas_a_nadie":
          descuento = 30;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} pesos`
        break;
        case couponValue === "es_un_secreto":
          descuento = 25;
          precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
          resultCoupon.innerText =`Cupón es valido el precio con descuento es de: $${precioConDescuento} pesos`
        break;
        default:
          resultCoupon.innerText = "el cupón ingresado no es valido";
      }
  }
