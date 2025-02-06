import {Pipe, PipeTransform} from '@angular/core';

/*
  Pipe para formatear textos
*/
@Pipe({name: 'truncate'})
export class TruncatePipe implements PipeTransform {
    static get(value, args?) {
        let limit = args ? args : 40;
        let trail = '...';
        return value.length > limit  ? value.substring(0, limit - 3) + trail : value;
    }

    transform(value, args?) {
        return TruncatePipe.get(value, args);
    }
}
