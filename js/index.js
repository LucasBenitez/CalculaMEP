 
function mostrarResultados(){
    //AL30
    var monto = document.getElementById('monto').value;
    var cotizacionAL30=5635
    var cantidadAL30 = Math.round((monto/(cotizacionAL30/100)))
    var costoAL30 = (cantidadAL30*(cotizacionAL30/100)).toFixed(2)
    var comisionAL30 =(0.005*costoAL30).toFixed(2)
    var impuestoAL30 = (0.0001*costoAL30).toFixed(2)
    
    //AL30D
    var cotizacionAL30D=40
    var porPapel = (cotizacionAL30D/100).toFixed(2)
    var ventaAL30D = (cantidadAL30*porPapel).toFixed(2)
    var comisionAL30D =(ventaAL30D*0.005).toFixed(2)
    var dolarOficial=80
    var impuestoAL30D = (0.0001*ventaAL30D*dolarOficial).toFixed(2)
    var montoTotalUSD=(parseFloat(ventaAL30D)-parseFloat(comisionAL30D)).toFixed(2)
     //Resumen
    
    var dolarBlue=153
    var arsAdquiridos = (montoTotalUSD*dolarBlue).toFixed(2)
    
 
    var inversion = (parseFloat(monto)+parseFloat(comisionAL30)+parseFloat(impuestoAL30)+parseFloat(impuestoAL30D)).toFixed(2)
    var cotizacionDolarMep=(parseFloat(inversion)/parseFloat(montoTotalUSD)).toFixed(2)
    var ganancia=(parseFloat(arsAdquiridos)-parseFloat(inversion)).toFixed(2)
    document.getElementById('cotAL30').innerHTML=cotizacionAL30
    document.getElementById('cantAL30').innerHTML=cantidadAL30
    document.getElementById('costoAL30').innerHTML=costoAL30
    document.getElementById('comAL30').innerHTML=comisionAL30
    document.getElementById('impAL30').innerHTML=impuestoAL30
    document.getElementById('montoTotal').innerHTML=inversion
 
    
 
    document.getElementById('cotAL30D').innerHTML=cotizacionAL30D
    document.getElementById('AL30D/100').innerHTML=porPapel
    document.getElementById('ventaAL30D').innerHTML=ventaAL30D
    document.getElementById('comAL30D').innerHTML=comisionAL30D
    document.getElementById('impAL30D').innerHTML=impuestoAL30D
    document.getElementById('montoTotalUSD').innerHTML=montoTotalUSD
 
 
    document.getElementById('MEP').innerHTML=cotizacionDolarMep
    document.getElementById('ARS').innerHTML=arsAdquiridos
    document.getElementById('ganancia').innerHTML=ganancia
 
    document.getElementById('resultados').style.display='block';   
}

