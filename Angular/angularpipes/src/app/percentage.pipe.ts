import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'percentage'
})

export class Percentagepipe implements PipeTransform{
    transform(value: any, totalMarks: number, decimal:number) {
        return (value/totalMarks * 100).toFixed(decimal);
    }
}