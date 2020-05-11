'use strict';


const signal = 'green';

if( signal === "red"){
        console.log('stop!');
} else if( signal === "yello"){
        console.log('Caution!');
} else if( signal === "blue"){
        console.log('Go!');
}

switch(signal){
        case "red" :
          console.log('stop!');
          break
        case "yello" :
          console.log('Caution!');
          break;
        case "blue" :
        case "green": //もしくは
          console.log('Go!');
          break;
          default:
        console.log('wrong signal');
        break;

}


        
