import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefono'
})
export class TelefonoPipe implements PipeTransform {

  transform(value: string): any {
    let resultado = value.substring(0, 3);
    resultado = resultado + " " + value.substring(3, 5);
    resultado = resultado + " " + value.substring(5, 7);
    resultado = resultado + " " + value.substring(7, 9);
    return resultado;
  }

}
