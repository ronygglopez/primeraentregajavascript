alert("Ingrese la opcion del producto que desea llevar, para salir ingrese 0");
let seleccionarProductos = Number(
  prompt(
    "1-cafe latte $1800 2-capuchino $1500 3-cafe con leche frio $1250 4-americano $2000 5-cafe con medialuna $2200 "
  )
);
let seleccionarCantidad;
let total = 0;

const cantidad = (cant, precio) => {
  return cant * precio;
};

while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad = Number(
        prompt("el producto seleccionado es cafe latte, indique la cantidad")
      );
      total += cantidad(seleccionarCantidad, 1800);
      break;
    case 2:
      seleccionarCantidad = Number(
        prompt("el producto seleccionado es capuchino, indique la cantidad")
      );
      total += cantidad(seleccionarCantidad, 1500);
      break;
    case 3:
      seleccionarCantidad = Number(
        prompt(
          "el producto seleccionado es cafe con leche frio, indique la cantidad"
        )
      );
      total += cantidad(seleccionarCantidad, 1250);
      break;
    case 4:
      seleccionarCantidad = Number(
        prompt("el producto seleccionado es americano, indique la cantidad")
      );
      total += cantidad(seleccionarCantidad, 2000);
      break;
    case 5:
      seleccionarCantidad = Number(
        prompt(
          "el producto seleccionado es cafe con medialuna, indique la cantidad"
        )
      );
      total += cantidad(seleccionarCantidad, 2200);
      break;

    default:
      break;
  }
  seleccionarProductos = Number(
    prompt(
      "1-cafe latte $1800 2-capuchino $1500 3-cafe con leche frio $1250 4-americano $2000 5-cafe con medialuna $2200"
    )
  );
}

alert("el total de la compra es de: " + total);

const envio = () => {
  if (total >= 10000) {
    alert("El envio es gratuito");
  } else {
    total += 1000;
    alert("el costo de envio es de 1000, el total es: " + total);
  }
};

// envio()

const metodoDePago = () => {
  let metodo = prompt("ingrese el metodo de pago, tarjeta o efectivo");
  if (metodo == "tarjeta") {
    total *= 1.1;
    console.log(total);
  } else if (metodo == "efectivo") {
    total -= 1000;
    alert("tenes un descuento de 1000, el total es:" + total);
  }
};

metodoDePago();
