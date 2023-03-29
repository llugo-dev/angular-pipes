import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {
    
    
    transform(value: string, ...args: any): string {

        if (typeof args[0] === 'boolean') {
            if (args[0]) {
                return value.toUpperCase();
            } else {
                return value.toLowerCase();
            }
        } else {
            return value.toLowerCase();
        }

        
    }




}

