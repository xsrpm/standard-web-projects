import readExcelFile from 'https://cdn.jsdelivr.net/npm/read-excel-file@5.8.6/+esm';
import {SheetBuilder, FileBuilder, CellBuilder} from 'https://cdn.jsdelivr.net/npm/excel-build@1.1.2/+esm'

const inCargarStockInput1 = document.getElementById("cargar-stock-1");
const inCargarStockInput2 = document.getElementById("cargar-stock-2");
const btnRestarStock = document.getElementById("btn-restar-stock");
const btnExportarResultados = document.getElementById("btn-exportar-resultados");


let stockArray1;
let stockArray2;
let resArray = []
const map = new Map();

inCargarStockInput1.addEventListener("change", async ()=>{
    stockArray1 = await readExcelFile(inCargarStockInput1.files[0])
    //console.log(stockArray1);
    //console.log(stockArray1[0][0]);
    stockArray1.splice(0,1)
    stockArray1.splice(0,1)
    stockArray1.forEach(element => {
        map.get(element[0]) === undefined ? map.set(element[0],{nombre: element[1], stocks:[element[4]],diff: 0, diffRatio: 0}) :  null
        //console.log(element[4])
    });
})

inCargarStockInput2.addEventListener("change", async ()=>{
    stockArray2 = await readExcelFile(inCargarStockInput2.files[0])
   // console.log(stockArray2);
    stockArray2.splice(0,1)
    stockArray2.splice(0,1)
    stockArray2.forEach(element =>{
        map.get(element[0]) === undefined ? map.set(element[0],{nombre: element[1], stocks:[0, element[4]],diff:0, diffRatio:0}) : map.get(element[0]).stocks.push(element[4])
        //console.log(element[4])
    })
})

btnRestarStock.addEventListener('click',()=>{
    //console.log(`CODIGO     NOMBRE      STOCK1      STOCK2      DIFF        DIFF%`);
    function recorrer(value, key, map) {
        value.diff = value.stocks.reduceRight( (acum, element) => acum - element);
        let total = value.stocks.toSorted((a,b)=>b-a)[0]
        value.diffRatio = (value.diff /total) * 100 || 0
        //console.log(`${key} |  ${value.nombre}  | ${value.stocks[0]}  |  ${value.stocks[1] || 0}  | ${value.diff} |  ${value.diffRatio.toFixed(2)} %`);
        if(value.stocks.length === 2){
            resArray.push([key,value.nombre,value.stocks[0] || 0,value.stocks[1] || 0,value.diff,parseFloat(value.diffRatio.toFixed(2))])
        }
      }
    map.forEach(recorrer)
    console.log(resArray)
})

btnExportarResultados.addEventListener('click',()=>{
    const sheet1 = new SheetBuilder('sheet_1')
        .appendThead(['CODIGO', 'NOMBRE', 'STOCK1', 'STOCK2', 'DIFF','DIFF%'])
        // .appendTbody(resArray)
        .setColumnWidth(1,500)
    resArray.map( row =>{
        sheet1.appendCustomRow( [
            new CellBuilder(row[0])
            .setAlignMentHorizontal('left')
            .build(),
            new CellBuilder(row[1])
            .setAlignMentHorizontal('left')
            .build(),
            new CellBuilder(row[2])
            .setAlignMentHorizontal('right')
            .build(),
            new CellBuilder(row[3])
            .setAlignMentHorizontal('right')
            .build(),
            new CellBuilder(row[4])
            .setAlignMentHorizontal('right')
            .build(),
            new CellBuilder(row[5])
            .setAlignMentHorizontal('right')
            .build()
        ])
    })
    const excelFile = new FileBuilder('diffstock');
    excelFile.addSheet(sheet1).download();

})

