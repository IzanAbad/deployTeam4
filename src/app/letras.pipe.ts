import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'letras'
})
export class LetrasPipe implements PipeTransform {

  transform(value: string): string {
    let resultado = "";
    switch(value){
      case 'muybien':
        resultado = resultado + value.substring(0, 1).toUpperCase();
        resultado = resultado + value.substring(1, 3).toLowerCase();
        resultado = resultado + " " + value.substring(3, 4).toUpperCase();
        resultado = resultado + value.substring(4).toLowerCase();
        break;
      default:
        resultado = resultado + value.substring(0, 1).toUpperCase();
        resultado = resultado + value.substring(1).toLowerCase();
    }
    return resultado;
  }

}
