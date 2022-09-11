if (!coupons.includes(couponValue)) {
    alert("El cupon " + couponValue + " no es valido");
}else if (couponValue === "JuanDC_es_Batman") {
    descuento = 15;
}else if (couponValue === "pero_no_le_digas_a_nadie") {
    descuento = 30;
}else if (couponValue === "es_un_secreto") {
    descuento = 25;
}